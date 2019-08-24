import * as React from 'react';

const { useState, useCallback } = React;

const useCreatePost = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

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
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('===submit===');
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

const PostCreatePage: React.FC = () => {
  const { inputTitleProps, inputTextProps, onSubmit } = useCreatePost();

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

export default PostCreatePage;
