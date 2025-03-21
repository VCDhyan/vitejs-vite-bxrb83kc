import PostCard from "./PostCard";

const posts = [
  {
    id: 1,
    username: "john_doe",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
    content: "This is my first post! 🎉",
  },
  {
    id: 2,
    username: "jane_smith",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
    content: "Hello world! Excited to be here. 🌎",
  },
];

const App = () => {
  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Social Media Feed</h1>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default App;
