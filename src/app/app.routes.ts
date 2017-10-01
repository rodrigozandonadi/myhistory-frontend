import { Routes } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { FormloginComponent } from './formlogin/formlogin.component';
import { NewhistoryComponent } from './newhistory/newhistory.component';
import { FantasiaComponent } from './fantasia/fantasia.component';
import { NewsComponent } from './news/news.component';
import { DescubraComponent } from './descubra/descubra.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: FormloginComponent },
    { path: 'newhistory', component: NewhistoryComponent },
    { path: 'fantasia', component: FantasiaComponent },
    { path: 'news', component: NewsComponent },
    { path: 'descubra', component: DescubraComponent }
// tslint:disable-next-line:eofline
];