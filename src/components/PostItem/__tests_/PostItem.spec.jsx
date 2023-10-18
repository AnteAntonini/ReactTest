import { render } from "@testing-library/react";
import PostItem from "../PostItem";

describe("PostItem Component", () => {
  it("renders post item with all information", () => {
    const post = {
      id: 1,
      postTitle: "Sample Post",
      postBody: "This is the post body.",
      postUserName: "User123",
      comments: [
        {
          id: 1,
          email: "user@example.com",
          name: "User",
          body: "This is a comment",
        },
      ],
    };

    const { getByText } = render(<PostItem {...post} />);

    expect(getByText("Sample Post")).toBeInTheDocument();
    expect(getByText("This is the post body.")).toBeInTheDocument();
    expect(getByText("User123")).toBeInTheDocument();
    expect(getByText("1 Comments")).toBeInTheDocument();
    expect(getByText("user@example.com")).toBeInTheDocument();
    expect(getByText("User")).toBeInTheDocument();
  });

  it("renders post item with missing post body and username", () => {
    const post = {
      id: 2,
      postTitle: "Post Without Body and Username",
      comments: [
        {
          id: 2,
          email: "user2@example.com",
          name: "User2",
          body: "Another comment",
        },
      ],
    };

    const { getByText, queryByText } = render(<PostItem {...post} />);

    expect(getByText("Post Without Body and Username")).toBeInTheDocument();
    expect(queryByText("post-body")).toBeNull();
    expect(queryByText("post-username")).toBeNull();
    expect(getByText("1 Comments")).toBeInTheDocument();
    expect(getByText("user2@example.com")).toBeInTheDocument();
    expect(getByText("User2")).toBeInTheDocument();
  });

  it("renders post item with showCommentBody set to true", () => {
    const post = {
      id: 3,
      postTitle: "Post With Show Comment Body",
      showCommentBody: true,
      comments: [
        {
          id: 3,
          email: "user3@example.com",
          name: "User3",
          body: "Comment with body",
        },
      ],
    };

    const { getByText } = render(<PostItem {...post} />);

    expect(getByText("Post With Show Comment Body")).toBeInTheDocument();
    expect(getByText("1 Comments")).toBeInTheDocument();
    expect(getByText("user3@example.com")).toBeInTheDocument();
    expect(getByText("User3")).toBeInTheDocument();
  });
});

describe("Test snapshot", () => {
  it("Component should match snapshot", () => {
    const post = {
      id: 1,
      postTitle: "Sample Post",
      postBody: "This is the post body.",
      postUserName: "User123",
      comments: [
        {
          id: 1,
          email: "user@example.com",
          name: "User",
          body: "This is a comment",
        },
      ],
    };

    const { asFragment } = render(<PostItem {...post} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
