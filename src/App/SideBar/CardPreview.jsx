import { faPen, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const CardPreview = ({ card, del, setActive, activeClassname }) => {
	const [isHovering, setHovering] = useState(false);
	return (
		<div
			title={card.title}
			onMouseEnter={() => setHovering(!isHovering)}
			onMouseLeave={() => setHovering(!isHovering)}
			className={activeClassname + "  flex justify-between px-2 ease-in-out duration-300"}>
			<span
				onClick={() => setActive(card)}
				className={"ml-2 cursor-pointer outline-none bg-inherit flex justify-between px-2 "}>
				{card.title}
			</span>
			{isHovering && (
				<div className="flex gap-3 ease-in-out duration-300">
					<button>
						<FontAwesomeIcon
							style={{ width: "15px", height: "15px" }}
							icon={faPen}
						/>
					</button>
					<button
						title="Delete item"
						onClick={() => del(card)}>
						<FontAwesomeIcon
							style={{ width: "15px", height: "15px" }}
							icon={faX}
						/>
					</button>
				</div>
			)}
		</div>
	);
};

export default CardPreview;
