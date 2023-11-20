// LECTURA DE JSON

import data from './data.json' assert { type: 'json' };
console.log(data.DBFZ.Characters.length);

// SELECCION DE PERSONAJE

const charactersSelect = document.getElementById("characters");

for(let i = 0; i < data.DBFZ.Characters.length; i++) {
    let option = document.createElement("option");
    option.className = "showChar";
    option.value = data.DBFZ.Characters[i].Name;
    option.text = data.DBFZ.Characters[i].Name;
    if(i == 0) {
        option.selected = "selected";
    }
    charactersSelect.appendChild(option);
}

charactersSelect.addEventListener('change', function() {
    document.querySelector('.banner-render').src = `./img/renders/${charactersSelect.value}.png`;
})


// CAMBIO DE COLOR EN BANNER

document.getElementById("changeColor").addEventListener("input", changeGradientColor);

function changeGradientColor() {
    const bannerBackgroundColor = document.getElementById("changeColor").value;
    document.querySelector(".banner-container").style.background = `linear-gradient(#000000, ${bannerBackgroundColor})`;
}

// DESCARGA DE IMAGEN

document.querySelector('#btnImg').addEventListener('click', function() {
    html2canvas(document.querySelector('#banner'), {
      onrendered: function(canvas) {
        return Canvas2Image.saveAsPNG(canvas);
      }
    });
  });