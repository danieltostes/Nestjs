import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

let server : MongoMemoryServer;

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async () => {
        server = await MongoMemoryServer.create();
        const uri = server.getUri();
        return {
          uri
        }
      }
    }),
    ProductsModule]
})
export class AppModule {}
