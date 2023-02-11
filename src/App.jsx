import {useState} from "react";
import cards from "./cards";
import {SideBar} from ".//SideBar/main";
import {Editor} from "./Editor/Index";

const App = () => {
	const [active, setActive] = useState(null);
	const [Cards, setCards] = useState([...cards]);

	if (active != null) {
		document.title = active.title;
	}

	return (
		<div className="flex flex-col bg-stone-800 ">
			<div className="flex h-screen  ">
				<SideBar
					cardsControler={{Cards, setCards}}
					activeControler={{active, setActive}}
				/>
				<Editor active={active} />
			</div>
		</div>
	);
};

export default App;
