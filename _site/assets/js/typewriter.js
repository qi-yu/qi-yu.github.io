document.addEventListener('DOMContentLoaded', function(event) {
      var dataText = ["Full Stack Development", "Data Science", "Machine Learning", "Natural Language Processing"];

      function typeWriter(text, i, fnCallback) {
        if (i < text.length) {
          document.querySelector(".typing").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
          setTimeout(function() {
            typeWriter(text, i + 1, fnCallback);
          }, 100);
        } else if (typeof fnCallback == 'function') {
          setTimeout(fnCallback, 700);
        }
      }

      function StartTextAnimation(i) {
        if (i >= dataText.length) {
          i = 0; // Reset to start the animation from the beginning
        }
        // document.querySelector(".typing").innerHTML = "";
        typeWriter(dataText[i], 0, function() {
          StartTextAnimation(i + 1);
        });
      }

      StartTextAnimation(0);
    });