import { FC, useReducer } from 'react';
import { ITasks } from '../../tasks';
import { AddTask } from '../AddTask/AddTask';
import { TaskList } from '../TaskList/TaskList';
import { ActionTypes, initialState, taskReducer } from '../taskReducer';

let nextId = 3;

export const TaskApp: FC = () => {
  const [tasks, dispatch] = useReducer(taskReducer, initialState);

  const handleAddTask = (text: string) => {
    dispatch({ type: ActionTypes.ADD, id: nextId++, text: text });
  };

  const handleChangeTask = (task: ITasks) => {
    dispatch({ type: ActionTypes.CHANGED, task: task });
  };

  const handleDeletedTask = (taskId: number) => {
    dispatch({ type: ActionTypes.DELETE, taskId: taskId });
  };

  return (
    <div>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks.tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeletedTask}
      />
    </div>
  );
};
