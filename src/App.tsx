import "./App.scss";

import Card from "./components/card";

function App() {
	return (
		<>
			<div className="flex flex-center app-container">
				<div className="card-container">
					<Card />
				</div>
			</div>
		</>
	);
}

export default App;
