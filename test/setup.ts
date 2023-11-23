import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";

afterEach(() => {
	cleanup();
});

/**
 *
 * afterEach - is a hook that runs after each test
 * cleanup - is a function that cleans the dom by unmounting the components
 */
