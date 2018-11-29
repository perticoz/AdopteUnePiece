import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announces-list',
  templateUrl: './announces-list.component.html',
  styleUrls: ['./announces-list.component.css']
})
export class AnnouncesListComponent implements OnInit {

  constructor() { }

  placeholderForDBListOfAnnounces = {
    results: [
    {
    prix:20,
    titre:"Vend axe aprilia rs125",
    vendeur:"Lyon pièces auto Recycling",
    miniature:"",
    image:"https://media.50factory.com/191617-large_default/axe-de-bras-oscillant-aprilia-rs-50-et-tuono-de-1999-a-2005-14x223.jpg",
    etat:"disponible",
    description:"Axe de bras. Bien entretenu. Montage simple. Le pas de vis est en bon état.",
    note:4,
    postDate:"5 Dec 2018"
    },

    {
    prix:120,
    titre:"A vendre: axe aprilia rs125",
    vendeur:"Lyon pièces auto Recycling",
    miniature:"",
    image:"https://media.50factory.com/191617-large_default/axe-de-bras-oscillant-aprilia-rs-50-et-tuono-de-1999-a-2005-14x223.jpg",
    etat:"disponible",
    description:"Axe de bras. Bien entretenu. Montage simple. Le pas de vis est en bon état.",
    note:4,
    postDate:"5 Dec 2018"
    },
    {
      prix:40,
    titre:" Axe de bras Aprilia RS125",
    vendeur:"Lyon pièces auto Recycling",
    miniature:"",
    image:"https://media.50factory.com/191617-large_default/axe-de-bras-oscillant-aprilia-rs-50-et-tuono-de-1999-a-2005-14x223.jpg",
    etat:"disponible",
    description:"Axe de bras. Bien entretenu. Montage simple. Le pas de vis est en bon état.",
    note:4,
    postDate:"5 Dec 2018"
    },
    {
      prix:5,
    titre:"AXE APRILIA 125",
    vendeur:"Lyon pièces auto Recycling",
    miniature:"",
    image:"https://media.50factory.com/191617-large_default/axe-de-bras-oscillant-aprilia-rs-50-et-tuono-de-1999-a-2005-14x223.jpg",
    etat:"disponible",
    description:"Axe de bras. Bien entretenu. Montage simple. Le pas de vis est en bon état.",
    note:4,
    postDate:"5 Dec 2018"
    },
    {
      prix:5,
    titre:"AXE APRILIA 125",
    vendeur:"Lyon pièces auto Recycling",
    miniature:"",
    image:"https://media.50factory.com/191617-large_default/axe-de-bras-oscillant-aprilia-rs-50-et-tuono-de-1999-a-2005-14x223.jpg",
    etat:"disponible",
    description:"Axe de bras. Bien entretenu. Montage simple. Le pas de vis est en bon état.",
    note:4,
    postDate:"5 Dec 2018"
    },
    {
      prix:5,
    titre:"AXE APRILIA 125",
    vendeur:"Lyon pièces auto Recycling",
    miniature:"",
    image:"https://media.50factory.com/191617-large_default/axe-de-bras-oscillant-aprilia-rs-50-et-tuono-de-1999-a-2005-14x223.jpg",
    etat:"disponible",
    description:"Axe de bras. Bien entretenu. Montage simple. Le pas de vis est en bon état.",
    note:4,
    postDate:"5 Dec 2018"
    },
    {
      prix:5,
    titre:"AXE APRILIA 125",
    vendeur:"Lyon pièces auto Recycling",
    miniature:"",
    image:"https://media.50factory.com/191617-large_default/axe-de-bras-oscillant-aprilia-rs-50-et-tuono-de-1999-a-2005-14x223.jpg",
    etat:"disponible",
    description:"Axe de bras. Bien entretenu. Montage simple. Le pas de vis est en bon état.",
    note:4,
    postDate:"5 Dec 2018"
    },
    {
      prix:5,
    titre:"AXE APRILIA 125",
    vendeur:"Lyon pièces auto Recycling",
    miniature:"",
    image:"https://media.50factory.com/191617-large_default/axe-de-bras-oscillant-aprilia-rs-50-et-tuono-de-1999-a-2005-14x223.jpg",
    etat:"disponible",
    description:"Axe de bras. Bien entretenu. Montage simple. Le pas de vis est en bon état.",
    note:4,
    postDate:"5 Dec 2018"
    }]
  }


  ngOnInit() {
  }

}
