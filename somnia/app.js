import { useState } from 'react';
import { Button, Card, CardContent, Input, Textarea } from '@/components/ui';

export default function ChatApp() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const handlePost = () => {
    if (newPost.trim() !== '') {
      setPosts([{ id: Date.now(), content: newPost }, ...posts]);
      setNewPost('');
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Chat Board</h1>

      <Card className="mb-6">
        <CardContent>
          <Textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="What's on your mind?"
            className="mb-4"
          />
          <Button onClick={handlePost}>Post</Button>
        </CardContent>
      </Card>

      {posts.map((post) => (
        <Card key={post.id} className="mb-4">
          <CardContent>
            <p>{post.content}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
