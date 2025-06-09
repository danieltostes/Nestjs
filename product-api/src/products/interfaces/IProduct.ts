import { IsOptional, IsString, IsUrl, MaxLength, MinLength } from "class-validator";

export interface IProduct {
  id?: string;
  title: string;
  description: string;
  imageURL: string;
}

export class ProductDto implements IProduct {
  @IsString()
  @IsOptional()
  id?: string;

  @IsString()
  @MinLength(5)
  @MaxLength(50)
  title: string;

  @IsString()
  @MinLength(5)
  @MaxLength(100)
  description: string;

  @IsString()
  @IsUrl()
  imageURL: string; 
}