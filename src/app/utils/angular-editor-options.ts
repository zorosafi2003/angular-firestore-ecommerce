import { Injectable } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Injectable()
export class AngularEditorOptions {

    get config() : AngularEditorConfig{
        return {
            editable: true,
              spellcheck: true,
              height: 'auto',
              minHeight: '200px',
              maxHeight: 'auto',
              width: 'auto',
              minWidth: '0',
              translate: 'yes',
              enableToolbar: true,
              showToolbar: true,
              placeholder: 'Enter text here...',
              defaultParagraphSeparator: '',
              defaultFontName: '',
              defaultFontSize: '',
              fonts: [
                {class: 'arial', name: 'Arial'},
                {class: 'times-new-roman', name: 'Times New Roman'},
                {class: 'calibri', name: 'Calibri'},
                {class: 'comic-sans-ms', name: 'Comic Sans MS'}
              ],
              customClasses: [
              {
                name: 'quote',
                class: 'quote',
              },
              {
                name: 'redText',
                class: 'redText'
              },
              {
                name: 'titleText',
                class: 'titleText',
                tag: 'h1',
              },
            ],
            uploadUrl: 'v1/image',
            sanitize: true,
            toolbarPosition: 'top',
            toolbarHiddenButtons: [
              ['bold', 'italic'],
              ['fontSize'],
              ['insertImage'],
              ['insertVideo']
            ]
        };
    }

}