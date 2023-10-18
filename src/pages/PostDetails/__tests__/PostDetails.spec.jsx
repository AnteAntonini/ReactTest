import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import PostDetails from "../PostDetails";
import { usePostDetails } from "../usePostDetails";

// Mock the usePostDetails hook
jest.mock("../usePostDetails");

describe("PostDetails Component", () => {
  it("renders post details and a 'Go Back' button", () => {
    // Mock the usePostDetails hook return values
    usePostDetails.mockReturnValue({
      post: {
        id: 1,
        title: "Sample Post",
        body: "This is the post body.",
      },
      comments: [
        {
          id: 1,
          email: "user@example.com",
          name: "User",
          body: "This is a comment",
        },
      ],
      userName: "User123",
    });

    render(
      <Router>
        <PostDetails message="Test" />
      </Router>
    );

    // Check if the post details and 'Go Back' button are present
    expect(screen.getByText("Posts Details")).toBeInTheDocument();
    expect(screen.getByText("Sample Post")).toBeInTheDocument();
    expect(screen.getByText("This is the post body.")).toBeInTheDocument();
    expect(screen.getByText("User123")).toBeInTheDocument();
    expect(screen.getByText("This is a comment")).toBeInTheDocument();
    expect(screen.getByText("Go Back")).toBeInTheDocument();
  });

  it("displays post details with no comments", () => {
    // Mock the usePostDetails hook return values with no comments
    usePostDetails.mockReturnValue({
      post: {
        id: 2,
        title: "Post with No Comments",
        body: "This post has no comments.",
      },
      comments: [],
      userName: "User456",
    });

    render(
      <Router>
        <PostDetails message="Test" />
      </Router>
    );

    // Check if the post details and 'Go Back' button are present
    expect(screen.getByText("Posts Details")).toBeInTheDocument();
    expect(screen.getByText("Post with No Comments")).toBeInTheDocument();
    expect(screen.getByText("This post has no comments.")).toBeInTheDocument();
    expect(screen.getByText("User456")).toBeInTheDocument();

    // Ensure that there are no comment elements
    expect(screen.queryByText("No Comments")).toBeNull();
  });
});

describe("Test snapshot", () => {
  it("Component should match snapshot", () => {
    usePostDetails.mockReturnValue({
      post: {
        id: 2,
        title: "Post with No Comments",
        body: "This post has no comments.",
      },
      comments: [],
      userName: "User456",
    });

    const { asFragment } = render(
      <Router>
        <PostDetails message="Test" />
      </Router>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
