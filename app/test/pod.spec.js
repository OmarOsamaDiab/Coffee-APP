const supertest = require('supertest');
const app = require('../index')

const request = supertest(app)

describe('Coffee Pods: ', () => {
    afterEach(() => app.close())

    it('It returns all coffee pods', async () => {
        const res = await request.get('/coffee/pods');
        expect(res.status).toBe(200);
        expect(res.body.items.length).toBe(26);
    });

    it('It returns all large pods', async () => {
        const res = await request.get(`/coffee/pods?product_type=COFFEE_POD_LARGE`);
        expect(res.status).toBe(200);
        expect(res.body.items.length).toBe(10);
    });

    it('It returns all espresso vanilla pods', async () => {
        const res = await request.get(`/coffee/pods?product_type=ESPRESSO_POD&coffee_flavor=COFFEE_FLAVOR_VANILLA`);
        expect(res.status).toBe(200);
        expect(res.body.items.length).toBe(3);
    });
});