import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserserveService } from '../userserve.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
   userdata: User[] = [];
   first_name:String='';
   last_name:String='';
   email:String='';
   phone_number:String='';
  submitted: boolean | undefined;
   
  constructor( private userservice :UserserveService) { }




  //for getting alert after submission
  alert:boolean=false;
  senddata(datatoservice:any){
 console.log(datatoservice);

  this.userservice.save(datatoservice).subscribe((data: any)=>{
  // need to enter in senddata() method for form alert
    this.alert=true
    console.log(data);
  })
  }


  ngOnInit(): void
   {
    this.userservice.getdata().subscribe((data:User[]) =>{
    this.userdata=data;
    console.log( this.userdata=data);
    });
    }
  }

