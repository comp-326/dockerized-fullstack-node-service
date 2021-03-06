import app from '@exam-cell-app';
import supertest from 'supertest';

describe('GET: Test route', () => {
	test('should return 200', async () => {
		const response = await supertest(app).get('/');
		expect(response.status).toMatchInlineSnapshot('200');
	});
	test('GET: Content type to be text/html', async () => {
		const response = await supertest(app).get('/');
		expect(response.type).toMatchInlineSnapshot('"text/html"');
	});
	test('GET: Text match', async () => {
		const response = await supertest(app).get('/api/v1/test');
		expect(response.text).toMatchInlineSnapshot(
			'"<p style=\'text-align:center;font-family:Helvetica,Arial,sans-serif; padding:40px;\'>Application test is working</p>"',
		);
	});
	test('GET: Content to be StatusCode 200', async () => {
		const response = await supertest(app).get('/');
		expect(response.status).toMatchInlineSnapshot('200');
		expect(response.statusCode).toMatchInlineSnapshot('200');
		expect(response.body).toMatchInlineSnapshot('Object {}');
	});
});
