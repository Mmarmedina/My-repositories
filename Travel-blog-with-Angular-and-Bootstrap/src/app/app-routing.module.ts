import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component'; 
import { FilterComponent } from './components/filter/filter.component';
import { Form } from '@angular/forms';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [

  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: "home", component: BlogComponent},
  {path: 'posts/:idpost', component: ViewPostComponent},
  {path: 'categories/:categoryTitle', component: BlogComponent},
  {path: 'new', component: FormComponent},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
