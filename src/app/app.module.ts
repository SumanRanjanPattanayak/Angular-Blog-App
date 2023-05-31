import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DotNETComponent } from './dot-net/dot-net.component';
import { CSharpComponent } from './c-sharp/c-sharp.component';
import { JavaScriptComponent } from './java-script/java-script.component';
import { SqlComponent } from './sql/sql.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    DotNETComponent,
    CSharpComponent,
    JavaScriptComponent,
    SqlComponent,
    BlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }