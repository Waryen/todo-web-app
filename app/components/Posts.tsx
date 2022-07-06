import { useGetAllPosts } from '~/endpoints/posts';

export default function Posts() {
  const { data = [], isLoading } = useGetAllPosts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
