import "./card.scss";
import { useState } from "react";
import Star from "../../assets/icon-star.svg";

export default function Card() {
	const [selecteRate, setSelectedRate] = useState(0);
	const [displayForm, setDisplayForm] = useState(true);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setDisplayForm(false);
	};

	function RatingButton({ value }: { value: number }) {
		return (
			<label
				htmlFor={`rating${value}`}
				className={`rating-value ${selecteRate == value && "active"}`}
			>
				{value}
				<input
					className="radio-input"
					type="radio"
					name="rate"
					id={`rating${value}`}
					value={1}
					onChange={() => setSelectedRate(value)}
				/>
			</label>
		);
	}

	function RatingComponent() {
		return (
			<div className="card-rating">
				<div className="star-container">
					<img className="star" src={Star} alt="star icon" />
				</div>

				<h2>How did we do?</h2>
				<p>
					Please let us know how we did with your support request. All feedback
					is appreciated to help us improve our offering!
				</p>

				<form
					action="#"
					onSubmit={handleSubmit}
					data-testid="rating-form"
					className="form-container"
				>
					<ul className="rating-values">
						<RatingButton value={1} />
						<RatingButton value={2} />
						<RatingButton value={3} />
						<RatingButton value={4} />
						<RatingButton value={5} />
					</ul>

					<div className="btn-container">
						<button type="submit" role="submit" className="btn">
							Submit
						</button>
					</div>
				</form>
			</div>
		);
	}

	function ResultComponent() {
		return (
			<div data-testid="result">
				<p data-testid="selected-rate">
					{`You have selected ${selecteRate} out of 5`}
				</p>
			</div>
		);
	}

	return (
		<>
			<div className="">
				{displayForm && <RatingComponent />}
				{!displayForm && <ResultComponent />}
			</div>
		</>
	);
}
