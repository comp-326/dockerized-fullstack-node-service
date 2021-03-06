import { Router } from 'express';
import adminDomain from '@exam-cell-features/Admin';
import courseDomain from '@exam-cell-features/Course';
import departmentDomain from '@exam-cell-features/Department';
import facultyDomain from '@exam-cell-features/Faculty';
import lecturerDomain from '@exam-cell-features/Lecturers';
import studentDomain from '@exam-cell-features/Students';
import testRoute from './testRoute';
import unitDomain from '@exam-cell-features/Units';
import { swaggerServe, swaggerSetup } from '@exam-cell-utils/docs';

export default function () {
	const apiRoute = Router();
	apiRoute.get('/test', testRoute);
	apiRoute.use('/docs', swaggerServe, swaggerSetup);
	adminDomain({ app: apiRoute, pathName: '/admin' });
	courseDomain({ app: apiRoute, pathName: '/courses' });
	facultyDomain({ app: apiRoute, pathName: '/faculty' });
	departmentDomain({ app: apiRoute, pathName: '/departments' });
	studentDomain({ app: apiRoute, pathName: '/students' });
	lecturerDomain({ app: apiRoute, pathName: '/lecturers' });
	unitDomain({ app: apiRoute, pathName: '/units' });

	return apiRoute;
}