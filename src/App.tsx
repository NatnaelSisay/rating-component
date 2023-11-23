import "./App.scss";
import Star from "./assets/icon-star.svg";

function App() {
	return (
		<>
			<div className="app-container">
				<div className="app-content">
					<div className="card-rating">
						<div className="star-container">
							<img className="star" src={Star} alt="star icon" />
						</div>

						<h2>How did we do?</h2>
						<p>
							Please let us know how we did with your support request. All
							feedback is appreciated to help us improve our offering!
						</p>

						<ul className="rating-values">
							<li className="rating-value">1</li>
							<li className="rating-value">2</li>
							<li className="rating-value">3</li>
							<li className="rating-value">4</li>
							<li className="rating-value">5</li>
						</ul>

						<div className="btn-container">
							<button className="btn" data-testid="submit">
								submit
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
