import "./App.css";
import CostCalculator from "./CostCalculator";

function App() {
	let price = 0.69;
	return (
		<div className="App">
			<CostCalculator priceOfSingleVMPerHour={price} />
		</div>
	);
}

export default App;
