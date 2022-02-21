export function Animacion_m() {
    const anim = document.querySelector(".anim_m")

    var animation = bodymovin.loadAnimation({
        container: anim, // Required
        path: '/Img/JSON/map.json', // Required
        renderer: 'svg', // Required
        loop: true, // Optional
        autoplay: true, // Optional
        name: "prueba", // Name for future reference. Optional.
    })
}