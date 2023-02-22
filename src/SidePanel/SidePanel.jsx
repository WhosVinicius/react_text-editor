import Search from "./Search";
import { useState, useEffect } from "react";
import SideBar from "./SideBar";
import NewItem from "./NewItem";
import CardPreview from "./FilePreview";
import { getFiles, PostFiles, removeFromAPI } from "../api";
import Trashcan from "./TrashCan/Trashcan";

const SidePanel = ({ active, setActive }) => {
	const [cards, setCards] = useState([]);
	const [trashFiles, setTrashFiles] = useState([]);
	const [isInputActive, setInputActive] = useState(false);
	const [searchValue, setSearchValue] = useState("");
	const filesURL = "http://localhost:3000/files";
	const trashURL = "http://localhost:3000/trash";

	useEffect(() => {
		const get = async () => {
			setCards(await getFiles(filesURL));
			setTrashFiles(await getFiles(trashURL));
		};
		get();
	}, []);

	function remove(ToBeRemoved) {
		setCards(cards.filter((item) => item != ToBeRemoved));
		setTrashFiles([...trashFiles, ToBeRemoved]);
		PostFiles(trashURL, ToBeRemoved);
		removeFromAPI(`${filesURL}/${ToBeRemoved.title}`);
	}

	function undoRemove(ToBeRemoved) {
		setCards([...cards, ToBeRemoved]);
		setTrashFiles(trashFiles.filter((item) => item != ToBeRemoved));
		removeFromAPI(`${trashURL}/${ToBeRemoved.title}`);
		PostFiles(filesURL, ToBeRemoved);
	}

	function createNewCard(newFile) {
		setCards([...cards, newFile]);
		setActive(newFile);
		setInputActive(false);
		PostFiles(filesURL, newFile);
	}

	function filterFiles(text) {
		return cards.filter((element) => element.title.toLowerCase().includes(text.toLowerCase()));
	}

	const list = filterFiles(searchValue).map((file) => (
		<CardPreview
			card={file}
			del={remove}
			setActive={setActive}
			activeClassname={active == file ? "bg-stone-700" : ""}
		/>
	));

	return (
		<SideBar
			SearchForm={
				<Search
					baseVal={searchValue}
					handleSearch={setSearchValue}
				/>
			}
			NewItem={<NewItem createNewCard={createNewCard} />}
			list={list.length > 0 ? list : "the list is empty"}
			setInputActive={setInputActive}
			isInputActive={isInputActive}
			Trash={
				<Trashcan
					trash={trashFiles}
					setTrash={setTrashFiles}
					removeFromTrash={undoRemove}
				/>
			}
		/>
	);
};

export default SidePanel;
