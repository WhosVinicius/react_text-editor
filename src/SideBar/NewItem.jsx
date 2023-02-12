import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSave} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
const NewItem = ({createNewCard}) => {
	const [newTitle, setNewTitle] = useState("");

	const newCard = {
		title: newTitle,
		body: "",
	};

	async function PostData () {
		axios
			.post("http://localhost:3000/files", {
				name: newTitle
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}


	return (
		<>
			<form
				method="post"
				onSubmit={(e) => {
					e.preventDefault();
					if (newTitle != '') {
						createNewCard(newCard)
						PostData();
						setNewTitle('')
					}
				}}
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
						type="submit"
						title="save file">
						<FontAwesomeIcon icon={faSave} />
					</button>
				</div>
			</form>
		</>
	);
};

export default NewItem;
