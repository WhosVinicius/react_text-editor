import { useState } from "react";
import cards from "./cards";
import { Editor } from "./Editor/Text_editor/main";
import { Preview } from "./Editor/Output/main";
import { SideBar } from "./SideBar/main";

const App = () => {
	const [active, setActive] = useState(null);
	const [content, setcontent] = useState(active != null ? active.body : "");
	const [stateCards, setCards] = useState([...cards]);

	return (
		<div className='h-screen flex'>
			<SideBar
				cards={stateCards}
				active={active}
				setActive={setActive}
				setCards={setCards}
			/>
			<Editor
				active={active}
				// content={content}
				// setcontent={setcontent}
			/>
			<Preview active={active} />
		</div>
	);
};

export default App;
