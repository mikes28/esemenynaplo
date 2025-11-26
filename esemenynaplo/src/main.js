import SystemEvent from "./SystemEvent";

const cli = document.getElementById("console");
let events = [
  new SystemEvent("info", "Rendszer indítása", Date.now()),
  new SystemEvent("warn", "Magas memóriahasználat", Date.now()),
  new SystemEvent("error", "Adatbázis kapcsolat megszakadt", Date.now()),
  new SystemEvent("info", "Felhasználói bejelentkezés sikeres", Date.now()),
  new SystemEvent("warn", "CPU terhelés kritikus szinten", Date.now()),
];
function listEvents() {
  cli.innerHTML="";
  events.forEach(e => {

    let eventLine = document.createElement("div");
    eventLine.innerText += `${e} \n`;
    eventLine.classList=e.type;
    cli.appendChild(eventLine);
  });
}

function addEvent(){
  events.push(new SystemEvent( document.getElementById("eventType").value,
  document.getElementById("event").value, new Date()));
  document.getElementById("event").value="";
  listEvents();
}
document.getElementById("addEntryB").addEventListener("click", addEvent);
document.addEventListener("DOMContentLoaded", listEvents);

