import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faPlus } from "@fortawesome/free-solid-svg-icons";
import CardPreview from "./CardPreview";
import { useState } from "react";

const main = ({ active, setActive, cards, setCards }) => {
	const [isCreateActive, setCreateAsActive] = useState(false);
	const [newTitle, setNewTitle] = useState("");
	const [contchars, setchars] = useState(20);

	const newCard = {
		title: newTitle,
		body: "",
	};

	function showInput() {
		setCreateAsActive(!isCreateActive);
	}

	function createNewCard(newCard) {
		if (newCard.title != "") {
			setCards([...cards, newCard]);
			setNewTitle("");
			setCreateAsActive(false);
		} else {
			throw "Por favor insira um titulo";
		}
	}

	return (
		<div className=' bg-stone-900 w-1/5 text-white '>
			<button
				onClick={(e) => showInput()}
				className='m-2 p-1 '>
				New File <FontAwesomeIcon icon={faPlus} />
			</button>
			<div className='flex flex-col'>
				{isCreateActive && (
					<form
						onSubmit={(e) => e.preventDefault()}
						className='p-2 border-b border-gray-600 bg-stone-600  ease-in-out duration-300 flex gap-3'>
						<input
							value={newTitle}
							maxLength={20}
							onChange={(e) => setNewTitle(e.target.value)}
							autoFocus
							placeholder='New file title'
							className='w-44 bg-stone-700 outline-none  p-1 rounded-sm'
							type='text'
						/>
						<div className='flex w-full justify-between px-2'>
							<p className='my-2'>{contchars - newTitle.length}</p>
							<button
								className=''
								onClick={(e) => createNewCard(newCard)}
								title='save file'>
								<FontAwesomeIcon icon={faSave} />
							</button>
						</div>
					</form>
				)}
				{cards.map((card) => (
					<CardPreview
						Class={active == card ? "bg-stone-700" : ""}
						card={card}
						key={card.title + Math.random() * 100}
						setActive={setActive}
					/>
				))}
			</div>
		</div>
	);
};

export { main as SideBar };
