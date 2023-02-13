import { faTrash, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo } from "@fortawesome/free-solid-svg-icons";

const Index = ({ trashControler, cardsControler }) => {
	function remove(toBeDeleted) {
		cardsControler.setCards([...cardsControler.Cards, toBeDeleted]);
		trashControler.setTrash([...trashControler.trash.filter((card) => card != toBeDeleted)]);
	}

	function removePermanent(tobeRemoved) {
		trashControler.setTrash([...trashControler.trash.filter((card) => card != tobeRemoved)]);
	}

	return (
		<div>
			<div className=" bg-stone-700 p-2 ">
				<span className="m-2 text-lg ">
					Trashcan <FontAwesomeIcon icon={faTrash} />
				</span>
			</div>
			<div className="px-2 flex  flex-col items-center ">
				{trashControler.trash.map((card) => (
					<div className=" p-2 ml-2 flex w-full animate-popIn justify-between">
						{card.title}
						<div className="flex gap-2">
							<form
								method="DELETE"
								onSubmit={(e) => e.preventDefault()}>
								<button
									title="Undo delete"
									onClick={() => remove(card)}>
									<FontAwesomeIcon icon={faRedo} />
								</button>
							</form>
							<button
								title="Undo delete"
								onClick={() => removePermanent(card)}>
								<FontAwesomeIcon icon={faX} />
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
export { Index as Trashcan };
