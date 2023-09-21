
// - creare un un array per gli oggetti e le informaioni.

const team = [
  {
    nome : 'Wayne Barnett',
    title : 'Founder & CEO',
    image : '<img> src="img/wayne-barnett-founder-ceo.jpg"</img>' ,
  },
  {
    nome : 'Angela Carol',
    title : 'Chief Editor',
    image : 'angela-caroll-chief-editor.jpg',
  },
  {
    nome : 'Walter Gordon',
    title : 'Office Manager',
    image : 'walter-gordon-office-manager.jpg',
  },
  {
    nome : 'Angela Lope',
    title : 'Social Media Manager',
    image : 'angela-lopez-social-media-manager.jpg',
  },
  {
    nome : 'Scott Estrada',
    title : 'Developer',
    image : 'scott-estrada-developer.jpg',
  },
  {
    nome : 'Barbara Ramos',
    title : 'Graphic Designer',
    image : 'barbara-ramos-graphic-designer.jpg',
  }
];

console.log(team);

document.getElementById('output').innerHTML = team;
// - creare un ciclo per avere i valari dei nomi, ruoli e foto.
// - stampare in console
// - stampare nel DOM.
