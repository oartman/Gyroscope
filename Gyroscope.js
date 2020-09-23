window.addEventListener("deviceorientation", handleOrientation, true);

function read() {
    window.setInterval(() => {
        this.handleOrientation();
    }, 150);
    console.log(absolute, alpha)
};

function handleOrientation(event) {
    var absolute = event.absolute;
    var alpha    = event.alpha;
    var beta     = event.beta;
    var gamma    = event.gamma;
    document.querySelector('.absolute')
      .innerText = "Absolute: " + event.absolute;
      document.querySelector('.alpha')
      .innerText = "Alpha: " + event.alpha;  
};