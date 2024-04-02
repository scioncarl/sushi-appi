import { Injectable } from '@angular/core';
import { Panier } from '../models/Panier';
import { Box } from '../models/Box';
import { Aliment } from '../models/Aliment';
import { ApiSushiService } from './api-sushi.service';


@Injectable({
  providedIn: 'root'
})
export class ManagerPanierService {

  mapBoxes: Map<number, Box>;       // Map qui contient les instances des objets box de l'application.
  panier: Panier;                   // Panier de commande.
  CLE_PANIER: string = "panier";    // Nom de la clé pour localstorage.


  constructor(private apiSushiService: ApiSushiService) {
    this.mapBoxes = new Map();
    this.getBoxesApi();

    // if (localStorage.getItem(this.CLE_PANIER) != null) {
    //   this.panier = JSON.parse(localStorage.getItem(this.CLE_PANIER) || "");
    // }

    // else {
    //   this.panier = new Panier();
    // }
    this.panier = new Panier();
    //console.log(`Panier du contructeur : ${this.panier}`);
  }

  getBoxesApi(): void {    
    // La méthode va récupérer une collection de boxes de l'API
    this.apiSushiService.getBoxes().subscribe((res: any)=>{
      // Boucle itérant sur chaque objet de l'API pour instancier et valoriser
      // les boxes de l'application :      
      for (let boxApi of res) {
          let box: Box = new Box();
          box.id = boxApi.id;
          box.nom = boxApi.nom;
          box.nbPieces = boxApi.pieces;
          box.prix = boxApi.prix.toFixed(2);
          box.image = boxApi.image;
          box.saveurs = boxApi.saveurs;
          let listeAliments: Aliment[] = [];
          for (let alimentApi of boxApi.aliments) {
            let aliment = new Aliment(alimentApi.nom, alimentApi.quantite);
            listeAliments.push(aliment);
          }
          box.aliments = listeAliments;
          this.mapBoxes.set(boxApi.id, box);          
      }           
    }); 
  }


  addBox(addQte: number, newBox: Box): void {    
    this.panier.addArticle(addQte, newBox);    
    //console.log(this.panier);
    //console.log(JSON.stringify(this.panier));
    //console.log(JSON.stringify(this.panier.articles.get(1)));
    // localStorage.setItem(this.CLE_PANIER, flatted.stringify(this.panier));  
  }
}
