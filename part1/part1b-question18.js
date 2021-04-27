var nIntervId;

function Repeat() {
  nIntervId = setInterval(time, 1000);
}

function time() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

Repeat();