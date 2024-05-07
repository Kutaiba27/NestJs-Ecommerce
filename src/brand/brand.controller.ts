/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { 
   Body, 
   Controller, 
   Get, 
   Post, 
   ValidationPipe, 
   UseInterceptors, 
   UploadedFile, 
   UseFilters, 
   Put, 
   Query, 
   Delete} from '@nestjs/common';
import { CreateBrand } from './dto/createBrand.dto';
import { BrandEntity } from 'src/database/entitys/brand.entity';
import { BrandService } from './brand.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { ResizeImageInterceptor } from 'src/common/interceptor/resize/resize.interceptor';
import { SlugPipePipe } from 'src/common/pipes/slug-pipe/slug-pipe.pipe';
import { DatabaseFilter } from 'src/common/filter/database/database.filter';
import { UpdateBrand } from './dto/updateBrand.dto';

@UseFilters(DatabaseFilter)
@Controller('brand')
export class BrandController {

   constructor(
      private readonly BrandService: BrandService
   ){ }

   @Post("add-brand")
   @UseInterceptors(FileInterceptor('image',{
      storage: memoryStorage(),
      limits: {
         fileSize: 1024 * 1024 * 10,
      }
   }),new ResizeImageInterceptor('brand'))
   async addBrand(@UploadedFile() file: Express.Multer.File,@Body(SlugPipePipe,ValidationPipe,) brandInfo: CreateBrand){
      return this.BrandService.addBrand(brandInfo)
   }

   @Get('all-brand')
   async getAllBrand():Promise<BrandEntity[]>{
      return this.BrandService.getAllBrand() 
   }

   @Get('get-brand')
   async getBrand(@Query('id') id: number){
      return this.BrandService.getBrand(id)
   }

   @Put('update-brand')
   async updateBrand(@Body(SlugPipePipe,ValidationPipe,) brandInfo: UpdateBrand, @Query('id') id: number){
      console.log("inconotorller .... ",id)
      return this.BrandService.updateBrand(brandInfo, id)
   }

   @Delete('delete-brand')
   async deleteBrand(@Query('id') id: number){
      return this.BrandService.deleteBrand(id)
   }
}
