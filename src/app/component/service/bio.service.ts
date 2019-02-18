import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BioService {

  constructor() { }

  getFirman() {
    return [
      {id:0, hobby:"Makan", ket:"Makan 3 jam tiap hari"},
      {id:1, hobby:"Sepak Bola", ket:"Sepak Bola tiap sore"},
      {id:2, hobby:"Kencing", ket:"Kencing saat waktu senggang"}
    ]
  }

}
