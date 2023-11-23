import { render } from "@testing-library/react";
import App from "../src/App";

describe("App Smoke", () => {
	it("working", () => {
		const { getByTestId } = render(<App />);
		const submitButton = getByTestId("submit");
		expect(submitButton).toHaveTextContent("submit");
	});
});
