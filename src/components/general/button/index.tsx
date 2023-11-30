import { ReactNode } from "react";
import "./button.scss";

type ButtonPropsType = {
	isDisabled: boolean;
	children?: ReactNode;
};

export default function Button(props: ButtonPropsType) {
	return (
		<button
			type="submit"
			role="submit"
			className={`btn ${props.isDisabled ? "btn-disabled" : "btn-enabled"}`}
			disabled={props.isDisabled}
		>
			{props.children}
		</button>
	);
}
