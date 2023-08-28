var i = 0;
function move() {
  if (i == 0) {
    document.getElementById("container").style.display = "inherit";
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 0;
    var id = setInterval(frame, 30);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = (width) + "%";
      }
    }
  }
}

function modale() {
    const remcont = document.querySelector("#container")
    remcont.remove();
    const rembtn = document.querySelector(".btn")
    rembtn.remove();
    var body = document.querySelector("body");
    body.insertAdjacentHTML("afterbegin", 
    '<div class="modale"> <h1>Everything is OK now !</h1> <p>If everything is still not OK, try checking your settings of perception of objective reality and GO TO THE GYM.</p><button onClick={location.reload()} class="btn"><strong><span>LET&lsquo;S GO</span></strong></button> </div>'
    );

}