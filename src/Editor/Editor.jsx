import { useEffect, useState } from "react";
import { putData } from "../api";
import { Preview } from "./Output/Output";
import Text_Editor from "./Text_editor/Text_Editor";
const Editor = ({ active }) => {
	const [content, setContent] = useState("");
	const [saved, SetSaved] = useState(true);

	useEffect(() => {
		if (active != null) {
			setContent(active.body);
		}
		SetSaved(true);
	}, [active]);

	function save(item) {
		active.body = item;
		SetSaved(true);
		putData("http://localhost:3000/files", active);
	}

	const title = active ? active.title : "";
	const activeFile = { content, title };

	return (
		<>
			<Text_Editor
				data={activeFile}
				setcontent={setContent}
				SetSaved={SetSaved}
				saved={saved}
				save={save}
			/>
			<Preview data={activeFile} />
		</>
	);
};

export default Editor;
