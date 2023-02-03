import React, { useEffect, useState } from "react";
import { Preview } from "./Output/main";
import { Editor } from "./Text_editor/main";

const Index = ({ active }) => {
	useEffect(() => {
		if (active != null) {
			setcontent(active.body);
		}
	}, [active]);

	const [content, setcontent] = useState(active ? active.body : "");
	return (
		<>
			<Editor
				content={content}
				setcontent={setcontent}
				title={active ? active.title : ""}
			/>
			<Preview
				content={content}
				title={active ? active.title : ""}
			/>
		</>
	);
};

export default Index;
