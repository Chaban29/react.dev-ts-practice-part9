import { ChangeEvent, FC, useState } from 'react';

interface IAddTaskProps {
  onAddTask: (text: string) => void;
}

export const AddTask: FC<IAddTaskProps> = ({ onAddTask }: IAddTaskProps) => {
  const [text, setText] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleAddTask = () => {
    onAddTask(text);
    setText('');
  };

  return (
    <>
      <label htmlFor='add'>
        <input
          type='text'
          id='add'
          name='add'
          value={text}
          onChange={handleChange}
        />
      </label>
      <button type='button' onClick={handleAddTask}>
        Add task
      </button>
    </>
  );
};
