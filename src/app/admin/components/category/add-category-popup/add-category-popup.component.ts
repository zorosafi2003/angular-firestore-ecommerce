import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm, FormBuilder, Validators } from '@angular/forms';
import { NgxSmartModalComponent } from 'ngx-smart-modal';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Observable, forkJoin } from 'rxjs';
import { CategoryModel } from 'src/app/shared/models/category.model';
import { CategoryService } from 'src/app/shared/services/category.service';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-add-category-popup',
  templateUrl: './add-category-popup.component.html',
  styleUrls: ['./add-category-popup.component.scss']
})
export class AddCategoryPopupComponent implements OnInit {

  title = '';
  editMode = false;
  data: any = {};
  rForm: FormGroup;

  @ViewChild("nForm", { static: false }) nForm: NgForm;
  @ViewChild("addCategoryModal", { static: false }) addCategoryModal: NgxSmartModalComponent;

  constructor(private _FormBuilder: FormBuilder, private _ToastrManager: ToastrManager,
    private _CategoryService:CategoryService ) { }

  ngOnInit() {
    this.rForm = this._FormBuilder.group({
      id: [null],
      name: [null, [Validators.required]],
      parentId: [null]
    });
  }

  showPopup(categoryId = null) {
    this.clearPopupData();
    this.editMode = categoryId == null ? false : true;
    this.title = categoryId == null ? "Add Category" : "Edit Category";
    this.getData(categoryId);
    this.addCategoryModal.open();
  }

  save() {
    var obsrv: Promise<any>;
    var model = this.fillCategoryModel();

    if (this.editMode == false) {
      obsrv = this._CategoryService.create(model);
    } else {
      var id =this.rForm.get('id').value;
      obsrv = this._CategoryService.update(id , model);
    }

    obsrv.then(result => {
      var notifyMsg = "";
      if (this.editMode == false) {
        notifyMsg = "Category has been created successfully";
      }
      else {
        notifyMsg = "Category has been updated successfully";
      }
      this._ToastrManager.successToastr(notifyMsg);
    }).catch((err: any) => {
      this._ToastrManager.errorToastr(err.error.Message);
    });
  }

  private fillCategoryModel(): CategoryModel {
    let formValue = this.rForm.value;

    let model: CategoryModel = {
      Name: formValue.name,
      ParentId: formValue.parentId
    }
    return model;
  }


  private getData(categoryId) {
    var categoryObj = this._CategoryService.get(categoryId);
    var categoryParentArr = this._CategoryService.getAll();
    forkJoin([categoryObj, categoryParentArr]).pipe(map(([categoryObj, categoryParentArr]) => {
      return { categoryObj, categoryParentArr };
    })).subscribe(result => {
      this.data.categoryParentArr = result.categoryParentArr;
      if (this.editMode == true) {
        result.categoryObj;
        this.rForm.patchValue({
          id:  result.categoryObj.Id,
          name:  result.categoryObj.Name,
          parentId: result.categoryObj.ParentId,
        });
      }
    });
  }

  private clearPopupData() {
    this.data = {};

    this.rForm.reset();
    this.nForm.resetForm();
  }


}
