import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { TUsersResponse } from "../../types/TUsers";
import { TPostsCommentsResponse } from "../../types/TComments";
import { TPostsResponse, TPostsWithComentsAndUsers } from "../../types/TPosts";

export const usePosts = (message: string) => {
  const [filteredPosts, setFilteredPosts] =
    useState<TPostsWithComentsAndUsers[]>();
  const [searchUsername, setSearchUsername] = useState("");
  const navigate = useNavigate();

  let commentsByPostId: TPostsCommentsResponse[][] = [];

  useEffect(() => {
    console.log(`${message} Posts`);
  }, []);

  const users: TUsersResponse[] = useFetch(
    "https://demo.martian.services/api/users"
  );

  const comments: TPostsCommentsResponse[] = useFetch(
    "https://demo.martian.services/api/comments"
  );
  const posts: TPostsResponse[] = useFetch(
    "https://demo.martian.services/api/posts"
  );

  comments &&
    comments.forEach((comment) => {
      const postId = comment.postId;
      if (!commentsByPostId[postId]) {
        commentsByPostId[postId] = [];
      }
      commentsByPostId[postId].push(comment);
    });

  const PostsWithComentsAndUsers =
    posts &&
    posts.map((post) => {
      const postId = post && post.id;
      let mappedUser = { name: "" };

      const postUser: TUsersResponse | undefined =
        users && users.find((user) => user.id === post.userId);
      const postComments = commentsByPostId[postId] || [];

      if (postUser) {
        mappedUser.name = postUser.name;
      }

      return Object.assign({}, post, mappedUser, {
        comments: postComments,
      });
    });

  const findUserByName = (username: string) => {
    return users.find((user) =>
      user.name.toLowerCase().includes(username.toLowerCase())
    );
  };

  useEffect(() => {
    const filterPosts = () => {
      const originalPosts = PostsWithComentsAndUsers || [];

      if (searchUsername.trim() === "") {
        setFilteredPosts(originalPosts);
      } else {
        const matchedUser = findUserByName(searchUsername);

        if (matchedUser) {
          const matchedPosts = originalPosts.filter(
            (post) => post.userId === matchedUser.id
          );
          setFilteredPosts(matchedPosts);
        } else {
          setFilteredPosts([]);
        }
      }
    };

    filterPosts();
  }, [searchUsername, users]);

  const handleClick = (postId: number) => {
    navigate(`/post/${postId}`);
  };

  const onChange = (e: any) => setSearchUsername(e.target.value);

  return {
    filteredPosts,
    onChange,
    handleClick,
  };
};
