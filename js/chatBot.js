export function Animacion_cb() {
    const anim = document.querySelector(".anim_cb")

    var animation = bodymovin.loadAnimation({
        container: anim, // Required
        path: '/Img/JSON/chat_bot.json', // Required
        renderer: 'svg', // Required
        loop: true, // Optional
        autoplay: true, // Optional
        name: "prueba", // Name for future reference. Optional.
    })
}