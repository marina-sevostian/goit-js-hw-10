import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

iziToast.success({
  title: 'OK',
  message: '✅ Fulfilled promise in ${delay}ms',
  color: '#59a10d',
  timeout: '${delay}',
  //   close: true,
});
iziToast.error({
  title: 'Error',
  message: '❌ Rejected promise in ${delay}ms',
  color: '#ef4040',
  timeout: '${delay}',
  //   close: true,
});
iziToast.warning({
  title: 'Caution',
  message: 'You forgot important data',
  color: '#ffa000',
  //   need position left for close
  close: true,
});
iziToast.info({
  // need add link icon
  icon: './img/informing-icon.svg',
  iconColor: 'none',
  title: 'Hello',
  message: 'Welcome!',
  color: '#09f',
  //   close: true,
});
iziToast.success({
  image: './img/mes-foto.jpg',
  imageWidth: 88,
  title: 'Hello',
  message: 'Do you like it?',
  color: '#565c72',
  //   close: true,
});
iziToast.success({
  image: './img/mes-foto.jpg',
  imageWidth: 56,
  title: 'Hey',
  message: 'What would you like to add?',
  color: '#f0f0f0',
  balloon: true,
  buttons: [
    ['<button>Photo</button>', 68],
    ['<button>Video</button>'],
    ['<button>Text</button>'],
  ],
  //   close: true,
});
