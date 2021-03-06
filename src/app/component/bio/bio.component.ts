import { BioService } from './../service/bio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  Title: String;
  Tanggal: any;
  Hobbies: any[];
  Nama: String;
  Alamat: String;

  constructor(private bioServ:BioService) { }

  ngOnInit() {
    this.Title = "INI Tugas Pertama Biodata";
    this.Tanggal = Date.now();
    this.Nama = "Firman Citra Nurrahman";
    this.Alamat = "Jl. Senggani";
    this.Hobbies = this.bioServ.getFirman();
  }



}
