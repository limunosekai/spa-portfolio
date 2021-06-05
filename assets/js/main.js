const loading = document.querySelector('.loading');
const bar = document.querySelector('.progressBar');

// 스크롤 top 좌표
let scrollTop = 0;

// 로딩
const loadingStart = () => {
  loading.classList.add('active');
};

loadingStart();

// progress bar
const progressHandler = (e) => {
  scrollTop = document.documentElement.scrollTop;

  let per = Math.ceil(
    (scrollTop / (document.body.scrollHeight - window.innerHeight)) * 100
  );
  bar.style.height = per + '%';
};

window.onload = () => {
  loading.classList.remove('active'); // 로딩 종료

  window.addEventListener('scroll', (e) => {
    if (window.pageYOffset > 100) {
      document.querySelector('header').classList.add('is-scrolling');
    } else {
      document.querySelector('header').classList.remove('is-scrolling');
    }
  });
};

window.addEventListener('scroll', progressHandler, false);
