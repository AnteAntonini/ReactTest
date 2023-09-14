import { usePosts } from "./usePosts";
import SearchInput from "../../components/searchInput/SearchInput";
import PostItem from "../../components/PostItem/PostItem";
import { TPostsWithComentsAndUsers } from "../../types/TPosts";

const Posts = ({ message }: { message: string }) => {
  const { filteredPosts, onChange, handleClick } = usePosts(message);

  return (
    <div className="flex-col-center">
      <h1 className="page-title">Posts</h1>
      <SearchInput onChange={onChange} message="Hello from" />
      {filteredPosts &&
        filteredPosts.map((post: TPostsWithComentsAndUsers) => (
          <PostItem
            key={post.id}
            id={post.id}
            onClick={() => handleClick(post.id)}
            postTitle={post.title}
            postUserName={post.name}
            comments={post.comments}
            message="Hello from"
          />
        ))}
    </div>
  );
};

export default Posts;
