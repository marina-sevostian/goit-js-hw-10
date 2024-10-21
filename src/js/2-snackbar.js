import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');
const btnEl = document.querySelector('button[type="submit"]');

let shouldResolve;

function createPromise(delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSelected = document.querySelector(
        'input[type="radio"][name="state"]:checked'
      ).value;
      if (isSelected === 'fulfilled') {
        shouldResolve = true;
      } else {
        shouldResolve = false;
      }

      if (shouldResolve) {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
  return promise;
}

formEl.addEventListener('submit', e => {
  e.preventDefault();
  let delay = formEl.delay.value;
  createPromise(delay)
    .then(value => {
      iziToast.success({
        title: 'OK',
        message: `✅ Fulfilled promise in ${delay} ms`,
        color: '#59a10d',
        close: false,
      });
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay} ms`,
        color: '#ef4040',
        close: false,
      });
    })
    .finally(() => {
      formEl.reset();
      console.log('finally');
    });
});

// iziToast.warning({
//   title: 'Caution',
//   message: `You forgot important data`,
//   color: '#ffa000',
//   close: false,
// });
// iziToast.info({
//   iconUrl: './img/informing-icon.svg',
//   title: 'Hello',
//   message: 'Welcome!',
//   color: '#09f',
//   //   close: true,
// });
// iziToast.success({
//   image: './img/mes-foto.jpg',
//   imageWidth: 88,
//   title: 'Hello',
//   message: 'Do you like it?',
//   color: '#565c72',
//   //   close: true,
// });
// iziToast.success({
//   image: './img/mes-foto.jpg',
//   imageWidth: 56,
//   title: 'Hey',
//   message: 'What would you like to add?',
//   color: '#f0f0f0',
//   balloon: true,
//   buttons: [
//     ['<button>Photo</button>', 68],
//     ['<button>Video</button>'],
//     ['<button>Text</button>'],
//   ],
//   //   close: true,
// });
