const cardsDOMElements = document.querySelector('.cards');

// MILESTONE 0

const teamMembers = [
  {
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    foto: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    nome: 'Angela Caroll',
    ruolo: 'Chief Editor',
    foto: 'angela-caroll-chief-editor.jpg',
  },
  {
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    foto: 'walter-gordon-office-manager.jpg',
  },
  {
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    foto: 'angela-lopez-social-media-manager.jpg',
  },
  {
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    foto: 'scott-estrada-developer.jpg',
  },
  {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    foto: 'barbara-ramos-graphic-designer.jpg',
  },
];

// MILESTONE 1

function printArrayLog(array) {
  for (i = 0; i < teamMembers.length; i++) {
    let memberName = teamMembers[i].nome;
    let memberRole = teamMembers[i].ruolo;
    let memberPicture = teamMembers[i].foto;

    console.log(`Nome ${memberName}`);
    console.log(`Ruolo ${memberRole}`);
    console.log(`Foto ${memberPicture}`);
    console.log('---------------------');
  }
}

// printArrayLog(teamMembers);

// MILESTONE 2

function printArrayDom(array) {
  for (i = 0; i < teamMembers.length; i++) {
    let memberName = teamMembers[i].nome;
    let memberRole = teamMembers[i].ruolo;
    let memberPicture = teamMembers[i].foto;

    cardsDOMElement.innerHTML += `<div class='card'>${memberName} ${memberRole} ${memberPicture}</div>`;
  }
}

// printArrayDom(teamMembers);

// BONUS 2

function printArrayDomCard(array) {
  for (i = 0; i < teamMembers.length; i++) {
    let memberName = teamMembers[i].nome;
    let memberRole = teamMembers[i].ruolo;
    let memberPicture = teamMembers[i].foto;

    let card = document.createElement('div');
    let cardContent = `<div class='text'><h4>${memberName}</h4><h6>${memberRole}</h6><div>`;
    let cardPicture = `<img class='img' src="./img/${memberPicture}" alt="" />`;

    card.classList.add('card');
    card.innerHTML += cardPicture;
    card.innerHTML += cardContent;
    cardsDOMElements.append(card);
  }
}

printArrayDomCard(teamMembers);
