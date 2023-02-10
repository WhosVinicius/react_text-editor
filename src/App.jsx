import { useState } from "react";
import cards from "./cards";
import { SideBar } from "./App/SideBar/main";
import { Editor } from "./App/Editor/Index";

const App = () => {
	const [active, setActive] = useState(null);
	const [Cards, setCards] = useState([...cards]);

	if (active != null) {
		document.title = active.title;
	}

	return (
		<div className="h-screen flex">
			<SideBar
				cardsControler={{ Cards, setCards }}
				activeControler={{ active, setActive }}
			/>
			<Editor active={active} />
		</div>
	);
};

export default App;
