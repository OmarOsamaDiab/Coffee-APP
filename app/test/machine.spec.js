const supertest = require('supertest');
const app = require('../index')

const request = supertest(app)

describe('Coffee Machines: ', () => {
    afterEach(() => app.close())

    it('It returns all coffee machines', async () => {
        const res = await request.get('/coffee/machines');
        expect(res.status).toBe(200);
        expect(res.body.items.length).toBe(9);
    });

    it('It returns all large machines', async () => {
        const res = await request.get(`/coffee/machines?product_type=COFFEE_MACHINE_LARGE`);
        expect(res.status).toBe(200);
        expect(res.body.items.length).toBe(3);
    });

    it('It returns espresso machines', async () => {
        const res = await request.get(`/coffee/machines?product_type=ESPRESSO_MACHINE`);
        expect(res.status).toBe(200);
        expect(res.body.items.length).toBe(3);
    });

    it('It returns water line compatible machines', async () => {
        const res = await request.get(`/coffee/machines?water_line_compatible=true`);
        expect(res.status).toBe(200);
        expect(res.body.items.length).toBe(4);
    });
});