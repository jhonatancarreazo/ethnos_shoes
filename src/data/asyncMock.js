const productos = [
      {
        id: 1,
        nombre: "Sandalias de playa",
        categoria: "Sandalias",
        stock: 5,
        tipo: "Sandalias",
        precio: 29.99,
        descripcion: "Sandalias cómodas y ligeras perfectas para disfrutar del sol en la playa.",
        img: "https://images.pexels.com/photos/6775270/pexels-photo-6775270.jpeg"
      },
      {
        id: 2,
        nombre: "Sandalias de tacón",
        categoria: "Sandalias",
        stock: 5,
        tipo: "Sandalias",
        precio: 49.99,
        descripcion: "Elegantes sandalias con tacón ideal para lucir en ocasiones especiales.",
        img: "https://images.pexels.com/photos/15778267/pexels-photo-15778267/free-photo-of-moda-mujer-pelo-largo-pelirrojo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 3,
        nombre: "Bolso de playa",
        categoria: "Accesorios",
        stock: 5,
        tipo: "Accesorios",
        precio: 19.99,
        descripcion: "Espacioso bolso diseñado para llevar todo lo necesario para un día en la playa.",
        img: "https://images.pexels.com/photos/9750761/pexels-photo-9750761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 4,
        nombre: "Collar de conchas",
        categoria: "Accesorios",
        stock: 5,
        tipo: "Accesorios",
        precio: 14.99,
        descripcion: "Collar con delicadas conchas marinas, perfecto para complementar tu look veraniego.",
        img: "https://images.pexels.com/photos/11627259/pexels-photo-11627259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 5,
        nombre: "Sandalias planas de cuero",
        categoria: "Sandalias",
        stock: 5,
        tipo: "Sandalias",
        precio: 39.99,
        descripcion: "Sandalias cómodas y versátiles, ideales para el uso diario.",
        img: "https://images.pexels.com/photos/18078748/pexels-photo-18078748/free-photo-of-mujer-verano-rock-roca.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 6,
        nombre: "Sombrero de paja",
        categoria: "Accesorios",
        stock: 5,
        tipo: "Accesorios",
        precio: 24.99,
        descripcion: "Sombrero de paja natural perfecto para protegerse del sol en la playa o en el campo.",
        img: "https://images.pexels.com/photos/7917377/pexels-photo-7917377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 7,
        nombre: "Sandalias de plataforma",
        categoria: "Sandalias",
        stock: 5,
        tipo: "Sandalias",
        precio: 59.99,
        descripcion: "Sandalias con plataforma para un look moderno y cómodo.",
        img: "https://images.pexels.com/photos/18053978/pexels-photo-18053978/free-photo-of-banco-mar-mujer-sentado.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 8,
        nombre: "Bolso de mano de mimbre",
        categoria: "Accesorios",
        stock: 5,
        tipo: "Accesorios",
        precio: 29.99,
        descripcion: "Bolso de mano tejido en mimbre, ideal para un estilo bohemio.",
        img: "https://images.pexels.com/photos/2766335/pexels-photo-2766335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 9,
        nombre: "Collar de perlas",
        categoria: "Accesorios",
        stock: 5,
        tipo: "Accesorios",
        precio: 19.99,
        descripcion: "Collar clásico con perlas naturales, perfecto para ocasiones elegantes.",
        img: "https://images.pexels.com/photos/9790416/pexels-photo-9790416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 10,
        nombre: "Sandalias de tiras",
        categoria: "Sandalias",
        stock: 5,
        tipo: "Sandalias",
        precio: 34.99,
        descripcion: "Sandalias de tiras elegantes y versátiles para cualquier ocasión.",
        img: "https://images.pexels.com/photos/18787112/pexels-photo-18787112/free-photo-of-ciudad-gafas-de-sol-mujer-calle.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 11,
        nombre: "Pulsera de conchas",
        categoria: "Accesorios",
        stock: 5,
        tipo: "Accesorios",
        precio: 9.99,
        descripcion: "Pulsera con delicadas conchas marinas, perfecta para complementar tu look playero.",
        img: "https://images.pexels.com/photos/9428775/pexels-photo-9428775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 12,
        nombre: "Sandalias de cuña",
        categoria: "Sandalias",
        stock: 5,
        tipo: "Sandalias",
        precio: 44.99,
        descripcion: "Sandalias con cuña para un look elegante y cómodo.",
        img: "https://images.pexels.com/photos/8989557/pexels-photo-8989557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 13,
        nombre: "Bolso de hombro de cuero",
        categoria: "Accesorios",
        stock: 5,
        tipo: "Accesorios",
        precio: 39.99,
        descripcion: "Bolso de hombro elegante y práctico, perfecto para el día a día.",
        img: "https://images.pexels.com/photos/1374910/pexels-photo-1374910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 14,
        nombre: "Gorra de visera",
        categoria: "Accesorios",
        stock: 5,
        tipo: "Accesorios",
        precio: 14.99,
        descripcion: "Gorra de visera ajustable, ideal para protegerse del sol durante actividades al aire libre.",
        img: "https://images.pexels.com/photos/16062909/pexels-photo-16062909/free-photo-of-mujer-libros-sentado-joven.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 15,
        nombre: "Collar de corazón",
        categoria: "Accesorios",
        stock: 5,
        tipo: "Accesorios",
        precio: 12.99,
        descripcion: "Collar con un encantador colgante de corazón, perfecto para regalar a alguien especial.",
        img: "https://images.pexels.com/photos/15017677/pexels-photo-15017677/free-photo-of-moda-mujer-corazon-modelo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 16,
        nombre: "Sandalias de plataforma de yute",
        categoria: "Sandalias",
        stock: 5,
        tipo: "Sandalias",
        precio: 54.99,
        descripcion: "Sandalias con plataforma de yute para un look boho chic.",
        img: "https://images.unsplash.com/photo-1625318880248-a7cc6bcf0c0f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: 17,
        nombre: "Gafas de sol retro",
        categoria: "Accesorios",
        stock: 5,
        tipo: "Accesorios",
        precio: 29.99,
        descripcion: "Gafas de sol con un estilo retro y lentes polarizadas para proteger tus ojos del sol.",
        img: "https://images.pexels.com/photos/7785961/pexels-photo-7785961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 18,
        nombre: "Pulsera de cuero trenzado",
        categoria: "Accesorios",
        stock: 5,
        tipo: "Accesorios",
        precio: 17.99,
        descripcion: "Pulsera de cuero trenzado con cierre magnético, ideal para un look casual.",
        img: "https://images.pexels.com/photos/7524890/pexels-photo-7524890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 19,
        nombre: "Remera Rick",
        precio: 8500,
        categoria: "Remeras",
        stock: 5,
        descripcion:
          "Las remeras son 100% algodón peinado 24/1 (Premium).No se deforman, ni pierden el color.",
        img: "https://http2.mlstatic.com/D_NQ_NP_751255-MLA31037228606_062019-O.webp",
      },
      {
        id: 20,
        nombre: "Buzo peace among worlds",
        precio: 13000,
        categoria: "Buzos",
        stock: 5,
        descripcion:
          "Buzo Unisex 100% Algodón. Cuello Redondo con refuerzo en los cuellos y mangas",
        img: "https://acdn.mitiendanube.com/stores/605/358/products/165bn1-68089a57bae4b2579916833144477754-1024-1024.png",
      },
      {
        id: 21,
        nombre: "Pijama Rick and Morty",
        precio: 8900,
        categoria: "Pijamas",
        stock: 5,
        descripcion:
          "Los Pants son de lycra y modal calidad premium, cómodos, súper suaves, livianos y frescos para usarlos tranqui en casa o dónde quieras. Tienen cintura elastizada con con cordón regulable para ajustarlos hasta estar cómodos. La tela no encoje, los estampados no decoloran y es por eso que todas nuestras prendas cuentan con garantía de estampado.",
        img: "https://acdn.mitiendanube.com/stores/944/335/products/4181-ba681e6c1fd38d3ed816651113884723-1024-1024.jpg",
      },
      {
        id: 22,
        nombre: "Remeron Rick And Morty",
        precio: 9900,
        categoria: "Remeras",
        stock: 5,
        descripcion:
          "Los remerones son 100% algodón peinado 24/1 (Premium).No se deforman, ni pierden el color.",
        img: "https://media.nastygal.com/i/nastygal/agg04760_charcoal_xl/female-charcoal-rick-and-morty-graphic-t-shirt-dress/?w=1070&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
      },
      {
        id: 23,
        nombre: "Zapatillas De Lona Pintadas A Mano Rick And Morty",
        precio: 14900,
        categoria: "Zapatillas",
        stock: 5,
        descripcion:
          "Zapatilla de lona reforzada. Pintada a mano con pintura de calidad.",
        img: "https://http2.mlstatic.com/D_NQ_NP_958920-MLA53230449583_012023-O.webp",
      },
    ];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
          }, 2000);
    });
};

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        const productosFiltrados = productos.filter(
            (el) => el.categoria == category
        );
        setTimeout(() => {
            resolve(productosFiltrados);
          }, 2000);
    });
};

export const getProductById = (id) => {
    return new Promise((resolve) => {
        const productoFiltrado = productos.find(
            (el) => el.id == parseInt(id)
        );
        setTimeout(() => {
            resolve(productoFiltrado);
          }, 2000);
    });
};