export class CategoryModel {
    constructor() {
        this.IsActive = true;
    }

    Name: string;
    ParentId: string;
    IsActive?: boolean;
    CreatedDate?: Date;
    UpdatedDate?: Date;
}