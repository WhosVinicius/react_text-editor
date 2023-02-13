import { useState, useEffect } from "react";
import { SideBar } from ".//SideBar/main";
import { Editor } from "./Editor/Index";
import axios from "axios";
const App = () => {
	const [active, setActive] = useState(null);

	if (active != null) {
		document.title = active.title;
	}

	return (
		<div className="flex flex-col bg-stone-800 ">
			<div className="flex h-screen  ">
				<SideBar activeControler={{ active, setActive }} />
				<Editor active={active} />
			</div>
		</div>
	);
};

export default App;
