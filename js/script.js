
// - creare un un array per gli oggetti e le informaioni.

const team = [
  {
    nome : 'Wayne Barnett',
    title : 'Founder & CEO',
    image : 'img/wayne-barnett-founder-ceo.jpg' ,
  },
  {
    nome : 'Angela Carol',
    title : 'Chief Editor',
    image : 'img/angela-caroll-chief-editor.jpg',
  },
  {
    nome : 'Walter Gordon',
    title : 'Office Manager',
    image : 'img/walter-gordon-office-manager.jpg',
  },
  {
    nome : 'Angela Lope',
    title : 'Social Media Manager',
    image : 'img/angela-lopez-social-media-manager.jpg',
  },
  {
    nome : 'Scott Estrada',
    title : 'Developer',
    image : 'img/scott-estrada-developer.jpg',
  },
  {
    nome : 'Barbara Ramos',
    title : 'Graphic Designer',
    image : 'img/barbara-ramos-graphic-designer.jpg',
  }
];

const stamp = document.querySelector('div.row');

// for(let i = 0; i < team.length; i++){
//   const card = team[i];
 
// }

// - stampare nel DOM.

for (let card of team) {
console.log(card);
stamp.insertAdjacentHTML('beforeend', `<div class="col-3 card"><h1>Nome: ${card.nome}</h1><h2>Titolo: ${card.title}</h2> <br><img src="${card.image}" alt="${card.nome}"></div>`);
}
// document.getElementById('output').innerHTML = team;

