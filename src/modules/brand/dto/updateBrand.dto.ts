/* eslint-disable prettier/prettier */

import { PartialType } from'@nestjs/mapped-types'
import { CreateBrand } from './createBrand.dto'

export class UpdateBrand extends PartialType(CreateBrand) {}