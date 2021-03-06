import { facultyUseCasesType } from './../use-cases';
import { INext, IRequest, IResponse } from '@exam-cell-common/types';

type Props = {
	useCase: facultyUseCasesType;
};

export function makeUpdateFacultyController({ useCase }: Props) {
	return async (req: IRequest, res: IResponse, next: INext) => {
		try {
			const data = await useCase.editFacultyUseCase(
				req.params.id,
				req.body,
			);

			return res.status(200).json({ data });
		} catch (err) {
			return next(err);
		}
	};
}
