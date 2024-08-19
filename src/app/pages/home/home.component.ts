import { Component } from '@angular/core';
import { SLIDERIMAGENESComponent } from '../../shered/components/slider-imagenes/slider-imagenes.component';
import { NavBarComponent } from '../../shered/components/nav-bar/nav-bar.component';
import { FooterBarComponent } from '../../shered/components/footer-bar/footer-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent,FooterBarComponent,SLIDERIMAGENESComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
