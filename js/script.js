
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

const ul = document.querySelector('ul');

// for(let i = 0; i < team.length; i++){
//   const card = team[i];
 
// }

for (let card of team) {
console.log(card);
ul.insertAdjacentHTML('beforeend', `<li>Nome: ${card.nome} - Titolo: ${card.title} <br><img src="${card.image}" alt="${card.nome}"></li>`);
}
// document.getElementById('output').innerHTML = team;
// - creare un ciclo per avere i valari dei nomi, ruoli e foto.
// - stampare in console
// - stampare nel DOM.
