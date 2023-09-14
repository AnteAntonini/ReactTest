import { render, fireEvent } from "@testing-library/react";
import NotFound from "../NotFound";
import { useNotFound } from "../useNotFound";

// Mock the useNotFound hook
jest.mock("../useNotFound");

describe("NotFound Component", () => {
  it("renders the 404 page with a button", () => {
    // Mock the useNotFound hook return values
    useNotFound.mockReturnValue({
      handleClick: jest.fn(),
    });

    const { getByText } = render(<NotFound />);

    // Check if the 404 message and button are present
    expect(
      getByText("404 | Sorry, we can't find that page.")
    ).toBeInTheDocument();
    expect(getByText("Home Page")).toBeInTheDocument();
  });

  it("calls handleClick when the button is clicked", () => {
    // Mock the useNotFound hook return values
    const mockHandleClick = jest.fn();
    useNotFound.mockReturnValue({
      handleClick: mockHandleClick,
    });

    const { getByText } = render(<NotFound />);

    const button = getByText("Home Page");

    fireEvent.click(button);

    // Verify that handleClick is called
    expect(mockHandleClick).toHaveBeenCalled();
  });
});

describe("Test snapshot", () => {
  it("Component should match snapshot", () => {
    useNotFound.mockReturnValue({
      handleClick: jest.fn(),
    });

    const { asFragment } = render(<NotFound />);

    expect(asFragment()).toMatchSnapshot();
  });
});
