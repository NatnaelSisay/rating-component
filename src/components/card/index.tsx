import "./card.scss";
import { useState } from "react";
import Star from "../../assets/icon-star.svg";
import Illustration from "../../assets/illustration-thank-you.svg";

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
				className={`flex flex-center rating ${
					selecteRate == value && "active"
				}`}
			>
				{value}
				<input
					className="hidden"
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
			<div className="flex flex-col flex-start-spaced card-rating">
				<div className="flex flex-center star-container">
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
					className="flex flex-col flex-start-spaced full-width form-container"
				>
					<div className="flex flex-center-spaced full-width">
						<RatingButton value={1} />
						<RatingButton value={2} />
						<RatingButton value={3} />
						<RatingButton value={4} />
						<RatingButton value={5} />
					</div>

					<div className="full-width">
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
			<div
				data-testid="result"
				className="flex flex-col flex-center result-container"
			>
				<img src={Illustration} alt="" />
				<p data-testid="selected-rate" className="selected-rate">
					{`You selected ${selecteRate} out of 5`}
				</p>
				<h2>Thank you!</h2>
				<p className="text-center">
					We appreciate you taking the time to give a rating. If you ever need
					more support, don’t hesitate to get in touch!
				</p>
			</div>
		);
	}

	return (
		<>
			<div className="card">
				{displayForm && <RatingComponent />}
				{!displayForm && <ResultComponent />}
			</div>
		</>
	);
}
