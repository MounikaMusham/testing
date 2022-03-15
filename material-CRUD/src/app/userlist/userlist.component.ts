import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { UsersService } from '../users.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';



@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  displayedColumns: string[] = ['name', 'id', 'email', 'username','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private dialog: MatDialog,
              private userService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }


  deleteDialog(id:any){
    this.dialog.open(DeleteDialogComponent,{
      width:'20%'
    }).afterClosed().subscribe(val=>{
      if(val==='true'){
        this.deleteUser(id);
      }
    })
  }


  openDialog() {
    this.dialog.open(DialogComponent, {
      width:'30%'
    }).afterClosed().subscribe(val=>{
      if(val ==='save'){
        this.getUsers();
      }
    })
  }

  getUsers(){
    
    this.userService.getUser()
    .subscribe({
      next:(res)=>{
        // console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:(err)=>{
            alert('error while getting the data')
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editUser(row:any){
 this.dialog.open(DialogComponent,{
   width:'30%',
   data: row
 }).afterClosed().subscribe(val=>{
   if(val === 'update'){
     this.getUsers();
   }
 })
  }
  
deleteUser(id:any){
  // this.deleteDialog(id);

  // alert('are you sure you want to delete the user');
this.userService.deleteUser(id)
.subscribe({
  next :(res)=>{
    alert('user deleted successfully');
    this.getUsers();
  },
  error : ()=>{
    alert('error while deleting the product')
             }
           })
}


}
