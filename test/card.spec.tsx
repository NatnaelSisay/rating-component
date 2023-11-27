import { getByTestId, render, waitFor, within } from "@testing-library/react";

import Card from "../src/components/card";
import { act } from "react-dom/test-utils";

describe("Card", () => {
	it("should display 5 options to pick from", () => {
		const { getAllByRole } = render(<Card />);
		const radioButtons: HTMLElement[] = getAllByRole("radio");

		for (let i = 0; i < radioButtons.length; i++) {
			const button = radioButtons[i];
			button.click();
			expect(button).toBeChecked();
		}
	});

	it("should show selected value when submitted", async () => {
		// the click should work for all the 5 radio buttons
		const { getAllByRole, getByRole, getByTestId } = render(<Card />);

		const button = getAllByRole("radio")[0];
		button.click();

		const submitButton = getByRole("submit");

		act(() => {
			submitButton.click();
		});

		const { getByText } = within(getByTestId("selected-rate"));
		expect(getByText(`You have selected ${1} out of 5`)).toBeInTheDocument();
	});
});
