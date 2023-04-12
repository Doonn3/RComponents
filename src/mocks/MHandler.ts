import { rest } from 'msw';

const mock = [
  rest.get(`https://swapi.dev/api/planets/?3=&page=1`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({}));
  }),
];

export default mock;
