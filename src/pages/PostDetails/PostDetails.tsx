import { Link } from "react-router-dom";
import { ArrowLeft } from "../../assets";
import { usePostDetails } from "./usePostDetails";
import PostItem from "../../components/PostItem/PostItem";
import "./postDetails.css";

const PostDetails = ({ message }: { message: string }) => {
  const { post, comments, userName } = usePostDetails(message);

  return (
    <div className="flex-col-center">
      <h1 className="page-title">Posts Details</h1>

      <div className="back-btn-wrapper">
        <Link to="/app" className="back-btn">
          <ArrowLeft className="arrow-left" /> Go Back
        </Link>
      </div>
      {post && (
        <PostItem
          message="Hello from"
          id={post.id}
          postTitle={post.title}
          postBody={post.body}
          postUserName={userName}
          comments={comments}
          showCommentBody={true}
        />
      )}
    </div>
  );
};

export default PostDetails;
