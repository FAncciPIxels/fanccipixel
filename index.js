//hidden-box//
const hidd = document.getElementById("hiddenBtn");
function showBox() {
  let arr = ["fB", "sB"];
  var closeBold = document.getElementById("close_bold"),
    boldF = document.getElementById("bold_f"),
    boldS = document.getElementById("bold_s");
  let f = document.getElementById("firsB"),
    s = document.getElementById("secB");
  var x = document.getElementById("hidCont");
  x.classList.add("hidCon");
  f.classList.add(arr[0]);
  s.classList.add(arr[1]);
  closeBold.classList.add("openHamburger");
  boldF.classList.add(arr[3]);
  boldS.classList.add(arr[4]);
}

//mouse--func for close_bold//
let hamB = document.getElementById("close_bold");
function trans() {
  let trS = Math.min(0.4, 3),
    trSp = trS + "s";
  let trB = document.getElementById("bold_s"),
    trD = document.getElementById("bold_f");
  trD.style.transform = "rotate(45deg)";
  trD.style.transition = trSp;
  trB.style.transform = "rotate(-45deg)";
  trB.style.transition = trSp;
}
//hamburger
function transBack() {
  document.getElementById("bold_f").style.transform = "rotate(0)";
  document.getElementById("bold_s").style.transform = "rotate(0)";
}
function closedOff() {
  document.getElementById("hidCont").classList.remove("hidCon");
  closeBold.classList.remove("openHamburger");
}

