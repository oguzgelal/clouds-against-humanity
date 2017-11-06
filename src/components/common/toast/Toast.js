import './toast.scss';

class Toast {

  constructor(msg, type) {

    let opts = {
      message: msg || '',
      position: 'bottomLeft',
      transitionIn: 'fadeInDown',
      animateInside: false,
      pauseOnHover: true,
      progressBar: false,
      backgroundColor: '#e3e3e3',
      timeout: 8000,
      maxWidth: '500px',
      icon: '',
      theme: 'dark',
      zindex: 9999999999
    };

    switch (type) {
      case 'success': this.success(opts); break;
      case 'warning': this.warning(opts); break;
      case 'error': this.error(opts); break;
      default: this.show(opts); break;
    }
  }

  success(opts) {
    try {
      opts.class = 'izi--success';
      window.iziToast.success(opts);
    }
    catch (e) { alert(opts.message); }
  }

  warning(opts) {
    try {
      opts.class = 'izi--warning';
      window.iziToast.warning(opts);
    }
    catch (e) { alert(opts.message); }
  }

  error(opts) {
    try {
      opts.class = 'izi--error';
      window.iziToast.error(opts);
    }
    catch (e) { alert(opts.message); }
  }

  show(opts) {
    try {
      opts.class = 'izi--default';
      window.iziToast.show(opts);
    }
    catch (e) { alert(opts.message); }
  }
}

export default Toast;
