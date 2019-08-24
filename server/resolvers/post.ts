import moment from 'moment';

type Post = {
  id: number;
  title: string;
  text: string;
  createdAt: string;
  updatedAt: string;
};

let currentId = 4;

const posts: Post[] = [
  {
    id: 1,
    title: 'TestTitle1',
    text: 'Test text 1.',
    createdAt: moment().format('YYYY-MM-DD h:mm:ss'),
    updatedAt: moment().format('YYYY-MM-DD h:mm:ss'),
  },
  {
    id: 2,
    title: 'TestTitle2',
    text: 'Test text 2.',
    createdAt: moment().format('YYYY-MM-DD h:mm:ss'),
    updatedAt: moment().format('YYYY-MM-DD h:mm:ss'),
  },
  {
    id: 3,
    title: 'TestTitle3',
    text: 'Test text 3.',
    createdAt: moment().format('YYYY-MM-DD h:mm:ss'),
    updatedAt: moment().format('YYYY-MM-DD h:mm:ss'),
  },
];

const createPost = (title: string, text: string) => {
  const newPost = {
    id: currentId,
    createdAt: moment().format('YYYY-MM-DD h:mm:ss'),
    updatedAt: moment().format('YYYY-MM-DD h:mm:ss'),
    title,
    text,
  };
  currentId += 1;
  posts.push(newPost);
  return newPost;
};

type createPostProps = {
  title: string;
  text: string;
};

export default {
  Query: {
    getPosts: () => posts,
  },
  Mutation: {
    createPost: (_: any, args: createPostProps) => {
      const post = createPost(args.title, args.text);
      return post;
    },
  },
};
