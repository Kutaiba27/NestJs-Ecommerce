/* eslint-disable prettier/prettier */
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
import * as sharp from 'sharp';
import { v4 } from 'uuid';

@Injectable()
export class ResizeImageInterceptor implements NestInterceptor {

	constructor(private pathName: string) { }

	private async sharpResize(file: Buffer): Promise<string> {
		const fileName: string = `${this.pathName}-${v4()}-${Date.now()}.jpeg`
		await sharp(file)
			.resize(600, 600)
			.toFormat('jpeg')
			.toFile(`${__dirname}/../../../../public/upload/${this.pathName}/${fileName}`)
		return fileName;
	}

	async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
		const ctx = context.switchToHttp();
		const req: Request = ctx.getRequest<Request>();

		if (req.file) {
			req.body.image = await this.sharpResize(req.file.buffer);
		}
		if (req.files) {
			if (Array.isArray(req.files)) {
				req.body.image = [];
				for (const file of req.files as Array<Express.Multer.File>) {
					const fileName = await this.sharpResize(file.buffer);
					req.body.image.push(fileName);
				}
			} else {
				for (const key in req.files) {
					req.body[key] = [];
					for (const file of req.files[key] as Express.Multer.File[]) {
						const fileName: string = await this.sharpResize(file.buffer);
						key == "imageCovered" ? req.body[key] = fileName :
							req.body[key].push(fileName);
					}
				}
			}
		}
		return next.handle();
	}
}
