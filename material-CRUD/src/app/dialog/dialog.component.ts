import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  myname="mounika";

  userForm! : FormGroup;
  actionbtn :string ='Save';

  constructor(private fb:FormBuilder,
     private userService:UsersService,
     @Inject(MAT_DIALOG_DATA) public editData : any,
     private dialogRef : MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {

    this.userForm = this.fb.group({
      name :['', Validators.required],
      id : ['', Validators.required],
      email : ['', [Validators.required, Validators.email]],
      username : ['', Validators.required]
    });

    if(this.editData){
      this.actionbtn = 'Update';
      this.userForm.controls['name'].setValue(this.editData.name);
      this.userForm.controls['id'].setValue(this.editData.id);
      this.userForm.controls['email'].setValue(this.editData.email);
      this.userForm.controls['username'].setValue(this.editData.username);
    }
  }

  addUser(){
   if(!this.editData){
      
    if(this.userForm.valid){
      this.userService.postUser(this.userForm.value)
      .subscribe({
        next: (res)=>{
          alert('User added successfully')
          this.userForm.reset();
          this.dialogRef.close('save');
        },
        error:()=>{
              alert('Error while adding the User')
        }
      })
    }
    }else{
      this.updateUser();

   }
  }

  updateUser(){
    this.userService.putUser(this.userForm.value, this.editData.id)
    .subscribe({
      next: (ress)=>{
        alert('user updated successfully');
        this.userForm.reset();
        this.dialogRef.close('update');
      },
      error: ()=>{
        alert('Error while updating the record');
      }
    })
  }

}
