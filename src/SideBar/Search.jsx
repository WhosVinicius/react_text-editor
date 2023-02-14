import { useEffect } from "react";

const Search = ({ baseVal, handleSearch }) => {
	useEffect(() => {
		handleSearch("");
	}, []);

	return (
		<>
			<form
				onSubmit={(e) => e.preventDefault()}
				className="px-2 p-2 border-b border-gray-600">
				<input
					maxLength={20}
					autoFocus
					value={baseVal}
					placeholder="Search for a file"
					className=" w-full bg-stone-700 outline-none py-1 px-3 rounded-sm"
					type="text"
					onChange={(e) => handleSearch(e.target.value.toLowerCase())}
				/>
			</form>
		</>
	);
};

export default Search;
