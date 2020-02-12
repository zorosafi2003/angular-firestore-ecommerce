import { Component, OnInit, ViewChild } from '@angular/core';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { AddCategoryPopupComponent } from '../../components/category/add-category-popup/add-category-popup.component';
import { ToastrManager } from 'ng6-toastr-notifications';
import { ProductService } from 'src/app/shared/services/product.service';
import { ProductDto } from 'src/app/shared/dtos/product.dto';
import { AddProductPopupComponent } from '../../components/product/add-product-popup/add-product-popup.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  data:any = {};

  @ViewChild("confirmSwal", { static: false }) private confirmSwal: SwalComponent;
  @ViewChild('addProductPopup', { static: false }) addProductPopup: AddProductPopupComponent;

  constructor(private _ProductService: ProductService , private _ToastrManager:ToastrManager) { }

  ngOnInit() {
    this.getData();
  }

  create() {
    this.addProductPopup.showPopup();
  }

  update(categoryId) {
    this.addProductPopup.showPopup(categoryId);
  }

  toggleActive(product:ProductDto){
    this._ProductService.toggleActive(product.Id,product.IsActive).then(result => {
      var msg = `Product has been ${!product.IsActive == true ? 'Activated' : 'DeActivated'} successfully`
      this._ToastrManager.successToastr(msg);
      product.IsActive = !product.IsActive;
    }).catch((err: any) => {
      this._ToastrManager.errorToastr(err.error.Message);
    });
  }

  delete(product :ProductDto) {
    this.confirmSwal.title = `Delete Product ${product.Name} `;
    this.confirmSwal.text = "Are you sure ?";
    const swalSubcribe = this.confirmSwal.confirm.subscribe(() => {
      this._ProductService.delete(product.Id).then(result => {
        this._ToastrManager.successToastr('Product has been deleted successfully');
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
    this._ProductService.getArr('', 0).subscribe(result => {
     this.data.productArr = result;
    })
  }

}
