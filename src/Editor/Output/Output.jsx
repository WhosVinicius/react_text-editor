import React from "react";
import Showdown from "showdown";
const main = ({ data }) => {
	const conv = new Showdown.Converter();
	return (
		<div
			div
			className='px-1 w-2/5 flex border-r-2 flex-col border-neutral-700 bg-white'>
			<div className='flex p-2 justify-between'>
				<h1 className='ease-in-out duration-300 outline-none font-mono text-2xl text-center p-1'>{data.title}</h1>
			</div>
			<div
				className='h-full font-mono text-lg p-2 outline-none break-words overflow-y-auto  '
				dangerouslySetInnerHTML={{ __html: conv.makeHtml(data.content) }}></div>
		</div>
	);
};

export { main as Preview };
