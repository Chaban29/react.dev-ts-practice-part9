import { FC, useReducer } from 'react';
import { AddPost } from '../AddPost/AddPost';
import { PostList } from '../PostList/PostList';
import { IPosts } from '../AddPost/posts';
import { ActionTypes, initialState } from '../postsReducer';
import { postReducer } from '../postsReducer';

let nextId = 3;

export const PostApp: FC = () => {
  const [posts, dispatch] = useReducer(postReducer, initialState);

  const handleAddedPost = (text: string) => {
    dispatch({ type: ActionTypes.ADD, id: nextId++, name: text });
  };

  const handleChangeNewPost = (post: IPosts) => {
    dispatch({ type: ActionTypes.CHANGED, post: post });
  };

  const handleDeletePost = (postId: number) => {
    dispatch({ type: ActionTypes.DELETE, postId: postId });
  };

  return (
    <>
      <h1>Countries news</h1>
      <AddPost onAddPost={handleAddedPost} />
      <PostList
        posts={posts.posts}
        onChangePost={handleChangeNewPost}
        onDeletePost={handleDeletePost}
      />
    </>
  );
};
