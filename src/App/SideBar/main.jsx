import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CardPreview from "./CardPreview";
import { useState } from "react";
import NewItem from "./NewItem";
import { Trashcan } from "./TrashCan/Index";
const main = ({ activeControler, cardsControler }) => {
	const [isInputActive, setInputActive] = useState(false);
	const [newTitle, setNewTitle] = useState("");
	const [trash, setTrash] = useState([]);

	const newCard = {
		title: newTitle,
		body: "",
	};

	function deleteCard(toBeDeleted) {
		cardsControler.setCards([...cardsControler.Cards.filter((card) => card != toBeDeleted)]);
		setTrash([...trash, toBeDeleted]);
		activeControler.setActive(null);
	}

	function showInput() {
		setInputActive(!isInputActive);
	}
	function createNewCard(newCard) {
		if (newCard.title != "") {
			cardsControler.setCards([...cardsControler.Cards, newCard]);
			setNewTitle("");
			setInputActive(false);
			activeControler.setActive(newCard);
		} else {
			throw "Por favor insira um titulo";
		}
	}
	return (
		<div
			className="bg-stone-900 text-white w-1/5"
			style={{ minWidth: "255px" }}>
			<div className=" h-2/3   ">
				<div className="px-2 bg-stone-700 mb-2 flex justify-between">
					<h2 className="m-2 text-xl">Root</h2>
					<button
						onClick={(e) => showInput()}
						className="p-1 outline-none ">
						New File <FontAwesomeIcon icon={faPlus} />
					</button>
				</div>
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
			<Trashcan
				trashControler={{ trash, setTrash }}
				cardsControler={cardsControler}
			/>
		</div>
	);
};

export { main as SideBar };
