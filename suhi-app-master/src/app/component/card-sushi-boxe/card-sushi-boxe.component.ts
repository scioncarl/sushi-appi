import { Component, Input } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Box } from '../../models/Box';
import { ManagerPanierService } from '../../service/manager-panier.service';


@Component({
  selector: 'app-card-sushi-boxe',
  templateUrl: './card-sushi-boxe.component.html',
  styleUrl: './card-sushi-boxe.component.css'
})

export class CardSushiBoxeComponent {
  pathImage = environment.apiGetImages;
  @Input() box: Box = new Box();
 

  nouvQuantite: number = 1;

  constructor(private managerPanierService: ManagerPanierService) {
  }
  

  incQuantite(): void {
    if ((this.nouvQuantite + 1 < 100)) this.nouvQuantite += 1;
  }

  decQuantite(): void {
    if ((this.nouvQuantite - 1) > 0) this.nouvQuantite -= 1;
  }

  onChangeInput(event: any) {
    let newVal: number =parseInt(event.target.value);
    if (newVal > 1 && newVal < 99) this.nouvQuantite = newVal;
  }

  ajouter() {      
    this.managerPanierService.addBox(this.nouvQuantite, this.box);
    this.nouvQuantite = 1;
  }
}
