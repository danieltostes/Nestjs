import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDto } from './interfaces/IProduct';

@Controller('api/products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService
  ){}

  @Post()
  async create(@Body() product: ProductDto) : Promise<ProductDto> {
    return await this.productsService.createProduct(product);
  }

  @Get()
  async getAll() : Promise<ProductDto[]> {
    return await this.productsService.getAllProducts();
  }

  @Get(":id")
  async getById(@Param("id") id: string) : Promise<ProductDto> {
    return await this.productsService.getProductById(id);
  }

  @Put()
  async update(@Body() product: ProductDto) : Promise<ProductDto> {
    return await this.productsService.updateProduct(product);
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    return await this.productsService.deleteProduct(id);
  }
}
