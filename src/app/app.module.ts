import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { TopoComponent } from './topo/topo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { FormloginComponent } from './formlogin/formlogin.component';
import { HomeComponent } from './home/home.component';
import { DestaqueComponent } from './destaque/destaque.component';
import { NewhistoryComponent } from './newhistory/newhistory.component';
import { FantasiaComponent } from './fantasia/fantasia.component';
import { NewsComponent } from './news/news.component';
import { DescubraComponent } from './descubra/descubra.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    TopoComponent,
    RodapeComponent,
    NavmenuComponent,
    FormloginComponent,
    HomeComponent,
    DestaqueComponent,
    NewhistoryComponent,
    FantasiaComponent,
    NewsComponent,
    DescubraComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
