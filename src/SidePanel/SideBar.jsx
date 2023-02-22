import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
function SideBar({ NewItem, SearchForm, list, isInputActive, setInputActive, Trash }) {
	const [searchInput, setSearchInput] = useState(false);

	const showInput = () => {
		setInputActive(!isInputActive);
		setSearchInput(false);
	};

	const showSearchInput = () => {
		setSearchInput(!searchInput);
		setInputActive(false);
	};

	return (
		<div
			className='bg-stone-900 text-white w-1/5'
			style={{ minWidth: "255px" }}>
			<div className='h-2/3 overflow-y-scroll overflow-x-hidden  '>
				<div className='px-2 mb-1 bg-stone-700 flex justify-between'>
					<h2 className='m-2 text-xl'>Workspace</h2>
					<button
						className='p-1'
						onClick={() => showSearchInput()}>
						<FontAwesomeIcon icon={faMagnifyingGlass} />
					</button>
					<button
						onClick={() => showInput()}
						className='p-1 text-sm outline-none '>
						New File <FontAwesomeIcon icon={faPlus} />
					</button>
				</div>
				<div className='mb-3 flex flex-col gap-2'>
					{isInputActive && NewItem}
					{searchInput && SearchForm}
					{list}
				</div>
			</div>
			<div className='overflow-y-scroll h-1/3'>{Trash}</div>
		</div>
	);
}
export default SideBar;
