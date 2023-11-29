import { render, within } from "@testing-library/react";

import Card from "../src/components/card";
import { act } from "react-dom/test-utils";

describe("Card", () => {
	it("should display 5 options to pick from", () => {
		const { getAllByRole } = render(<Card />);
		const radioButtons: HTMLElement[] = getAllByRole("radio");

		expect(radioButtons.length).toBe(5);
	});

	it("should show selected value when submitted", async () => {
		const { getAllByRole, getByRole, getByTestId } = render(<Card />);

		const button = getAllByRole("radio")[0];
		act(() => {
			button.click();
		});

		const submitButton = getByRole("submit");

		act(() => {
			submitButton.click();
		});

		const { getByText } = within(getByTestId("selected-rate"));
		expect(getByText(`You selected ${1} out of 5`)).toBeInTheDocument();
	});

	it("shoud remove form after submition", () => {
		const { getAllByRole, getByRole, getByTestId } = render(<Card />);
		const form = getByTestId("rating-form");

		const button = getAllByRole("radio")[0];
		act(() => {
			button.click();
		});

		const submitButton = getByRole("submit");

		act(() => {
			submitButton.click();
		});

		expect(form).not.toBeInTheDocument();
	});

	it("should show result after form submit", () => {
		const { getAllByRole, getByRole, queryByTestId } = render(<Card />);

		const button = getAllByRole("radio")[0];
		act(() => {
			button.click();
		});

		const submitButton = getByRole("submit");

		act(() => {
			submitButton.click();
		});

		const result = queryByTestId("result");
		expect(result).toBeVisible();
	});

	it("should disable submit on initial render", () => {
		const { getByRole } = render(<Card />);
		const submit = getByRole("submit");
		expect(submit).toBeDisabled();
	});
});
