import { FC, useState } from 'react';
import { ITasks } from '../../tasks';

interface ITaskProps {
  task: ITasks;
  onChange: (task: ITasks) => void;
  onDelete: (taskId: number) => void;
}

export const Task: FC<ITaskProps> = ({
  task,
  onChange,
  onDelete,
}: ITaskProps) => {
  const [isEditing, setIdEditing] = useState<boolean>(false);
  return (
    <div>
      <label htmlFor='check'>
        <input
          type='checkbox'
          name='check'
          id='check'
          checked={task.done}
          onChange={(event) =>
            onChange({ ...task, done: event.target.checked })
          }
        />
      </label>
      {isEditing && (
        <>
          <label htmlFor='save'>
            <input
              type='text'
              id='save'
              name='save'
              value={task.text}
              onChange={(event) =>
                onChange({ ...task, text: event.target.value })
              }
            />
          </label>
          <button type='button' onClick={() => setIdEditing(false)}>
            Save
          </button>
        </>
      )}
      {!isEditing && (
        <>
          {task.text}
          <button type='button' onClick={() => setIdEditing(true)}>
            Edit
          </button>
        </>
      )}
      <button type='button' onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </div>
  );
};
