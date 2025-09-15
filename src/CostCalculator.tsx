import React, { useState } from "react";

type Props = {
	priceOfSingleVMPerHour: number;
};

const CostCalculator = ({ priceOfSingleVMPerHour }: Props) => {
	const [numberOfVMs, setNumberOfVSs] = useState(0);

	const readNumberOfVMs = (e) => {
		const getValue = e.target.value;
		if (Number(getValue)) {
			setNumberOfVSs(Number(getValue));
		}
	};

	const perHour = priceOfSingleVMPerHour * numberOfVMs;
	const perDay = perHour * 24;
	const perMonth = perDay * 30;
	const perYear = perDay * 365;
	return (
		<div>
			<h1>VM Cost Calculator</h1>
			<label htmlFor="vmNumber">Number of VMs</label>
			<input type="text" id="vmNumber" placeholder="Number of VMs" onChange={readNumberOfVMs}></input>
			<p>Cost per hour: {perHour.toFixed(2)}</p>
			<p>Cost per day: {perDay.toFixed(2)}</p>
			<p>Cost per month: {perMonth.toFixed(2)}</p>
			<p>Cost per year: {perYear.toFixed(2)}</p>
		</div>
	);
};

export default CostCalculator;
