import { rest } from 'msw';
import mockDb from "./mock-db/mock-db.json"
export const handlers = [
	rest.get('http://localhost:3000/api/companies', (req, res, ctx) => {
		return res(ctx.delay(100), ctx.status(200), ctx.json(mockDb));
	}),
];
