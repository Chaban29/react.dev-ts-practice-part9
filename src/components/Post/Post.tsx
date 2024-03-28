import { FC, useState } from 'react';
import { IPosts } from '../AddPost/posts';

interface IPostProps {
  posts: IPosts;
  onChange: (post: IPosts) => void;
  onDelete: (postId: number) => void;
}

export const Post: FC<IPostProps> = ({
  posts,
  onChange,
  onDelete,
}: IPostProps) => {
  const [isEditing, setIdEditing] = useState<boolean>(false);

  return (
    <div>
      <label htmlFor='check'>
        <input
          type='checkbox'
          id='check'
          name='check'
          checked={posts.done}
          onChange={(event) =>
            onChange({ ...posts, done: event.target.checked })
          }
        />
      </label>
      {isEditing && (
        <>
          <label htmlFor='save'>
            <input
              type='text'
              name='save'
              id='save'
              value={posts.name}
              onChange={(event) =>
                onChange({ ...posts, name: event.target.value })
              }
            />
          </label>
          <button onClick={() => setIdEditing(false)}>Save</button>
        </>
      )}
      {!isEditing && (
        <>
          {posts.name}
          <button type='button' onClick={() => setIdEditing(true)}>
            Edit post
          </button>
        </>
      )}
      <button type='button' onClick={() => onDelete(posts.id)}>
        Delete post
      </button>
    </div>
  );
};
