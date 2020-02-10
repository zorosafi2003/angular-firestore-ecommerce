import { CategoryModel } from '../models/category.model';

export class CategoryDto extends CategoryModel {
    Id:string;
    ParentName?:string;
}