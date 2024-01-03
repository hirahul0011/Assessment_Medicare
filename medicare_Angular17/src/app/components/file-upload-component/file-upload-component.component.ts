import { Component,Input,OnInit } from '@angular/core';
import { FileUploadService } from '../../services/file-upload.service';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-file-upload-component',
  templateUrl: './file-upload-component.component.html',
  styleUrl: './file-upload-component.component.scss'
})
export class FileUploadComponentComponent implements OnInit {

  // Variable to store shortLink from api response 
  // shortLink: string = ""; 
  // loading: boolean = false; // Flag variable 
  // file: File = null; // Variable to store file

  // Inject service  
  // constructor(private fileUploadService: FileUploadService) { } 

  // ngOnInit(): void {
  //   // throw new Error('Method not implemented.');
  // }

  // On file Select 
  // onChange(event) { 
  //   this.file = event.target.files[0]; 
  // }
  
  // OnClick of button Upload 
  // onUpload() { 
  //   this.loading = !this.loading; 
  //   console.log(this.file); 
  //   this.fileUploadService.upload(this.file).subscribe( 
  //       (event: any) => { 
  //           if (typeof (event) === 'object') { 

  //               // Short link via api response 
  //               this.shortLink = event.link; 

  //               this.loading = false; // Flag variable  
  //           } 
  //       } 
  //   ); 
  // } 





  @Input() productImageId:number;



  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';

  fileInfos?: Observable<any>;

  constructor(private uploadService: FileUploadService) { }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    console.log(this.productImageId)
    
    this.fileInfos = this.uploadService.getFiles();
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.uploadService.upload(this.currentFile).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.fileInfos = this.uploadService.getFiles();
            }
          },
          error: (err: any) => {
            console.log(err);
            this.progress = 0;

            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }

            this.currentFile = undefined;
          }
        });
      }

      this.selectedFiles = undefined;
    }
  }  


  updateFile(pImageId:number){

    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.uploadService.updateFile(pImageId,this.currentFile)
          // .subscribe(response=>{
          //   console.log(response)

          .subscribe({
            next: (event: any) => {
              if (event.type === HttpEventType.UploadProgress) {
                this.progress = Math.round(100 * event.loaded / event.total);
              } else if (event instanceof HttpResponse) {
                this.message = event.body.message;
                this.fileInfos = this.uploadService.getFiles();
              }
            },
            error: (err: any) => {
              console.log(err);
              this.progress = 0;
  
              if (err.error && err.error.message) {
                this.message = err.error.message;
              } else {
                this.message = 'Could not upload the file!';
              }
  
              this.currentFile = undefined;
            } 
        })       

      }

      this.selectedFiles = undefined;
    }    

  }

}
