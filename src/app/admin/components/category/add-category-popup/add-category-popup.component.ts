import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm, FormBuilder, Validators } from '@angular/forms';
import { NgxSmartModalComponent } from 'ngx-smart-modal';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-add-category-popup',
  templateUrl: './add-category-popup.component.html',
  styleUrls: ['./add-category-popup.component.scss']
})
export class AddCategoryPopupComponent implements OnInit {

  title ='';
  editMode = false;
  data:any ={};
  rForm:FormGroup;
  
  @ViewChild("nForm", { static: false }) nForm: NgForm;
  @ViewChild("addCategoryModal", { static: false }) addCategoryModal: NgxSmartModalComponent;

  constructor(private _FormBuilder: FormBuilder, private _ToastrManager: ToastrManager ,) { }

  ngOnInit() {
    this.rForm = this._FormBuilder.group({
      id: [null],
      name:[null,[Validators.required]],
      parentId:[null]
    });
  }

  showPopup(categoryId = null) {
    this.clearPopupData();
    this.editMode = categoryId == null ? false : true;
    this.title = categoryId == null ? "Add Category" : "Edit Category";
    this.getData(categoryId);
    this.addCategoryModal.open();
  }

  private getData(categoryId){

  }

  private clearPopupData() {
    this.data = {};

    this.rForm.reset();
    this.nForm.resetForm();
  }


}
