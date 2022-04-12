const menuBtn = document.querySelector('.menu-btn');
const headerNavMobile = document.querySelector('.header-nav-mobile');
const btnCloseNav = document.querySelector('.btn-close-nav');
const linkAbout = document.querySelector('.link-about');
const linkProgram = document.querySelector('.link-program');
const linkJoin = document.querySelector('.link-join');
const linkSponsor = document.querySelector('.link-sponsor');
const speakerContainerCard = document.querySelector('.speaker-container-card');
const speakerBtn = document.querySelector('.speakers-btn');

const mediaqueryList = window.matchMedia('(max-width: 768px)');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.add('hidden');
  headerNavMobile.classList.remove('hidden');
});

btnCloseNav.addEventListener('click', () => {
  menuBtn.classList.remove('hidden');
  headerNavMobile.classList.add('hidden');
});

linkAbout.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
  menuBtn.classList.remove('hidden');
});

linkProgram.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
  menuBtn.classList.remove('hidden');
});

linkJoin.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
  menuBtn.classList.remove('hidden');
});

linkSponsor.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
  menuBtn.classList.remove('hidden');
});

const dataSpeakers = [
  {
    id: 0,
    url: '#',
    name: 'Yochai Benkler',
    position:
      'Beykman Professor of Enterpreanurial Legal Studies of Harvard Law School',
    description:
      'Benlder studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },
  {
    id: 1,
    url: '#',
    name: 'SohYeong Noh',
    position: 'Director of Art Centre Nabl and a board member of CC Korea',
    description:
      'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    id: 2,
    url: '#',
    name: 'Lila Tretikov',
    position: 'Executive Director of the Wikimedia Foundation',
    description:
      'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia Wikipedia is freely available in 290 languag es and used by nearly half a billion people around the world every month',
  },
  {
    id: 3,
    url: '#',
    name: 'Kilnam Chon',
    position:
      'Beykman Professor of Enterpreanurial Legal Studies of Harvard Law School',
    description:
      "Kinam Chon helped bring the Internet to Asia and is an outspoken advocate for the open web and digital com mons. In 2012, he was inducted into the inaugural class of the Internet Society's (SOC) Internet Hall of Fame.",
  },
  {
    id: 4,
    url: '#',
    name: 'Julia Leda',
    position: 'President of Young Pirates of Europe',
    description:
      "European ingetration, political democracy and participa tion of youth through online as her major condern, Reda's report outlining potential changes to EU copyright law was approved by the Parliament in July",
  },
  {
    id: 5,
    url: '#',
    name: 'Ryan Merkley',
    position: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
    description:
      'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source move ment',
  },
];

const cardSpeaker = (index) => `
  <div class="speaker-card-img">
      <img src=${dataSpeakers[index].url} alt="image of speaker ${dataSpeakers[index].name}">
  </div>
  <div class="speaker-card-content">
      <div class="speaker-card-name">
          <p>
              ${dataSpeakers[index].name}
          </p>
      </div>
      <div class="speaker-card-position">
          <p>
              ${dataSpeakers[index].position}
          </p>
      </div>
      <div class="speaker-card-description">
          <p>${dataSpeakers[index].description}</p>
      </div>
  </div>
  `;

const deployTwoSpeakers = () => {
  speakerContainerCard.innerHTML = ' ';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 2; i++) {
    const speaker = document.createElement('div');
    speaker.classList.add('speaker-card');
    speaker.innerHTML = cardSpeaker(i);
    speakerContainerCard.appendChild(speaker);
  }
};

const deployAllSpeakers = () => {
  speakerContainerCard.innerHTML = ' ';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < dataSpeakers.length; i++) {
    const speaker = document.createElement('div');
    speaker.classList.add('speaker-card');
    speaker.innerHTML = cardSpeaker(i);
    speakerContainerCard.appendChild(speaker);
  }
};

speakerBtn.addEventListener('click', () => {
  const regex = /MORE/;
  const flag = regex.test(speakerBtn.textContent);
  if (flag) {
    speakerBtn.innerHTML = 'LESS <i class="fas fa-chevron-up"></i>';
    deployAllSpeakers();
  } else {
    speakerBtn.innerHTML = 'MORE <i class="fas fa-chevron-down"></i>';
    deployTwoSpeakers();
  }
});

const screenTest = (e) => {
  if (e.matches) {
    deployTwoSpeakers();
  } else {
    deployAllSpeakers();
  }
};

screenTest(mediaqueryList);

mediaqueryList.addListener(screenTest);