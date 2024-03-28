import { IPosts, initialPosts } from './AddPost/posts';

interface IPostsReducerProps {
  posts: IPosts[];
}

export const enum ActionTypes {
  ADD = 'add',
  CHANGED = 'changed',
  DELETE = 'delete',
}

export type TypeActions =
  | { type: ActionTypes.ADD; id: number; name: string }
  | { type: ActionTypes.CHANGED; post: IPosts }
  | { type: ActionTypes.DELETE; postId: number };

export const initialState: IPostsReducerProps = { posts: initialPosts };

export const postReducer = (state = initialState, action: TypeActions) => {
  switch (action.type) {
    case 'add': {
      return {
        ...state,
        posts: [
          ...state.posts,
          { id: action.id, name: action.name, done: false },
        ],
      };
    }
    case 'changed': {
      return {
        ...state,
        posts: state.posts.map((p) => {
          if (p.id === action.post.id) {
            return action.post;
          } else {
            return p;
          }
        }),
      };
    }
    case 'delete': {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    }
    default: {
      throw new Error('Unknown action ' + action.type);
    }
  }
};
