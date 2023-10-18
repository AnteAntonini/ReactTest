import { render, fireEvent, screen } from "@testing-library/react";
import Posts from "../Posts";
import { usePosts } from "../usePosts";

// Mock the usePosts hook
jest.mock("../usePosts");

describe("Posts Component", () => {
  it("renders posts with search input", () => {
    // Mock the usePosts hook return values
    usePosts.mockReturnValue({
      filteredPosts: [
        {
          id: 1,
          title: "Sample Post 1",
          name: "User1",
          comments: [],
        },
        {
          id: 2,
          title: "Sample Post 2",
          name: "User2",
          comments: [],
        },
      ],
      onChange: jest.fn(),
      handleClick: jest.fn(),
    });

    render(<Posts message="Test" />);

    // Check if the page title, search input, and post items are present
    expect(screen.getByText("Posts")).toBeInTheDocument();
    expect(screen.getByTestId("search-input")).toBeInTheDocument();
    expect(screen.getByText("Sample Post 1")).toBeInTheDocument();
    expect(screen.getByText("User1")).toBeInTheDocument();
    expect(screen.getByText("Sample Post 2")).toBeInTheDocument();
    expect(screen.getByText("User2")).toBeInTheDocument();
  });

  it("calls handleClick when a post item is clicked", () => {
    // Mock the usePosts hook return values
    const mockHandleClick = jest.fn();
    usePosts.mockReturnValue({
      filteredPosts: [
        {
          id: 3,
          title: "Sample Post 3",
          name: "User3",
          comments: [],
        },
      ],
      onChange: jest.fn(),
      handleClick: mockHandleClick,
    });

    render(<Posts message="Test" />);

    const postItem = screen.getByText("Sample Post 3");

    // Simulate a click on the post item
    fireEvent.click(postItem);

    // Verify that handleClick is called with the correct arguments
    expect(mockHandleClick).toHaveBeenCalledWith(3);
  });
});

describe("Test snapshot", () => {
  it("Component should match snapshot", () => {
    usePosts.mockReturnValue({
      filteredPosts: [
        {
          id: 1,
          title: "Sample Post 1",
          name: "User1",
          comments: [],
        },
        {
          id: 2,
          title: "Sample Post 2",
          name: "User2",
          comments: [],
        },
      ],
      onChange: jest.fn(),
      handleClick: jest.fn(),
    });
    const { asFragment } = render(<Posts message="Test" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
