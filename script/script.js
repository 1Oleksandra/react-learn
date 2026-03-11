

const items = document.querySelectorAll('.gridBlur');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      entry.target.style.transitionDelay = `${[...items].indexOf(entry.target) * 0.3}s`;
    }
  });
}, { threshold: 0.5 });

items.forEach(item => observer.observe(item));



// let roadCards = document.querySelectorAll('.road-item');
// let stackArea = document.querySelector('.road-inner')


// window.addEventListener('scroll', () => {
//     let distanse = window.innerHeight / 2
//     let topVal = stackArea.getBoundingClientRect().top
//     let index = -1 * (topVal / distanse + 1)
//     index = Math.floor(index)
//     for(let i = 0; i < roadCards.length; i++) {
//         if(i <= index) {
//             roadCards[i].classList.add('away')
//         } else {
//             roadCards[i].classList.remove('away')
//         }
//     }
//     rotateRoadCards()
// })


// function rotateRoadCards() {
//       let angle = 0;
//       roadCards.forEach((card, index) => {
//     if(card.classList.contains('away')) {
//         card.style.transform = `translateY(-120vh) rotate(-48deg)`
//     } else {
//         card.style.transform = `rotate(${angle}deg)`; 
//         angle = angle - 10; 
//         card.style.zIndex = roadCards.length - index
//     }

  
//   });
// }


// rotateRoadCards();
let roadCards = document.querySelectorAll('.road-item');
let stackArea = document.querySelector('.road-items'); // важливо брати весь контейнер

window.addEventListener('scroll', () => {
  let distanse = window.innerHeight / 2;
  let topVal = stackArea.getBoundingClientRect().top;
  let index = Math.floor(-1 * (topVal / distanse));

  roadCards.forEach((card, i) => {
    if (i < index) {
      card.style.transform = `translateY(-120vh) rotate(-48deg)`;
      card.style.opacity = 0;
    } else {
      card.style.transform = `rotate(${(i - index) * -5}deg)`;
      card.style.opacity = 1;
      card.style.zIndex = roadCards.length - i;
    }
  });
});



document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.classList.toggle('active');
  });
});
