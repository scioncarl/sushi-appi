import { Component } from '@angular/core';
import { ManagerPanierService } from '../../service/manager-panier.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  constructor(private managerPanierSerivce: ManagerPanierService) {}

  getNbBox(): number {
    return this.managerPanierSerivce.panier.nbBox();
  }

}
