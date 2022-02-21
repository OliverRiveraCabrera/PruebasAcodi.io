export function Animacion() {
    const anim = document.querySelector(".anim")

    var animation = bodymovin.loadAnimation({
        container: anim, // Required
        path: '/Img/JSON/main.json', // Required
        renderer: 'svg', // Required
        loop: true, // Optional
        autoplay: true, // Optional
        name: "prueba", // Name for future reference. Optional.
    })
}