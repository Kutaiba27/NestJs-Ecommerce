import { BaseValidationPipe } from '@Package/api';
import { SingInDto } from '/auth/api/dto/request/singIn.dto';
import { z } from 'zod';


export class SingInValidationPipe extends BaseValidationPipe<SingInDto> {
  constructor() {
    const schema = z.object({
      name: z.string(),
      email: z.string().email(),
      password: z.string(),
    })
    super(schema);
  }
}