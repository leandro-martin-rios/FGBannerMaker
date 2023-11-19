document.getElementById("changeColor").addEventListener("input", cambio);

function cambio() {
    const bannerBackgroundColor = document.getElementById("changeColor").value;
    document.querySelector(".banner-container").style.backgroundColor = `#${bannerBackgroundColor}`;
}

document.querySelector('#btnImg').addEventListener('click', function() {
    html2canvas(document.querySelector('#banner'), {
      onrendered: function(canvas) {
        // document.body.appendChild(canvas);
        return Canvas2Image.saveAsPNG(canvas);
      }
    });
  });