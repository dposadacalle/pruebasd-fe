import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user.component';
import { UserService } from './services/user.service';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    AngularMaterialModule,
    SharedModule
  ],
  exports: [UserComponent],
  providers: [UserService]
})
export class UserModule { }
