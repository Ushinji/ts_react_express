type UserType = {
  id: number;
  title: string;
  text: string;
  createdAt: string;
  updatedAt: string;
};

const posts: UserType[] = [
  {
    id: 1,
    title: 'TestTitle1',
    text: 'Test text 1.',
    createdAt: '2019-08-21T00:00:00.000Z',
    updatedAt: '2019-08-21T00:00:00.000Z',
  },
  {
    id: 2,
    title: 'TestTitle2',
    text: 'Test text 2.',
    createdAt: '2019-08-22T00:00:00.000Z',
    updatedAt: '2019-08-22T00:00:00.000Z',
  },
  {
    id: 3,
    title: 'TestTitle3',
    text: 'Test text 3.',
    createdAt: '2019-08-23T00:00:00.000Z',
    updatedAt: '2019-08-23T00:00:00.000Z',
  },
];

export default {
  Query: {
    posts: () => posts,
  },
};
