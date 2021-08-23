import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormComponent } from './form/form.component';
import { UserComponent } from './user/user.component';


@NgModule({
  imports: [RouterModule.forRoot([
    {path:'first',component:UserComponent},
    {path:'second',component:FormComponent}
  ]
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
