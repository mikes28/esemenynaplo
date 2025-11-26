import SystemEvent from "./SystemEvent";

const console = document.getElementById("console");
const events = [
  new SystemEvent("info", "Rendszer indítása", Date.now()),
  new SystemEvent("warn", "Magas memóriahasználat", Date.now()),
  new SystemEvent("error", "Adatbázis kapcsolat megszakadt", Date.now()),
  new SystemEvent("info", "Felhasználói bejelentkezés sikeres", Date.now()),
  new SystemEvent("warn", "CPU terhelés kritikus szinten", Date.now()),
];
function listEvents() {
  events.forEach(e => {

    let eventLine = document.createElement("div");
    eventLine.innerText += `${e} \n`;
    eventLine.classList=e.type;
    console.appendChild(eventLine);
  });
}
document.addEventListener("DOMContentLoaded", listEvents());
