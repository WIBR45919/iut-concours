import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ProfilService} from "../__service/profil.service";

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {

  files: File[] = [];
  sendImage!: FormGroup;
  nbfile = 2;

  constructor(private buid: FormBuilder, private profil: ProfilService) { }

  ngOnInit(): void {
    this.initFormimg();
  }

  onSelect(event: any): void{
    //On verifie si le nom existe déja
    // Si oui on notifie l'utilisateur
    //Si nom on ajoute

    if(this.files.length !==0){
      let trigger = this.files.filter((elt: File) => elt.name === event.addedFiles[0].name);
      if(trigger.length !== 0){
        console.log('Nom déja existant');
      }
      else if(this.files.length > this.nbfile){
        console.log('Nbre de fichier atteint' + this.files.length);
      }
      else{
        this.files.push(...event.addedFiles);
      }
    }else{
      this.files.push(...event.addedFiles);
    }
  }

  onRemove(event: any): void {
    this.files.splice(this.files.indexOf(event), 1);
  }
  //todo: l'avertir l'utilisateur du probleme survenu dans le cas ou son fichier n'est pas charge
  // todo: l'avertir grace a une modal de sweetAlert

//  initialisation du champs d'image
  initFormimg(): void{
    this.sendImage = this.buid.group({
      tabImg: new FormControl([])
    });
  }
//  Envoie du formulaire
  sendTabImage():void{
    //todo: charger le champs d'image du formulaire des images contenu dans la variable file (voir DD)
    this.profil.sendImageServer(this.sendImage).subscribe((data) =>{
      console.log(data);
    }, error => {
      console.log(error);
    });
  }
}