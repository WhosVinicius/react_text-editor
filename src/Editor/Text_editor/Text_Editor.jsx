import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const main = ({ data, save, setcontent }) => {
	const [saved, setSaved] = useState(true);

	function handleTextChange(newText) {
		setcontent(newText);
		setSaved(false);
	}

	return (
		<div className='px-1 w-2/5 flex border-r-2 flex-col border-neutral-700 bg-white'>
			<div className='flex p-2 justify-between'>
				<h1 className='ease-in-out duration-300 outline-none font-mono text-2xl text-center p-1'>
					{data.title + " " + (saved == true ? "(saved)" : "(unsaved)")}
				</h1>
				<button>
					<FontAwesomeIcon
						onClick={() => save(data.content, setSaved(true))}
						icon={faCheck}
					/>
				</button>
			</div>
			<textarea
				placeholder={"Write markdown over here"}
				onChange={(e) => handleTextChange(e.target.value)}
				value={data.content}
				autoFocus
				className='h-full font-mono text-lg p-2 outline-none break-words resize-none'></textarea>
		</div>
	);
};

export { main as Editor };
