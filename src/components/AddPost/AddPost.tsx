import { ChangeEvent, FC, useState } from 'react';

interface IAddPostProps {
  onAddPost: (postText: string) => void;
}

export const AddPost: FC<IAddPostProps> = ({ onAddPost }: IAddPostProps) => {
  const [postText, setPostText] = useState<string>('');

  const handleChangeNewPost = (event: ChangeEvent<HTMLInputElement>) => {
    setPostText(event.target.value);
  };

  const handleAddNewPost = () => {
    onAddPost(postText);
    setPostText('');
  };

  return (
    <>
      <label htmlFor='add post'>
        <input
          type='text'
          name='add post'
          id='add post'
          value={postText}
          onChange={handleChangeNewPost}
        />
      </label>
      <button type='button' onClick={handleAddNewPost}>
        Add new post
      </button>
    </>
  );
};
