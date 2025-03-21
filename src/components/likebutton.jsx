import { useState } from "react";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      className={`px-3 py-1 rounded-md font-semibold transition ${
        liked ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"
      }`}
    >
      {liked ? "Liked ❤️" : "Like"}
    </button>
  );
};

export default LikeButton;
