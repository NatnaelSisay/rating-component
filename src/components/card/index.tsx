import { useState } from "react";

export default function Card() {
	const [selecteRate, setSelectedRate] = useState(0);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSelectedRate(1);
	};

	return (
		<>
			<form action="#" onSubmit={handleSubmit}>
				<input type="radio" name="rate" value={1} />
				<input type="radio" name="rate" value={2} />
				<input type="radio" name="rate" value={3} />
				<input type="radio" name="rate" value={4} />
				<input type="radio" name="rate" value={5} />

				<button type="submit" role="submit">
					Submit
				</button>
			</form>

			{selecteRate != 0 && (
				<p data-testid="selected-rate">
					{`You have selected ${selecteRate} out of 5`}
				</p>
			)}
		</>
	);
}
