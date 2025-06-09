import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Product, ProductDocument } from "./schema/product.schema";
import { Model } from "mongoose";
import { ProductDto } from "./interfaces/IProduct";

@Injectable()
export class ProductsRepository {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>
  ){}

  async create(product: ProductDto) : Promise<ProductDto>{
    const createdProduct = new this.productModel(product);
    await createdProduct.save();
    return createdProduct.toObject();
  }

  async update(product: ProductDto) : Promise<ProductDto> {
    const res = await this.productModel.updateOne({ _id: product.id }, product);
    
    if (res.modifiedCount == 0) throw new HttpException("Product not found", HttpStatus.NOT_FOUND);
    return product;
  }

  async remove(id: string) : Promise<string> {
    await this.productModel.findByIdAndDelete(id);
    return "Product deleted";
  }

  async getAll() : Promise<ProductDto[]> {
    let products = await this.productModel.find();
    return products.map(function(e) {
      return e.toObject()
    })
  }

  async getById(id: string) : Promise<ProductDto> {
    const product = await this.productModel.findById(id)
    
    if (!product) throw new HttpException("Product not found", HttpStatus.NOT_FOUND);
    return product.toObject();
  }
}