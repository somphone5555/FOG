import {Routes, RouterModule} from '@angular/router';

import {WeatherComponent} from './weather/weather.component';
import {MapComponent} from './map/map.component';
import {HistoryComponent} from './history/history.component';
import {AboutComponent} from './about/about.component';



const router: Routes = [
  {path: '', component: WeatherComponent},
  {path: 'map', component: MapComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', redirectTo: ''}
];

export const appRoutes = RouterModule.forRoot(router, {useHash: true});
