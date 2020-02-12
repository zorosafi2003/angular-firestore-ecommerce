import { ProductModel } from '../models/product.model';

export class ProductDto extends ProductModel {
    Id:string;
    ParentName?:string;
}