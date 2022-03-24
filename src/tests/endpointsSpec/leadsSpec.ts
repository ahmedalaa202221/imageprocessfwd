import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);

describe('Testing the leads endpoint', () => {
  it('Using the endpoint without providing the name parameter returns 400', async () => {
    await request.get('/image').expect(400);
  });

  it('Using the endpoint with a valid lead returns 200', async () => {
    await request.get('/image?name=Alaa').expect(200);
  });
});
