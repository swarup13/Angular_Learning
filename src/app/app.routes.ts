import { Routes } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { AtrributeDirectiveComponent } from './atrribute-directive/atrribute-directive.component';
import { Directive } from '@angular/core';
import { RoutingComponentComponent } from './routing-component/routing-component.component';
import { GetApiCallComponent } from './get-api-call/get-api-call.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { Reactiveform1Component } from './reactiveform1/reactiveform1.component';
import { StructuralComponent } from './structural/structural.component';
import { PipesComponent } from './pipes/pipes.component';
import { AlertBoxComponent } from './reusableComponent/alert-box/alert-box.component';
import { TestappComponent } from './testapp/testapp.component';
import { ReuseButtonComponent } from './reusableComponent/reuse-button/reuse-button.component';
import { ControlFlowStmtComponent } from './control-flow-stmt/control-flow-stmt.component';
import { Reactiveform2Component } from './reactiveform2/reactiveform2.component';
import { GetComponent } from './Api-Call/get/get.component';
import { Get1ApiComponent } from './Api-Call/get1-api/get1-api.component';
import { PostComponent } from './Api-Call/post/post.component';
import { CascadingDropdownComponent } from './Logics/cascading-dropdown/cascading-dropdown.component';
import { LifecycleHookEventComponent } from '../lifecycle-hook-event/lifecycle-hook-event.component';
import { LoginJwtAuthenticationComponent } from './login-jwt-authentication/login-jwt-authentication.component';
import { LoginJwtDashboardComponent } from './login-jwt-dashboard/login-jwt-dashboard.component';
import { SignalComponent } from './signal/signal.component';

export const routes: Routes = [


   {
      path: 'data',
      component: DatabindingComponent
   },

   {

      path: 'structural',
      component: StructuralComponent
   },

   {
      path: 'attribute-directive',
      component: AtrributeDirectiveComponent
   },

   {
      path: 'routing-component',
      component: RoutingComponentComponent

   },

   {
      path: 'get-api',
      component: GetApiCallComponent
   },

   {
      path: 'template-form',
      component: TemplateFormComponent
   },
   {
      path: 'reactiveform',
      component: Reactiveform1Component
   },

   {
      path: 'pipes',
      component: PipesComponent
   },
   {
      path: 'alert',
      component: AlertBoxComponent
   }, {

      path: 'reusebutton',
      component: ReuseButtonComponent

   },

   {

      path: 'testapp',
      component: TestappComponent
   },
   {
      path: 'control-flow',
      component: ControlFlowStmtComponent
   },
   {
      path: 'reactiveform2',
      component: Reactiveform2Component
   }, {

      path: 'get',
      component: GetComponent
   }, {
      path: 'get1',
      component: Get1ApiComponent
   }, {
      path: 'post',
      component: PostComponent
   },

   {
      path: 'cascade',
      component: CascadingDropdownComponent
   }, 
   {
      path: 'lifecycle',
      component: LifecycleHookEventComponent
   },
   {
      path:'login_jwt',
      component: LoginJwtAuthenticationComponent
   },
   {
      path:'login_dashboard',
      component: LoginJwtDashboardComponent
   },
   {
     path:"signal",
     component: SignalComponent
   }


];
