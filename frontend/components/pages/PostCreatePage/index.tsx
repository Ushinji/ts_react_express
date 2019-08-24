import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { History } from 'history';
import { useCreatePostMutation } from '../../../mutations/postMutation';

const { useState, useCallback } = React;

const useCreatePost = (history: History) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const { createPost } = useCreatePostMutation();

  const onChangeTitle = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(event.currentTarget.value);
    },
    []
  );
  const onChangeText = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setText(event.currentTarget.value);
    },
    []
  );
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await createPost({ variables: { title, text } });
    history.push('/posts');
  };

  return {
    inputTitleProps: {
      id: 'post-title',
      name: 'post-title',
      type: 'text',
      value: title,
      onChange: onChangeTitle,
    },
    inputTextProps: {
      id: 'post-text',
      name: 'post-text',
      type: 'textarea',
      value: text,
      onChange: onChangeText,
    },
    onSubmit,
  };
};

const PostCreatePage: React.FC<RouteComponentProps> = ({ history }) => {
  const { inputTitleProps, inputTextProps, onSubmit } = useCreatePost(history);

  return (
    <div>
      <h2>日記を新しく作成する</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="post-title">
            タイトル
            <input {...inputTitleProps} />
          </label>
        </div>
        <div>
          <label htmlFor="post-text">
            本文
            <input {...inputTextProps} />
          </label>
        </div>
        <button type="submit">作成する</button>
      </form>
    </div>
  );
};

export default withRouter(PostCreatePage);
