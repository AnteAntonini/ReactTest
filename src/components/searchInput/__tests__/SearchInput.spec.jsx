import { render, fireEvent, screen } from "@testing-library/react";
import SearchInput from "../SearchInput";

describe("SearchInput Component", () => {
  it("renders the search input with a placeholder", () => {
    const placeholderText = "Enter your search query";

    render(<SearchInput placeholder={placeholderText} onChange={() => {}} />);

    const searchInput = screen.getByTestId("search-input");

    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute("placeholder", placeholderText);
  });

  it("calls onChange when the input value changes", () => {
    const mockOnChange = jest.fn();

    render(<SearchInput onChange={mockOnChange} />);

    const searchInput = screen.getByTestId("search-input");

    fireEvent.change(searchInput, { target: { value: "search query" } });

    expect(mockOnChange).toHaveBeenCalled();
  });
});

describe("Test snapshot", () => {
  it("Component should match snapshot", () => {
    const placeholderText = "Enter your search query";
    const { asFragment } = render(
      <SearchInput placeholder={placeholderText} onChange={() => {}} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
