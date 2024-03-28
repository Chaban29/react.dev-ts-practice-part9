import { ITasks, initialTasks } from '../tasks';

interface ITaskReducerProps {
  tasks: ITasks[];
}

export const enum ActionTypes {
  ADD = 'add',
  CHANGED = 'changed',
  DELETE = 'delete',
}

type TypeActions =
  | { type: ActionTypes.ADD; id: number; text: string }
  | { type: ActionTypes.CHANGED; task: ITasks }
  | { type: ActionTypes.DELETE; taskId: number };

export const initialState: ITaskReducerProps = { tasks: initialTasks };

export const taskReducer = (tasks = initialState, action: TypeActions) => {
  switch (action.type) {
    case 'add': {
      return {
        ...tasks,
        tasks: [
          ...tasks.tasks,
          { id: action.id, text: action.text, done: false },
        ],
      };
    }
    case 'changed': {
      return {
        ...tasks,
        tasks: tasks.tasks.map((t) => {
          if (t.id === action.task.id) {
            return action.task;
          } else {
            return t;
          }
        }),
      };
    }
    case 'delete': {
      return {
        ...tasks,
        tasks: tasks.tasks.filter((t) => t.id !== action.taskId),
      };
    }
    default: {
      throw new Error('Unknown action ' + action.type);
    }
  }
};
