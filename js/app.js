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

function printArray(array) {
  let memberName;
  let memberRole;
  let memberPicture;

  for (i = 0; i < teamMembers.length; i++) {
    memberName = teamMembers[i].nome;
    memberRole = teamMembers[i].ruolo;
    memberPicture = teamMembers[i].foto;

    console.log(`Nome ${memberName}`);
    console.log(`Ruolo ${memberRole}`);
    console.log(`Foto ${memberPicture}`);
    console.log('---------------------');
  }
  return [memberName, memberRole, memberPicture];
}

printArray(teamMembers);
