import { Component } from '@angular/core';
import { ManagerPanierService } from '../../service/manager-panier.service';
import { Panier } from '../../models/Panier';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-page-panier',
  templateUrl: './page-panier.component.html',
  styleUrl: './page-panier.component.css'
})
export class PagePanierComponent {

  panier: Panier;
  pathImage = environment.apiGetImages;

  constructor(private managerPanierService: ManagerPanierService) {
    this.panier = managerPanierService.panier;
  }


}
