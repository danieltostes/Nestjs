import { Injectable } from "@nestjs/common";
import { ProductsRepository } from "./products.repository";
import { ProductDto } from "./interfaces/IProduct";

@Injectable()
export class ProductsService {
  constructor(
    private readonly productsRepository: ProductsRepository
  ){}

  async createProduct(product: ProductDto) : Promise<ProductDto> {
    let createdProduct = await this.productsRepository.create(product);
    return createdProduct;
  }

  async updateProduct(product: ProductDto) : Promise<ProductDto> {
    let updatedProduct = await this.productsRepository.update(product);
    return updatedProduct;
  }

  async deleteProduct(id: string) : Promise<string> {
    let res = await this.productsRepository.remove(id);
    return res;
  }

  async getAllProducts() : Promise<ProductDto[]> {
    let products = await this.productsRepository.getAll();
    return products;
  }

  async getProductById(id: string) : Promise<ProductDto> {
    const product = await this.productsRepository.getById(id);
    return product;
  }

  async getAllProductsMock() : Promise<ProductDto[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          {
            id: "0001",
            title: "Produto 1",
            description: "Descrição Produto 1",
            imageURL: "http://meusite.com.br/produto1.jpg"
          },
          {
            id: "0002",
            title: "Produto 2",
            description: "Descrição Produto 2",
            imageURL: "http://meusite.com.br/produto2.jpg"
          },
          {
            id: "0003",
            title: "Produto 3",
            description: "Descrição Produto 3",
            imageURL: "http://meusite.com.br/produto3.jpg"
          }
        ])
      }, 1000)
    })
  }
}