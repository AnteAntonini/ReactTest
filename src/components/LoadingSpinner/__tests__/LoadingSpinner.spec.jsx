import { render } from "@testing-library/react";
import LoadingSpinner from "../LoadingSpinner";

describe("LoadingSpinner Component", () => {
  it("renders the loading spinner", () => {
    const { container } = render(<LoadingSpinner />);

    // Check if the spinner container and loading spinner elements are present
    const spinnerContainer = container.querySelector(
      ".loading-spinner-wrapper"
    );
    const loadingSpinner = container.querySelector(".loading-spinner");

    expect(spinnerContainer).toBeInTheDocument();
    expect(loadingSpinner).toBeInTheDocument();
  });
});

describe("Test snapshot", () => {
  it("Component should match snapshot", () => {
    const { asFragment } = render(<LoadingSpinner />);

    expect(asFragment()).toMatchSnapshot();
  });
});
