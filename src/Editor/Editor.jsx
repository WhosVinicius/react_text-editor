import { useEffect, useState } from "react";
import { putData } from "../api";
import { Preview } from "./Output/Output";
import { Editor } from "./Text_editor/Text_Editor";
const Index = ({ active }) => {
	const [content, setContent] = useState("");
	const [saved, SetSaved] = useState(true);
	useEffect(() => {
		if (active != null) {
			setContent(active.body);
		}
	}, [active]);

	function save(item) {
		active.body = item;
		SetSaved(true);
		putData("http://localhost:3000/files", active);
	}

	const title = active ? active.title : "";

	const activePROPS = { content, title };

	return (
		<>
			<Editor
				data={activePROPS}
				setcontent={setContent}
				SetSaved={SetSaved}
				saved={saved}
				save={save}
			/>
			<Preview data={activePROPS} />
		</>
	);
};

export { Index as Editor };
