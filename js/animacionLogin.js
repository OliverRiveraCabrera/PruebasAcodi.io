export function Animacion_r() {
    const anim = document.querySelector(".anim_l")

    var animation = bodymovin.loadAnimation({
        container: anim, // Required
        path: '/Img/JSON/pencil.json', // Required
        renderer: 'svg', // Required
        loop: true, // Optional
        autoplay: true, // Optional
        name: "prueba", // Name for future reference. Optional.
    })
}

export function Animacion_ca() {
    const anim = document.querySelector(".anim_ca")

    var animation = bodymovin.loadAnimation({
        container: anim, // Required
        path: '/Img/JSON/carga.json', // Required
        renderer: 'svg', // Required
        loop: true, // Optional
        autoplay: true, // Optional
        name: "prueba", // Name for future reference. Optional.
    })
}

export function Animacion_il() {
    const anim = document.querySelector(".anim_il")

    var animation = bodymovin.loadAnimation({
        container: anim, // Required
        path: '/Img/JSON/login_imgen.json', // Required
        renderer: 'svg', // Required
        loop: true, // Optional
        autoplay: true, // Optional
        name: "prueba", // Name for future reference. Optional.
    })
}

export function Animacion_ir() {
    const anim = document.querySelector(".anim_ir")

    var animation = bodymovin.loadAnimation({
        container: anim, // Required
        path: '/Img/JSON/registro_imagen.json', // Required
        renderer: 'svg', // Required
        loop: true, // Optional
        autoplay: true, // Optional
        name: "prueba", // Name for future reference. Optional.
    })
}