import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";

const NewItem = ({ createNewCard, setNewTitle, newCard }) => {
	const [contchars] = useState(20);
	return (
		<>
			<form
				onSubmit={(e) => e.preventDefault()}
				className="px-2 p-2 border-b border-gray-600 bg-stone-600  ease-in-out duration-300 flex gap-3">
				<input
					value={newCard.Title}
					maxLength={20}
					onChange={(e) => setNewTitle(e.target.value)}
					autoFocus
					placeholder="New file title"
					className="w-44 bg-stone-700 outline-none px-3 rounded-sm"
					type="text"
				/>
				<div className="flex w-full justify-between px-2">
					<p className="my-2">{contchars - newCard.title.length}</p>
					<button
						className=""
						onClick={(e) => createNewCard(newCard)}
						title="save file">
						<FontAwesomeIcon icon={faSave} />
					</button>
				</div>
			</form>
		</>
	);
};
export default NewItem;
