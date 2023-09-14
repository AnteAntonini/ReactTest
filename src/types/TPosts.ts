import { TPostsCommentsResponse } from "./TComments";

export type TPostsResponse = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

export type TPostsWithComentsAndUsers = {
  body: string;
  comments: TPostsCommentsResponse[];
  id: number;
  name: string;
  title: string;
  userId: number;
};
