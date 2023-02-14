import SideBar from "./Sidebar";
import Search from "./Search";
import { useState, useEffect } from "react";
import axios from "axios";
import NewItem from "./NewItem";
import CardPreview from "./FilePreview";

const SidePanel = ({ active, setActive }) => {
	const [cards, setCards] = useState([]);

	const filesURL = "http://localhost:3000/files";

	useEffect(() => {
		axios.get(filesURL).then((response) => setCards(response.data));
	}, []);

	function remove(file) {
		setCards(cards.filter((item) => item != file));
	}

	//quando rendereizamos o componente Wraper, ele pega os dados da api e os joga pra sideBar para renderizar os arquivos

	const [searchValue, setSearchValue] = useState("");

	const displayed = cards.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()));
	console.log(displayed);

	function createNewCard(newCard) {
		setInputActive(false);
		setCards([...cards.newCard]);
		//setActive newCard
		PostFiles(filesURL, newCard.title);
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
			list={displayed.map((file) => (
				<CardPreview
					card={file}
					del={remove}
					setActive={setActive}
					activeClassname={active == file ? "bg-stone-700" : ""}
				/>
			))}
		/>
	);
};

export default SidePanel;
