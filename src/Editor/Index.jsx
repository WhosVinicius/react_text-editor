import React from "react";
import { Preview } from "./Output/main";
import { Editor } from "./Text_editor/main";

const Index = ({ active }) => {
	return (
		<>
			<Editor />
			<Preview />
		</>
	);
};

export default Index;
