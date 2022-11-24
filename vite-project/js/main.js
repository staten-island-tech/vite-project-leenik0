import "../styles/style.css";
import { inter } from "./theme";
import AOS from "aos";
import "aos/dist/aos.css";
inter();
AOS.init();

const about = document.getElementById("about");
const bands = document.getElementById("bands");
const box = document.getElementById("details");
let wiki =
  "Select your own unit members and play through “Live Show” with 5 difficulties to choose from! Tap, hold, and flick your way to the end to reach the highest score; earn XP and various items to level up your characters and unlock outfits.";
let leoneed =
  "A unit of four childhood friends, who became estranged after various circumstances. The distance shifts between the four.";
let mmjump =
  "A girl who wants to become an idol and three girls who faced the harsh reality of being an idol. Will the optimism overcome the obstacles? Will they reach this dream together?";
let vividbs =
  "Three young talented musicians from different backgrounds and a meek girl. Their ultimate goal is to surpass the “Legend”. Watch them as they rise to the top of the concrete jungle!";
let wonderlandsxs =
  "At a popular theme park, a stage stands deserted. These members come together as one for the revival of the stage. Can they bring back the cheer and laughter to the stage?";
let nightcord =
  "Unaware of what each other looks like or their own names, a circle of friends meet online using the chat tool “Nightcord” to make songs together.";

const content = [
  {
    name: "About",
    desc: wiki,
    type: "desc",
    img: "https://www.colorfulstage.com/assets/images/character/chara06.png",
  },
  {
    name: "Leo/Need",
    desc: leoneed,
    type: "band",
    img: "https://www.colorfulstage.com/assets/images/character/chara01.png",
  },
  {
    name: "More More Jump!",
    desc: mmjump,
    type: "band",
    img: "https://www.colorfulstage.com/assets/images/character/chara02.png",
  },
  {
    name: "Vivid Bad Squad",
    desc: vividbs,
    type: "band",
    img: "https://www.colorfulstage.com/assets/images/character/chara03.png",
  },
  {
    name: "WonderlandsxShowtimes",
    desc: wonderlandsxs,
    type: "band",
    img: "https://www.colorfulstage.com/assets/images/character/chara04.png",
  },
  {
    name: "Nightcord At 25:00",
    desc: nightcord,
    type: "band",
    img: "https://www.colorfulstage.com/assets/images/character/chara05.png",
  },
];

bands.addEventListener("click", function () {
  box.innerHTML = "";
  const filter1 = content.filter((x) => x.type === "band");
  filter1.forEach((element) => {
    details.insertAdjacentHTML(
      "beforeend",
      `<div class="card" data-aos="fade-up">
      <h1 id="titles">${element.name}</h1>
      <h2>${element.desc}</h2>
      <img class="image" src="${element.img}" alt="Characters">
      </div>`
    );
  });
});

about.addEventListener("click", function () {
  box.innerHTML = "";
  const filter1 = content.filter((x) => x.type === "desc");
  filter1.forEach((element) => {
    details.insertAdjacentHTML(
      "beforeend",
      `<div class="card" data-aos="fade-up">
      <h1 id="titles">${element.name}</h1>
      <h2>${element.desc}</h2>
      <img class="image" src="${element.img}" alt="Characters">
      </div>`
    );
  });
});
