import { useState } from "react";
import Editor from "./Editor/Editor";
import SidePanel from "./SidePanel/SidePanel";
const App = () => {
	const [active, setActive] = useState(null);
	if (active != null) {
		document.title = active.title;
	}
	return (
		<div className='flex flex-col bg-stone-800 '>
			<div className='flex h-screen  '>
				<SidePanel
					active={active}
					setActive={setActive}
				/>
				<Editor active={active} />
			</div>
		</div>
	);
};

export default App;
