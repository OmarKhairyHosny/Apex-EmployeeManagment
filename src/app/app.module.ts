import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpolyeeComponent } from './company/empolyee/empolyee.component';
import { DepartmentComponent } from './company/department/department.component';
import { TaskesComponent } from './company/taskes/taskes.component';
import { CompanyModule } from './company/company.module';
import { ServiceService } from './Services/service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    // EmpolyeeComponent,
    // DepartmentComponent,
    // TaskesComponent
  ],
  imports: [
    BrowserModule,
    CompanyModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
