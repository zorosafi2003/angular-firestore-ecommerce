import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm, FormBuilder, Validators } from '@angular/forms';
import { NgxSmartModalComponent } from 'ngx-smart-modal';
import { ToastrManager } from 'ng6-toastr-notifications';
import { ProductService } from 'src/app/shared/services/product.service';
import { AngularEditorOptions } from 'src/app/utils/angular-editor-options';

@Component({
  selector: 'app-add-product-popup',
  templateUrl: './add-product-popup.component.html',
  styleUrls: ['./add-product-popup.component.scss']
})
export class AddProductPopupComponent implements OnInit {
  
  title = '';
  editMode = false;
  data: any = {};
  rForm: FormGroup;
  file :any[] = [];

  get angularEditorConfig (){
    return this._AngularEditorOptions.config;
  }

  @ViewChild("nForm", { static: false }) nForm: NgForm;
  @ViewChild("addProductModal", { static: false }) addProductModal: NgxSmartModalComponent;

  constructor(private _FormBuilder: FormBuilder, private _ToastrManager: ToastrManager,
    private _ProductService:ProductService , private _AngularEditorOptions:AngularEditorOptions ) { }

  ngOnInit() {
    this.rForm = this._FormBuilder.group({
      id: [null],
      name: [null, [Validators.required]],
      parentId: [null]
    });
  }

  showPopup(productId = null) {
    this.clearPopupData();
    this.editMode = productId == null ? false : true;
    this.title = productId == null ? "Add Product" : "Edit Product";
    this.getData(productId);
    this.addProductModal.open();
  }

  private getData(productId){

  }

  private clearPopupData() {
    this.data = {};

    this.rForm.reset();
    this.nForm.resetForm();
  }

}
