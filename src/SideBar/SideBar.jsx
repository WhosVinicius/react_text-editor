import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function showInput() {
	setInputActive(!isInputActive);
	setSearchInput(false);
}

function showSearchInput() {
	setSearchInput(!searchInput);
	setSearchText("");
	setInputActive(false);
}

function createNewCard(newCard) {
	if (newCard.title != "") {
		cardsControler.setCards([...cardsControler.Cards, newCard]);
		setInputActive(false);
		activeControler.setActive(newCard);
		PostFiles(filesURL, newCard.title);
	} else {
		throw "Por favor insira um titulo";
	}
}

const SideBar = ({ trash, list, activeControler, cardsControler }) => {
	const [isInputActive, setInputActive] = useState(false);
	const [searchInput, setSearchInput] = useState(false);
	return (
		<div
			className="bg-stone-900 text-white w-1/5"
			style={{ minWidth: "255px" }}>
			<div className=" h-2/3 overflow-y-scroll overflow-x-hidden  ">
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
					{searchInput && <Search handleSearch={setSearchText} />}
					{list}
				</div>
			</div>
			<div className="overflow-y-scroll h-1/3">{trash}</div>
		</div>
	);
};
export default SideBar;

import { useState } from "react";

// const SideBar = ({ SearchForm, list }) => {
// 	const [isInputActive, setInputActive] = useState(false);
// 	const [searchInput, setSearchInput] = useState(false);

// 	function showInput() {
// 		setInputActive(!isInputActive);
// 		setSearchInput(false);
// 	}

// 	function showSearchInput() {
// 		setSearchInput(!searchInput);
// 		setSearchText("");
// 		setInputActive(false);
// 	}

// 	return (
// 		<div
// 			className="bg-stone-900 text-white w-1/5"
// 			style={{ minWidth: "255px" }}>
// 			<div className=" h-2/3 overflow-y-scroll overflow-x-hidden  ">
// 				<div className="px-2 mb-1 bg-stone-700 flex justify-between">
// 					<h2 className="m-2 text-xl">Workspace</h2>
// 					<button
// 						className="p-1"
// 						onClick={() => showSearchInput()}></button>
// 					<button
// 						onClick={() => showInput()}
// 						className="p-1 text-sm outline-none "></button>
// 				</div>
// 				<div className="mb-3 flex flex-col gap-2">
// 					{/* {isInputActive && <NewItem createNewCard={createNewCard} />} */}SHOW INPUT
// 					{isInputActive && SearchForm}
// 					{/* {list} */}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
