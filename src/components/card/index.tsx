import "./card.scss";
import { useState } from "react";
import Star from "../../assets/icon-star.svg";
import Illustration from "../../assets/illustration-thank-you.svg";
import Button from "../general/button";

export default function Card() {
	const [selecteRate, setSelectedRate] = useState(0);
	const [displayForm, setDisplayForm] = useState(true);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setDisplayForm(false);
	};

	function RatingLabel({ value }: { value: number }) {
		return (
			<label
				htmlFor={`rating${value}`}
				className={`flex flex-center rating ${
					selecteRate == value && "rating-active"
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
			<div className="flex flex-col flex-start-spaced gap-custom">
				<div className="flex flex-center card__star-container">
					<img className="star" src={Star} alt="star icon" />
				</div>

				<h2 className="card__heading">How did we do?</h2>
				<p className="card__text">
					Please let us know how we did with your support request. All feedback
					is appreciated to help us improve our offering!
				</p>

				<form
					action="#"
					onSubmit={handleSubmit}
					data-testid="rating-form"
					className="flex flex-col flex-start-spaced full-width gap-custom"
				>
					<div className="flex flex-center-spaced full-width">
						<RatingLabel value={1} />
						<RatingLabel value={2} />
						<RatingLabel value={3} />
						<RatingLabel value={4} />
						<RatingLabel value={5} />
					</div>

					<div className="full-width">
						<Button isDisabled={selecteRate == 0 && displayForm == true}>
							submit
						</Button>
					</div>
				</form>
			</div>
		);
	}

	function ResultComponent() {
		return (
			<div
				data-testid="result"
				className="flex flex-col flex-center gap-custom"
			>
				<img src={Illustration} alt="" />
				<p data-testid="selected-rate" className="card__tag">
					{`You selected ${selecteRate} out of 5`}
				</p>
				<h2 className="card__heading">Thank you!</h2>
				<p className="card__text text-center">
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
