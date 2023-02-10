import Showdown from "showdown";
const main = ({ data }) => {
	const conv = new Showdown.Converter();
	return (
		<div className="font-mono w-3/5 p-1 break-words overflow-y-scroll">
			<div>
				<h1 className="text-2xl p-2">{data.title} </h1>
				<div
					className="p-1 text-lg	"
					dangerouslySetInnerHTML={{ __html: conv.makeHtml(data.content) }}></div>
			</div>
		</div>
	);
};

export { main as Preview };
