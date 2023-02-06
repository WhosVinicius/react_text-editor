import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CardPreview from "./CardPreview";
import { useState } from "react";
import NewItem from "./NewItem";

const main = ({ activeControler, cardsControler }) => {
	const [isInputActive, setInputActive] = useState(false);
	const [newTitle, setNewTitle] = useState("");

	const newCard = {
		title: newTitle,
		body: "",
	};

	function deleteCard(toBeDeleted) {
		cardsControler.setCards([...cardsControler.Cards.filter((card) => card != toBeDeleted)]);
		activeControler.setActive(null);
		console.log(activeControler.active);
	}

	function showInput() {
		setInputActive(!isInputActive);
	}
	function createNewCard(newCard) {
		if (newCard.title != "") {
			cardsControler.setCards([...cardsControler.Cards, newCard]);
			setNewTitle("");
			setInputActive(false);
		} else {
			throw "Por favor insira um titulo";
		}
	}
	return (
		<div
			style={{ minWidth: "275px" }}
			className=" bg-stone-900 w-1/5 text-white ">
			<button
				onClick={(e) => showInput()}
				className="m-2 p-1 ">
				New File <FontAwesomeIcon icon={faPlus} />
			</button>
			<div className="flex flex-col gap-2">
				{isInputActive && (
					<NewItem
						createNewCard={createNewCard}
						setNewTitle={setNewTitle}
						newCard={newCard}
					/>
				)}
				{cardsControler.Cards.map((card) => (
					<CardPreview
						activeClassname={activeControler.active == card ? "bg-stone-700" : ""}
						card={card}
						key={card.title + Math.random() * 1000}
						setActive={activeControler.setActive}
						del={deleteCard}
					/>
				))}
			</div>
		</div>
	);
};

export { main as SideBar };
