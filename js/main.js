document.addEventListener('DOMContentLoaded', () => {

    // Script de la galería de imagenes
    const getImages = container => [...container.querySelectorAll('img')]
    const getLargeImages = gallery => gallery.map(el => el.src).map(el => el.replace('thumb', 'big'))


    const openLightboxEvent = (container, gallery, larges) => {
        container.addEventListener('click', e => {
            let el = e.target,
                i = gallery.indexOf(el)

            if (el.tagName == 'IMG') {
                openLightbox(gallery, i, larges)
            }

        })
    }

    const openLightbox = (gallery, i, larges) => {
        let lightboxElement = document.createElement('div')
        lightboxElement.innerHTML = `
        <div class="lightbox-overlay">
        <div class="close-modal"><i class="zmdi zmdi-close"></i></div>
            <figure class="lightbox-container horizontal-lightbox">
  <div class="lightbox-media">
    <img src="${larges[i]}" class="lightbox-image">
  </div>
  <div class="lightbox-text">
    <h2 class="lightbox-title">${gallery[i].dataset.title || ''}</h2>
    <p class="lightbox-description">${gallery[i].dataset.description || ''}</p>
    <nav class="navigation">
      <a href="#" class="lightbox-navigation prev"><i class="zmdi zmdi-chevron-left"></i></a>
      <a href="#" class="lightbox-navigation next"><i class="zmdi zmdi-chevron-right"></i></a>
    </nav>
  </div>
</figure>


        </div>
        `

        lightboxElement.id = 'lightbox'
        document.body.appendChild(lightboxElement)
        closeModal(lightboxElement)
        navigateLightbox(lightboxElement, i, larges, gallery)

        //navigateLightbox(lightboxElement, i, larges)

    }

    const closeModal = modalElement => {
        let closeModal = modalElement.querySelector('.close-modal')
        closeModal.addEventListener('click', e => {
            e.preventDefault()
            document.body.removeChild(modalElement)
        })
    }

    /*const navigateLightbox = (lightboxElement, i, larges) => {
        let prevButton = lightboxElement.querySelector('.prev'),
            nextButton = lightboxElement.querySelector('.next'),
            image = lightboxElement.querySelector('img'),
            closeButton = lightboxElement.querySelector('.close-modal')

        window.addEventListener('keyup', e => {
            if (e.key === 'ArrowRight') {
                nextButton.click()
            }
            if (e.key === 'ArrowLeft') {
                prevButton.click()
            }
            if (e.key === 'Escape') {
                closeButton.click()
            }
        })

        lightboxElement.addEventListener('click', e => {
            e.preventDefault()
            let target = e.target
            if (target === prevButton) {
                if (i > 0) {
                    image.src = larges[i - 1]
                    i--
                } else {
                    image.src = larges[larges.length - 1]
                    i = larges.length - 1
                }
            } else if (target === nextButton) {
                if (i < larges.length - 1) {
                    image.src = larges[i + 1]
                    i++
                } else {
                    image.src = larges[0]
                    i = 0
                }
            }
        })
    }*/
    const navigateLightbox = (lightboxElement, i, larges, gallery) => {
        let prevButton = lightboxElement.querySelector('.prev'),
            nextButton = lightboxElement.querySelector('.next'),
            image = lightboxElement.querySelector('img'),
            title = lightboxElement.querySelector('.lightbox-title'),
            description = lightboxElement.querySelector('.lightbox-description'),
            closeButton = lightboxElement.querySelector('.close-modal');

        const updateContent = (index) => {
            image.src = larges[index];
            title.innerHTML = gallery[index].dataset.title || '';
            description.innerHTML = gallery[index].dataset.description || '';
        };

        // Actualiza el contenido al cargar
        updateContent(i);

        window.addEventListener('keyup', e => {
            if (e.key === 'ArrowRight') nextButton.click();
            if (e.key === 'ArrowLeft') prevButton.click();
            if (e.key === 'Escape') closeButton.click();
        });

        lightboxElement.addEventListener('click', e => {
            e.preventDefault();
            let target = e.target;

            if (target === prevButton || target.closest('.prev')) {
                i = (i > 0) ? i - 1 : larges.length - 1;
                updateContent(i);
            } else if (target === nextButton || target.closest('.next')) {
                i = (i < larges.length - 1) ? i + 1 : 0;
                updateContent(i);
            }
        });
    };



    const lightbox = container => {
        let images = getImages(container),
            larges = getLargeImages(images)
        openLightboxEvent(container, images, larges)
    }
    lightbox(document.getElementById('gallery-container'))

    //smooth scroll
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000
    });

})


//script del Carrusel de imágenes
let indice = 1;
muestraSlides(indice);

function avanzaSlide(n) {
    muestraSlides(indice += n);
}

function posicionSlide(n) {
    muestraSlides(indice = n);
}
setInterval(function tiempo() {
    muestraSlides(indice += 1)
}, 10000);
function muestraSlides(n) {
    let i;
    let slides = document.getElementsByClassName('miSlider');
    let barras = document.getElementsByClassName('dot');

    if (n > slides.length) {
        indice = 1;
    }
    if (n < 1) {
        indice = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < barras.length; i++) {
        barras[i].className = barras[i].className.replace(" active", "");
    }

    slides[indice - 1].style.display = 'block';
    barras[indice - 1].className += ' active';

}

// script del menu responsive
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })

        nav.addEventListener('click', e => {
            let el = e.target
            if (el.tagName == 'A') {
                nav.classList.toggle('show')
            }
        })
    }

}

showMenu('navbar-menu-mobile', 'navbar-container')