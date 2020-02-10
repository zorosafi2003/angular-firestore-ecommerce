import { Component, OnInit, ViewChild } from '@angular/core';
import { AddCategoryPopupComponent } from '../../components/category/add-category-popup/add-category-popup.component';
import { CategoryService } from 'src/app/shared/services/category.service';
import { CategoryDto } from 'src/app/shared/dtos/category.dto';
import { ToastrManager } from 'ng6-toastr-notifications';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  data:any = {};

  @ViewChild("confirmSwal", { static: false }) private confirmSwal: SwalComponent;
  @ViewChild('addCategoryPopup', { static: false }) addCategoryPopup: AddCategoryPopupComponent;

  constructor(private _CategoryService: CategoryService , private _ToastrManager:ToastrManager) { }

  ngOnInit() {
    this.getData();
  }

  create() {
    this.addCategoryPopup.showPopup();
  }

  update(categoryId) {
    this.addCategoryPopup.showPopup(categoryId);
  }

  toggleActive(category:CategoryDto){
    this._CategoryService.toggleActive(category.Id,category.IsActive).then(result => {
      var msg = `Category has been ${!category.IsActive == true ? 'Activated' : 'DeActivated'} successfully`
      this._ToastrManager.successToastr(msg);
      category.IsActive = !category.IsActive;
    }).catch((err: any) => {
      this._ToastrManager.errorToastr(err.error.Message);
    });
  }

  delete(category :CategoryDto) {
    this.confirmSwal.title = `Delete Category ${category.Name} `;
    this.confirmSwal.text = "Are you sure ?";
    const swalSubcribe = this.confirmSwal.confirm.subscribe(() => {
      this._CategoryService.delete(category.Id).then(result => {
        this._ToastrManager.successToastr('Category has been deleted successfully');
        this.getData();
      }).catch((err: any) => {
        this._ToastrManager.errorToastr(err.error.Message);
      });;
      swalSubcribe.unsubscribe();
    });

    this.confirmSwal.cancel.subscribe(() => {
      swalSubcribe.unsubscribe();
    });
    this.confirmSwal.fire();
  }

  private getData() {
    this._CategoryService.getArr('', 0).subscribe(result => {
     this.data.categoryArr = result;
    })
  }

}
