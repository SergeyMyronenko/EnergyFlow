import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function operationSuccess() {
  iziToast.success({
    message: 'Operation has been success',
    messageColor: '#fff',
    backgroundColor: 'rgba(27, 27, 27, 0.60)',
    position: 'topRight',
    theme: 'dark',
    closeOnClick: 'true',
    messageSize: '16',
    messageLineHeight: '16',
  });
}

export function operationWrong() {
  iziToast.error({
    message: 'Sorry... something wrong happened',
    messageColor: '#fff',
    backgroundColor: 'rgba(27, 27, 27, 0.60)',
    position: 'topRight',
    theme: 'dark',
    closeOnClick: 'true',
    messageSize: '16',
    messageLineHeight: '16',
  });
}

export function operationWarning() {
  iziToast.warning({
    message: 'You forgot important data',
    messageColor: '#fff',
    backgroundColor: 'rgba(27, 27, 27, 0.60)',
    position: 'topRight',
    theme: 'dark',
    closeOnClick: 'true',
    messageSize: '16',
    messageLineHeight: '16',
  });
}
