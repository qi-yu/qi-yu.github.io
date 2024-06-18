document.addEventListener('DOMContentLoaded', function() {
        const items = document.querySelectorAll('.item');
        items.forEach(item => {
          const accordion = item.querySelector('.accordion');
          const description = item.querySelector('.description');
          const triangle = accordion.querySelector('.triangle');

          accordion.addEventListener('click', function() {
            if (description.style.display === 'none' || description.style.display === '') {
              description.style.display = 'block';
              triangle.classList.add('triangle-rotate');
            } else {
              description.style.display = 'none';
              triangle.classList.remove('triangle-rotate');
            }
          });
        });
      });