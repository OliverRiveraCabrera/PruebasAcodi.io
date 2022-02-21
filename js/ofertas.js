export function Animacion_o() {
    const anim = document.querySelector(".anim_o")

    var animation = bodymovin.loadAnimation({
        container: anim, // Required
        path: '/Img/JSON/moni.json', // Required
        renderer: 'svg', // Required
        loop: true, // Optional
        autoplay: true, // Optional
        name: "prueba", // Name for future reference. Optional.
    })
}