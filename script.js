const langButtons = document.querySelectorAll('.lang-switch button');
const translatable = document.querySelectorAll('[data-fr][data-en]');
const video = document.getElementById('intro-video');
const audio = document.getElementById('intro-audio');
const links = document.querySelectorAll('nav a');

function setLanguage(lang) {
  translatable.forEach(el => {
    el.textContent = el.dataset[lang];
  });

  langButtons.forEach(button => {
    button.classList.toggle('active', button.id === `lang-${lang}`);
  });
}

langButtons.forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();
    const lang = button.id === 'lang-en' ? 'en' : 'fr';
    setLanguage(lang);
  });
});

links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const timeVideo = Number(link.dataset.timeVideo);
    const timeAudio = Number(link.dataset.timeAudio);

    if (!Number.isNaN(timeVideo)) {
      video.currentTime = timeVideo;
      video.play();
    }
    if (!Number.isNaN(timeAudio)) {
      audio.currentTime = timeAudio;
      audio.play();
    }
  });
});

setLanguage('fr');
