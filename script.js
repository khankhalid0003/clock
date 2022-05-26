
function test() {
    const d =new Date();

  let h = document.getElementById("hours");
  let m = document.getElementById("minuts");
  let s = document.getElementById("seconds");

  d.getHours() < 10
    ? (h.innerHTML = "0" + d.getHours())
    : (h.innerHTML = d.getHours());
  d.getMinutes() < 10
    ? (m.innerHTML = "0" + d.getMinutes())
    : (m.innerHTML = d.getMinutes());
  d.getSeconds() < 10
    ? (s.innerHTML = "0" + d.getSeconds())
    : (s.innerHTML = +d.getSeconds());
}
setInterval(test, 1000);
let d= new Date();
let newformat = d.getHours() >= 12 ? "PM" : "AM";
document.getElementById("format").innerHTML = newformat;
