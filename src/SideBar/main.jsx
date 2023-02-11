import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import CardPreview from "./CardPreview";
import {useState} from "react";
import NewItem from "./NewItem";
import {Trashcan} from "./TrashCan/Index";
import Search from "./Search";

const main = ({activeControler, cardsControler}) => {
	const [isInputActive, setInputActive] = useState(false);
	const [searchInput, setSearchInput] = useState(false);
	const [trash, setTrash] = useState([]);
	const [searchText, setSearchText] = useState("");

	function deleteCard (toBeDeleted) {
		cardsControler.setCards([...cardsControler.Cards.filter((card) => card != toBeDeleted)]);
		setTrash([...trash, toBeDeleted]);
		activeControler.setActive(null);
	}

	function showInput () {
		setInputActive(!isInputActive);
		setSearchInput(false);
	}

	function showSearchInput () {
		setSearchInput(!searchInput);
		setSearchText("");
		setInputActive(false);
	}

	function createNewCard (newCard) {
		if (newCard.title != "") {
			cardsControler.setCards([...cardsControler.Cards, newCard]);
			setNewTitle("");
			setInputActive(false);
			activeControler.setActive(newCard);
		} else {
			throw "Por favor insira um titulo";
		}
	}

	function handleSearchText (text) {
		setSearchText(text);
	}

	function display (text) {
		return cardsControler.Cards.filter((card) => card.title.toLowerCase().includes(text));
	}

	const displayed = display(searchText).map((card) => (
		<CardPreview
			activeClassname={activeControler.active == card ? "bg-stone-700" : ""}
			card={card}
			key={card.title + Math.random() * 1000}
			setActive={activeControler.setActive}
			del={deleteCard}
		/>
	));

	return (
		<div
			className="bg-stone-900 text-white w-1/5"
			style={{minWidth: "255px"}}>
			<div className=" h-2/3 overflow-y-scroll  ">
				<div className="px-2 mb-1 bg-stone-700 flex justify-between">
					<h2 className="m-2 text-xl">Workspace</h2>
					<button
						className="p-1"
						onClick={() => showSearchInput()}>
						<FontAwesomeIcon icon={faMagnifyingGlass} />
					</button>
					<button
						onClick={() => showInput()}
						className="p-1 text-sm outline-none ">
						New File <FontAwesomeIcon icon={faPlus} />
					</button>
				</div>
				<div className="mb-3 flex flex-col gap-2">
					{isInputActive && <NewItem createNewCard={createNewCard} />}
					{searchInput && <Search handleSearch={handleSearchText} />}
					{displayed}
				</div>
			</div>
			<div className="overflow-y-scroll h-1/3">
				<Trashcan
					trashControler={{trash, setTrash}}
					cardsControler={cardsControler}
				/>
			</div>
		</div>
	);
};

export {main as SideBar};
