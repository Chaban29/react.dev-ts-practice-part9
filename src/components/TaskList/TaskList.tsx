import { FC } from 'react';
import { ITasks } from '../../tasks';
import { Task } from '../Task/Task';

interface ITaskListProps {
  tasks: ITasks[];
  onChangeTask: (task: ITasks) => void;
  onDeleteTask: (taskId: number) => void;
}

export const TaskList: FC<ITaskListProps> = ({
  tasks,
  onChangeTask,
  onDeleteTask,
}: ITaskListProps) => {
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
          </li>
        ))}
      </ul>
    </>
  );
};
