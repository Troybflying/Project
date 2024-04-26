import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';
import { DashboardComponent } from '../dashboard/dashboard.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatSidenavModule,SidenavComponent,DashboardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 

}
