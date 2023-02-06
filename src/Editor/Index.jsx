import { useEffect, useState } from "react";
import { Preview } from "./Output/main";
import { Editor } from "./Text_editor/main";

const Index = ({ active }) => {
	const [content, setContent] = useState("");

	useEffect(() => {
		if (active != null) {
			setContent(active.body);
		}
	}, [active]);

	function save(item) {
		active.body = item;
	}

	const title = active ? active.title : "";

	const activePROPS = { content, title };

	return (
		<>
			<Editor
				data={activePROPS}
				setcontent={setContent}
				save={save}
			/>
			<Preview data={activePROPS} />
		</>
	);
};

export { Index as Editor };
