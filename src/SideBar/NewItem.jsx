import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";

const NewItem = ({ createNewCard }) => {
	const [newTitle, setNewTitle] = useState("");

	const newCard = {
		title: newTitle,
		body: "",
	};

	return (
		<>
			<form
				onSubmit={(e) => e.preventDefault()}
				className="px-2 pt-1 p-2 border-b border-gray-600  ease-in-out duration-300 flex  gap-1">
				<input
					value={newTitle}
					maxLength={20}
					onChange={(e) => setNewTitle(e.target.value)}
					autoFocus
					placeholder="New file title"
					className="w-44 bg-stone-700 outline-none px-3 rounded-sm"
					type="text"
				/>
				<div className="flex w-full gap-1 justify-between px-2">
					<p className="my-2">{20 - newTitle.length}</p>
					<button
						className=""
						onClick={() => createNewCard(newCard)}
						title="save file">
						<FontAwesomeIcon icon={faSave} />
					</button>
				</div>
			</form>
		</>
	);
};

export default NewItem;
