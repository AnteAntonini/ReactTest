import { useEffect } from "react";
import "./postItem.css";
import { TPostsCommentsResponse } from "../../types/TComments";

type TPostItemParams = {
  id: number | string;
  postTitle: string;
  comments: TPostsCommentsResponse[] | [];
  message: string;
  postUserName?: string;
  postBody?: string;
  showCommentBody?: boolean;
  onClick?: any;
};

const PostItem = ({
  id,
  postTitle,
  postBody,
  postUserName,
  comments,
  showCommentBody = false,
  onClick,
  message,
}: TPostItemParams) => {
  useEffect(() => {
    console.log(`${message} Post Item`);
  }, []);

  return (
    <div
      key={id}
      className={`post-section ${onClick && "post-hover"}`}
      onClick={onClick}
    >
      <div className="post-title">{postTitle}</div>
      {postBody && <div className="post-body">{postBody}</div>}
      <span className="post-username">{postUserName}</span>
      <hr />
      <div>
        <h3 className="comment-title"> {comments?.length} Comments</h3>
        {comments.map((comment: TPostsCommentsResponse) => (
          <div key={comment.id} className="comment">
            <div className="comment-email">{comment.email}</div>
            <div className="comment-name">{comment.name}</div>
            {showCommentBody && (
              <div className="comment-body">{comment.body}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostItem;
