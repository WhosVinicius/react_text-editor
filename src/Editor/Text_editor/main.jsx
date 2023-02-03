import { useEffect, useState } from "react";

const main = ({ content, setcontent, title }) => {
	// useEffect(() => {
	// 	if (active != null) {
	// 		setcontent(active.body);
	// 	}
	// }, [active]);

	// const [title, setTitle] = useState("no file selected");

	function handleTextChange(newText) {
		setcontent(newText);
	}

	return (
		<div className='px-1 w-2/5 flex border-r-2 flex-col border-neutral-700'>
			<div className='flex p-2 justify-between'>
				<h1 className='ease-in-out duration-300 outline-none font-mono text-lg text-center p-1'>{title}</h1>
			</div>
			<textarea
				placeholder={"Write markdown over here"}
				onChange={(e) => handleTextChange(e.target.value)}
				value={content}
				autoFocus
				className='h-full font-mono p-2 outline-none break-words resize-none'></textarea>
		</div>
	);
};

export { main as Editor };
