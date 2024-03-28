import { FC } from 'react';
import { IPosts } from '../AddPost/posts';
import { Post } from '../Post/Post';

interface IPostListProps {
  posts: IPosts[];
  onChangePost: (post: IPosts) => void;
  onDeletePost: (postId: number) => void;
}

export const PostList: FC<IPostListProps> = ({
  posts,
  onChangePost,
  onDeletePost,
}: IPostListProps) => {
  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Post
              posts={post}
              onChange={onChangePost}
              onDelete={onDeletePost}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
