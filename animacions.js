var modal = document.querySelector('#welcomeModal');
var closeBtn = document.querySelector('#welcomeClose');

if (modal) {
  if (!localStorage.getItem('welcomeSeen')) {
    modal.classList.add('show');
    localStorage.setItem('welcomeSeen', '1');
  }

  if (closeBtn) {
    closeBtn.onclick = function() {
      modal.classList.remove('show');
    };
  }

  modal.onclick = function(event) {
    if (event.target === modal) {
      modal.classList.remove('show');
    }
  };
}

// Ampliació d'imatges a la galería
document.addEventListener('DOMContentLoaded', function (){
  // Slider: solo inicializar si existe el slider en la página
  var slider = document.querySelector('.slider');
  if (slider) {
    var slides = document.querySelectorAll('.slide');
    var prev = document.querySelector('.slider-prev');
    var next = document.querySelector('.slider-next');
    var i = 0;

    function show(n){
      i = (n + slides.length) % slides.length;
      slider.style.transform = 'translateX(-' + (i*100) + '%)';
    }

    if (prev) prev.addEventListener('click', function(){ show(i-1); });
    if (next) next.addEventListener('click', function(){ show(i+1); });

    var timer = setInterval(function(){ show(i+1); }, 3500);
    var container = document.querySelector('.slider-container');
    if (container) {
      container.addEventListener('mouseenter', function(){ clearInterval(timer); });
      container.addEventListener('mouseleave', function(){ timer = setInterval(function(){ show(i+1); }, 3500); });
    }

    show(0);
  }

  // inicialitzar lightbox si hi ha miniatures
  initGalleryLightbox();
});
        
function initGalleryLightbox() {
  var lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  document.body.appendChild(lightbox);

  var thumbs = document.querySelectorAll('.gallery-grid img');
  
  for (var i = 0; i < thumbs.length; i++) {
    thumbs[i].onclick = function() {
      lightbox.innerHTML = '<img src="' + this.src + '" alt="' + this.alt + '">';
      lightbox.style.display = 'flex';
    };
  }

  lightbox.onclick = function() {
    lightbox.style.display = 'none';
  };
   
}

//formualri de registre
  function validateRegistre() {
  var form = document.querySelector('.registre-form');
  var email = document.getElementById('emailReg');
  var pass = document.getElementById('pass');
  var pass2 = document.getElementById('pass2');
  var errorEmail = document.getElementById('errorEmail');
  var errorPass = document.getElementById('errorPass');

  form.onsubmit = function(e) {
    var valido = true;

    if (email.value.indexOf('@') === -1) {
      errorEmail.style.display = 'block';
      valido = false;
    } else {
      errorEmail.style.display = 'none';
    }

    if (pass.value !== pass2.value) {
      errorPass.style.display = 'block';
      valido = false;
    } else {
      errorPass.style.display = 'none';
    }

    if (!valido) {
      e.preventDefault();
    }
  };
}
