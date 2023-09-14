import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { TPostsResponse } from "../../types/TPosts";
import { TPostsCommentsResponse } from "../../types/TComments";
import { useEffect } from "react";
import { TUsersResponse } from "../../types/TUsers";

export const usePostDetails = (message: string) => {
  const { id: postId } = useParams();

  useEffect(() => {
    console.log(`${message} Posts Details`);
  }, []);

  const users: TUsersResponse[] = useFetch(
    "https://demo.martian.services/api/users"
  );

  const userInfo = users.find((user) => user.id === Number(postId));
  const userName = userInfo ? userInfo.name : undefined;

  const post: TPostsResponse = useFetch(
    `https://demo.martian.services/api/posts/${postId}`
  );

  const comments: TPostsCommentsResponse[] = useFetch(
    `https://demo.martian.services/api/comments?postId=${postId}`
  );
  return {
    post,
    comments,
    userName,
  };
};
