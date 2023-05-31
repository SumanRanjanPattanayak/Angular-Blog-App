import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DotNETComponent } from './dot-net/dot-net.component';
import { CSharpComponent } from './c-sharp/c-sharp.component';
import { JavaScriptComponent } from './java-script/java-script.component';
import { SqlComponent } from './sql/sql.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: '', redirectTo: '/dotNET', pathMatch: 'full' },
  { path: 'dotNET', component: DotNETComponent },
  { path: 'cSharp', component: CSharpComponent },
  { path: 'javaScript', component: JavaScriptComponent },
  { path: 'sql', component: SqlComponent },
  { path: 'blog', component: BlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
