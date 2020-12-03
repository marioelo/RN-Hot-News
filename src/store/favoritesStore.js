import * as actionTypes from './actionTypes';

const initialState = {
    articles: [
        {
            "source": {
                "id": null,
                "name": "Muyinteresante.es"
            },
            "author": "Victoria González",
            "title": "Los paisajes más bonitos de Sudamérica",
            "description": "Desde las selvas amazónicas hasta las nieves perpetuas de la Patagonia, pasando por algunos de los volcanes más altos del planeta. No te pierdas esta selección de imágenes de los rincones más fascinantes del Cono Sur americano.",
            "url": "https://www.muyinteresante.es/naturaleza/fotos/los-paisajes-mas-bonitos-de-sudamerica-691605259913",
            "urlToImage": "https://estaticos.muyinteresante.es/uploads/images/gallery/5fae52b65cafe89f1090e284/01.jpg",
            "publishedAt": "2020-11-13T10:59:13Z",
            "content": "América del Sur es un extenso continente que abarca multitud de climas y regiones biogeográficas. Hablamos de una superficie de 18 200 000 kilómetros cuadrados que comprende zonas de alta montaña, rí… [+2085 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Applesfera.com"
            },
            "author": "Pedro Aznar",
            "title": "¿Preparados para la keynote? ¡Sigue la presentación de los nuevos Mac Apple Silicon con nosotros!",
            "description": "ESTAMOS EN DIRECTO: sigue la keynote con nosotros desde nuestra página especial de seguimiento en vivo.\n \r\n\n\nOs confieso que, a pesar de haber tenido un Apple Event por mes, este año quizás la presentación que quizás más puede marcar la diferencia es la que e…",
            "url": "https://www.applesfera.com/nuevo/preparados-para-keynote-sigue-presentacion-nuevos-mac-apple-silicon-nosotros",
            "urlToImage": "https://i.blogs.es/b9473f/logo-one-more-thing-event-applesfera/840_560.jpg",
            "publishedAt": "2020-11-10T11:06:13Z",
            "content": "Os confieso que, a pesar de haber tenido un Apple Event por mes, este año quizás la presentación que quizás más puede marcar la diferencia es la que estamos a punto de vivir. Es en mi opinión una de … [+2781 chars]"
        },
    ]
}


// Action creators


// Reducer functions


// Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}


export default reducer;