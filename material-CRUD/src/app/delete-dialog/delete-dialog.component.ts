import { Component,Inject, OnInit } from '@angular/core';
import { MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UsersService } from '../users.service';



@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  constructor(  private userService:UsersService,
     @Inject(MAT_DIALOG_DATA) public editData : any,
  private dialogRef : MatDialogRef<DeleteDialogComponent>) { }

  ngOnInit(): void {
  }


  // onDelete(id:any){
  //         this.userService.deleteUser(id).subscribe({
  //           next:(res)=>{
  //             alert('user deleted successfully')
  //           },
  //           error:()=>{
  //             alert('something went wrong')
  //           }
  //         })
  // }
}
