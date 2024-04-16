let text = document.getElementById("text");
let sliderInput = document.getElementById("my-range");
let alert = document.getElementById("alert");

function blurText() {
    text.style.textShadow = "0 0 " + sliderInput.value + "px " + "rgba(0,0,0)";
    if (sliderInput.value > 5) {
      alert.style.display = "block";
      document.body.style.backgroundImage= "url('https://media3.giphy.com/media/pBvj9bVr2vKEouNr6K/200w.gif?cid=6c09b952co55b8r82rnu08i0j7felx42wi0xhfs2ytgzskyx&ep=v1_gifs_search&rid=200w.gif&ct=g')"
    } else if (sliderInput.value < 8) {
      alert.style.display = "none";
      document.body.style.backgroundImage= "url('https://media3.giphy.com/media/e3X9ZcuLp1QgE/200w.gif?cid=6c09b95250fgast82p88bu386kfv7mhq8kii4tq1sk0knh31&ep=v1_gifs_search&rid=200w.gif&ct=g')"
    } 

  console.log(sliderInput.value)

}
