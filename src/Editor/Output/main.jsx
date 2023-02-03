import Showdown from "showdown";
const main = ({ active }) => {
	const conv = new Showdown.Converter();
	return (
		<div className='font-mono w-2/5 p-1 break-words overflow-scroll'>
			<div>
				<h1 className='text-lg p-2'>{active ? active.title : ""}</h1>
				<div
					className='p-1	'
					dangerouslySetInnerHTML={{ __html: conv.makeHtml(active ? active.body : "") }}></div>
			</div>
		</div>
	);
};

export { main as Preview };
