import Search from "./Search";
import { useState, useEffect } from "react";
import SideBar from "./SideBar";
import axios from "axios";
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
		axios.get(filesURL).then((response) => setCards(response.data));
		axios.get(trashURL).then((response) => setTrashFiles(response.data));
	}, []);

	function remove(file) {
		setCards(cards.filter((item) => item != file));
		PostFiles(trashURL, file);
		removeFromAPI(filesURL, file);
		setTrashFiles([...trashFiles, file]);
	}

	function undoRemove(file) {
		setCards([...cards, file]);
		setTrashFiles(trashFiles.filter((item) => item != file));
	}

	function createNewCard(newCard) {
		setCards([...cards, newCard]);
		setActive(newCard);
		setInputActive(false);
		PostFiles(filesURL, newCard);
	}

	function filterFiles(text) {
		return cards.filter((el) => el.title.toLowerCase().includes(text.toLowerCase()));
	}

	return (
		<SideBar
			SearchForm={
				<Search
					baseVal={searchValue}
					handleSearch={setSearchValue}
				/>
			}
			NewItem={<NewItem createNewCard={createNewCard} />}
			list={filterFiles(searchValue).map((file) => (
				<CardPreview
					card={file}
					del={remove}
					setActive={setActive}
					activeClassname={active == file ? "bg-stone-700" : ""}
				/>
			))}
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
