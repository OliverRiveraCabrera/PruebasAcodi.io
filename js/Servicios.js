export function CargarSlider() {
    const sliders = [...document.querySelectorAll('.slider_body')];
    const points = [...document.querySelectorAll('.points')];
    const arrowNext = document.querySelector('#next');
    const arrowBefore = document.querySelector('#before');
    let value;
    var i;

    arrowNext.addEventListener('click', () => changePosition(1));
    arrowBefore.addEventListener('click', () => changePosition(-1));

    for (i = 0; i < points.length; i++) {
        points[i].addEventListener('click', () => changePositionPoint(Number(points[i].dataset.id)))
    }

    let intervalo;
    function changePosition(change) {
        const currentElement = Number(document.querySelector('.slider_body--show').dataset.id);
        value = currentElement;
        value += change;

        if (value === 0 || value == sliders.length + 1) {
            value = value === 0 ? sliders.length : 1;
        }

        sliders[currentElement - 1].classList.toggle('slider_body--show');
        sliders[value - 1].classList.toggle('slider_body--show');
        points[currentElement - 1].classList.toggle('point--on');
        points[value - 1].classList.toggle('point--on');
    }

    function changePositionPoint(point) {
        const currentElement = Number(document.querySelector('.slider_body--show').dataset.id);
        sliders[currentElement - 1].classList.toggle('slider_body--show');
        sliders[point -1].classList.toggle('slider_body--show');
        points[currentElement - 1].classList.toggle('point--on');
        points[point -1].classList.toggle('point--on');
    }

    setInterval(function () {
        changePosition(1);
    }, 3000);
}