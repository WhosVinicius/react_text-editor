const CardPreview = ({ card, setActive, Class }) => {
	return (
		<div
			title={card.title}
			className={Class + " w-full  p-1 ease-in-out duration-300"}>
			<span
				onClick={() => setActive(card)}
				className={"cursor-pointer  ml-5 w-full"}>
				{card.title}
			</span>
		</div>
	);
};

export default CardPreview;
