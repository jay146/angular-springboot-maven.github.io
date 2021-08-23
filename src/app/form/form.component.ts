import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserserveService } from '../userserve.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  datatoedit:any={};
  userdata: User[] = [];
   first_name:String='';
   last_name:String='';
   email:String='';
   phonenumber: String='';
  constructor(private userservice :UserserveService) { 
    this.userservice.getdata().subscribe((dataList:User[]) =>{
      console.log(dataList);
      this.userdata=dataList;
      });
  }
  editdata(data:any)
  {
    console.log(data);
this.datatoedit=data;
  }
  ngOnInit(): void {
    
  }
  
  updatedata(updateddata:any)
  {
this.userservice.updateuser(updateddata,this.datatoedit.id).subscribe((data:any)=>{
  this.userservice.getdata().subscribe((dataList:User[]) =>{
    console.log(dataList);
    this.userdata=dataList;
  });
});
  }
deleteuser(id:any) {
this.userservice.deleteuser(id).subscribe((data:any)=>{
  this.userservice.getdata().subscribe((dataList:User[]) =>{
    console.log(dataList);
    this.userdata=dataList;
  });
});
  }



}
