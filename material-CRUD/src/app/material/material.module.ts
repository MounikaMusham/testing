import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';


const materialComponents = [
                         MatButtonModule,
                         MatToolbarModule,
                         MatDialogModule,
                         MatFormFieldModule,
                         MatInputModule,
                         MatTableModule,
                         MatPaginatorModule,
                         MatSortModule,
                         MatIconModule
                           ];

@NgModule({
 
  imports: [materialComponents],
  exports:[materialComponents]
   
  
})
export class MaterialModule { }
