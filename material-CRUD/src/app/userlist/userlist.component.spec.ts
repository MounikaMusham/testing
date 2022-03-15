import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';

import { UserlistComponent } from './userlist.component';
import { UsersService } from '../users.service';

describe('UserlistComponent', () => {
  let component: UserlistComponent;
  let fixture: ComponentFixture<UserlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserlistComponent ],
      imports:[MatDialogModule,
        HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });


it('should check getUser() is working or not',()=>{

    const userServices = fixture.debugElement.injector.get(UsersService);
    fixture.detectChanges();
    expect(userServices. getUser()).toBeTruthy();
})


it('should check deleteUser() is working or not',()=>{

    const userServices = fixture.debugElement.injector.get(UsersService);
    fixture.detectChanges();
    expect(userServices. deleteUser(1)).toBeTruthy();
})

it('should check postUser() is working or not',()=>{

    const userServices = fixture.debugElement.injector.get(UsersService);
    fixture.detectChanges();
    const data = {
        name:'mounika',
        email:'mouni@gmail.com',
        password:'12345'
    }
    expect(userServices.postUser(data)).toBeTruthy();
})

it('should call open Dialog', () =>  {

    let button = fixture.debugElement.nativeElement.querySelector('button');
     button.click();

     const dialog = fixture.debugElement.injector.get(UserlistComponent);
     fixture.detectChanges();
    //  expect(dialog.openDialog).toHaveBeenCalled();
    
    fixture.whenStable().then(() => {
        expect(dialog.openDialog).toHaveBeenCalled();
      });
    
    }); 

    it('should call open deleteDialog', () =>  {

        let button = fixture.debugElement.nativeElement.querySelector('button');
         button.click();
    
         const dialog = fixture.debugElement.injector.get(UserlistComponent);
         fixture.detectChanges();
        //  expect(dialog.openDialog).toHaveBeenCalled();
        
        fixture.whenStable().then(() => {
            expect(dialog.deleteDialog).toHaveBeenCalled();
          });
        
        }); 

});
