var images = document.querySelectorAll('#gallerie img');
var imageActive = 0;
var intervale;

for (var i = 1; i < images.length; i++) {
    images[i].classList.add('hidden');

}

// click sur button next
document.querySelector('#next').addEventListener('click', function () {
    next();
});

// click sur button preview
document.querySelector('#prev').addEventListener('click', function () {
    prev();
});

// click sur button Play
document.querySelector('#play').addEventListener('click', function () {
    play();
});
// click sur button pause
document.querySelector('#pause').addEventListener('click', function () {
    pause();
});

//gestion fonction next
var next = function () {
    images[imageActive].classList.add('hidden');
    imageActive = imageActive + 1;
    if (imageActive >= images.length) {
        imageActive = 0;
    }
    images[imageActive].classList.remove('hidden');
}

// gestion fonction preview
var prev = function () {
    images[imageActive].classList.remove('hidden');
    images[imageActive].classList.add('hidden');
    console.log('alain')
    imageActive = imageActive - 1;
    if (imageActive < 0) {
        imageActive = images.length - 1;
    }
    images[imageActive].classList.remove('hidden');
}

// gestion fonction play
var play = function () {
    intervale = window.setInterval(next, 1000);
}

// gestion fonction pause
var pause = function () {
    window.clearInterval(intervale);
}

// gestion touche clavier
window.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') {
        next();
    }
    if (e.key === 'ArrowLeft') {
        prev();
    }
})