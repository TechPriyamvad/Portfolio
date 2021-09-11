import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Priyamvad Acharya', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to Priyamvad Acharya Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Priyamvad Acharya',
  subtitle: 'I am a Software Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Priyamvad_Profile.jpg',
  paragraphOne: 'Hello ',
  paragraphTwo: 'My Name is Priyamvad Acharya and I am software developer',
  paragraphThree:
    'I started my career as an embedded engineer💻 ,worked in that domain for nearly 2 years',
  paragraphFour:
    'Now I am working in full stack web development and you can find my work in the projects section',
  paragraphFive: 'Thanks for visiting🙏',
  resume: 'https://drive.google.com/file/d/1z12_BYVLqV5tG7x8Sm8KBwpm1ZTvR3k9/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'clothstore_project.png',
    title: 'ClothStore',
    info: 'It is an e-commerce web application built using react js.Built-in sign in(google authentication included) and sign up functionality using firebase.',
    info2:
      'A simulated payment environment is created using stripe platform.It is designed using SASS language.',
    url: 'https://babystorecloth.herokuapp.com/',
    repo: 'https://github.com/TechPriyamvad/babyclothstore', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'slack_project.png',
    title: 'Slack',
    info: 'It is a web application similar to slack built using react js.Built in google authentication using firebase.',
    info2:
      'Users can send and view messages into a channel.User can form their own channel.Redux is used for sharing data between different components',
    url: 'https://slack-clone-practice.herokuapp.com/',
    repo: 'https://github.com/TechPriyamvad/Slack_Clone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'covid-19_tracker_project.png',
    title: 'DELHI-REAL-TIME-COVID-19-BED-AVAILABILITY-TRACKER',
    info: 'It is a web-scraping application that provides the real-time status of vacant COVID-19 beds in all hospitals in Delhi.The application automatically creates an excel file having hospital name, number of vacant beds, date and time, and contact details.',
    info2:
      'Puppeteer, Node js, and DOM are used to scrape data from websites.Exceljs and fs modules are used to store data of vacant COVID-19 beds in an excel file.',
    url: 'https://drive.google.com/drive/folders/10FN-XWWOkVGZTX-GFyN_nf0rNv5DDpu8?usp=sharing',
    repo: 'https://github.com/TechPriyamvad/DELHI-REAL-TIME-COVID-19-BED-AVAILABILITY-TRACKER', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'whiteboard_project.png',
    title: 'Whiteboard',
    info: 'An online whiteboard built using JavaScript.Contains brush of different color and sizes',
    info2:
      'User can download the drawing.Save the drawing to local storage.Upload the drawing from local storage.',
    url: 'https://techpriyamvad.github.io/KBVSP-whiteboard/',
    repo: 'https://github.com/TechPriyamvad/KBVSP-whiteboard', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'priyamvadofficial1@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'stack-overflow',
      url: 'https://stackoverflow.com/users/6369504/priyamvad-acharya?tab=profile',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/priyamvad-acharya-158204113/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/TechPriyamvad',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
