import React from "react";

function SecondsCounter({ seconds }) {
	// Convierto los segundos en string con 6 dígitos
	const digits = seconds.toString().padStart(6, "0").split("");

	return (
		<div className="counter">
			<div className="digit clock">
				<i className="fa-regular fa-clock"></i>
			</div>

			{digits.map((digit, index) => (
				<div key={index} className="digit">
					{digit}
				</div>
			))}
		</div>
	);
}

export default function Home({ seconds }) {
	return <SecondsCounter seconds={seconds} />;
}


