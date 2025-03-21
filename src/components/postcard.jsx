import LikeButton from "./LikeButton";

const PostCard = ({ post }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-center mb-2">
        <img
          src={post.profilePic}
          alt={post.username}
          className="w-10 h-10 rounded-full mr-3"
        />
        <h3 className="font-semibold">{post.username}</h3>
      </div>
      <p className="text-gray-700">{post.content}</p>
      <div className="mt-2">
        <LikeButton />
      </div>
    </div>
  );
};

export default PostCard;
