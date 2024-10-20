import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let delay = document.querySelector('input[name="delay"]');
const btnCreatePromise = document.querySelector('button[type="submit"]');
const isSelected = document.getElementsByName('state');
// const isSelected = document.querySelector(
//   'input[type="radio"][name="state"]:checked'
// );
// if (isSelected !== null) {
//   console.log('Radio selected');
// }

let isSuccess;

function createPromise(delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (inputRadio.value === fulfilled) {
        isSuccess = true;
      } else {
        isSuccess = false;
      }

      if (isSuccess) {
        resolve(value);
      } else {
        reject(error);
      }
    }, delay);
  });
  return promise;
}

btnCreatePromise.addEventListener('submit', event => {
  event.preventDefault();
  delay = Number(delay.value);
  for (let index = 0; index <= inputRadio.length; index++) {
    if (inputRadio[index].checked) {
      inputRadio.value = inputRadio[index].value;
      break;
    }
  }

  createPromise(delay)
    .then(value => {
      iziToast.success({
        title: 'OK',
        message: '✅ Fulfilled promise in ${delay}ms',
        color: '#59a10d',
        timeout: '${delay}',
        //   close: true,
      });
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: '❌ Rejected promise in ${delay}ms',
        color: '#ef4040',
        timeout: '${delay}',
        //   close: true,
      });
    });
});

// iziToast.warning({
//   title: 'Caution',
//   message: 'You forgot important data',
//   color: '#ffa000',
//   //   need position left for close
//   close: true,
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
