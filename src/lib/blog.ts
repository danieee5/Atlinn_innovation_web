export type BlogSection = {
  heading?: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  readingMinutes: number;
  sections: BlogSection[];
  relatedProductSlugs?: string[];
  citation?: { label: string; url: string };
};

export const blogPosts: BlogPost[] = [
  {
    slug: "donde-comprar-balance-products-guayaquil",
    title: "Dónde comprar Balance Products en Guayaquil: guía para empresas y consumidores",
    description:
      "Cómo conseguir Hidralife, Maximum, Mishá, Arriba y Stevia Balance en Guayaquil según si compras al por mayor o buscas 1-2 unidades.",
    excerpt:
      "En Guayaquil hay un solo canal oficial para conseguir Balance Products. Te explicamos cómo comprar según seas empresa, gimnasio o consumidor individual.",
    publishedAt: "2026-06-02",
    readingMinutes: 4,
    sections: [
      {
        paragraphs: [
          "Balance Products es una marca ecuatoriana de bebidas y suplementos funcionales elaborada en Quito. Si estás en Guayaquil y buscas Hidralife, Maximum, Mishá, Arriba o Stevia Balance, es normal preguntarte dónde conseguirlos sin depender de un envío desde otra ciudad.",
          "ATLINN Innovations es el distribuidor oficial de Balance Products en Guayaquil. Eso significa que recibimos el producto directo de la marca y lo entregamos nosotros mismos en la ciudad — pero la forma de comprar cambia según cuánto necesites.",
        ],
      },
      {
        heading: "Si compras al por mayor",
        paragraphs: [
          "Empresas, gimnasios, farmacias, tiendas naturistas y organizadores de eventos pueden cotizar cajas directamente con nosotros por WhatsApp. Coordinamos precio por volumen y entregamos nosotros mismos en tu negocio, en Guayaquil.",
          "Este es el camino más común: negocios que quieren ofrecer Balance Products a sus propios clientes, o empresas que compran para sus colaboradores.",
        ],
      },
      {
        heading: "Si buscas 1 o 2 unidades",
        paragraphs: [
          "Si eres consumidor final y solo quieres una o dos botellas para ti, no hacemos entrega a domicilio de unidad suelta — nuestros pedidos directos son por caja. Lo que sí hacemos es indicarte la farmacia o tienda más cercana en Guayaquil donde ya se vende Balance Products al detalle.",
          "Escríbenos por WhatsApp contándonos tu zona y te decimos el punto más cercano.",
        ],
      },
    ],
    relatedProductSlugs: ["hidralife", "maximum"],
    citation: { label: "sitio oficial de Balance Products", url: "https://balanceproducts.com.ec/site/" },
  },
  {
    slug: "guayusa-vs-cafe",
    title: "Guayusa vs. café: dos formas distintas de tomar energía",
    description:
      "Qué es la guayusa amazónica, cómo se compara con el café y por qué Mishá la usa como base de su infusión natural.",
    excerpt:
      "La guayusa es una planta amazónica con cafeína natural que se toma en infusión desde hace generaciones. Así se compara con el café de todos los días.",
    publishedAt: "2026-05-18",
    readingMinutes: 3,
    sections: [
      {
        paragraphs: [
          "La guayusa es una planta originaria de la Amazonía ecuatoriana, tradicionalmente consumida en infusión por comunidades kichwas. Al igual que el café, contiene cafeína de forma natural, pero suele describirse como una energía más sostenida y menos brusca, sin el bajón que muchas personas asocian al café.",
        ],
      },
      {
        heading: "¿Por qué Mishá usa guayusa?",
        paragraphs: [
          "Mishá, la infusión natural de Balance Products, combina guayusa con jengibre y está enriquecida con vitamina E y selenio. Es una alternativa para quienes buscan energía natural sin depender únicamente del café, endulzada con stevia y con pocas calorías.",
          "Está disponible en sabores frutos rojos, limón y naranjilla.",
        ],
      },
      {
        heading: "Cómo conseguirla en Guayaquil",
        paragraphs: [
          "Si tu negocio quiere ofrecer Mishá a sus clientes, cotiza por caja con ATLINN, distribuidor oficial de Balance Products en Guayaquil. Si buscas una o dos unidades, revisa nuestra guía de dónde comprar en la ciudad.",
        ],
      },
    ],
    relatedProductSlugs: ["misha"],
  },
  {
    slug: "electrolitos-vs-bebidas-azucaradas",
    title: "Electrolitos vs. bebidas azucaradas: qué hidrata mejor",
    description:
      "La diferencia entre hidratarte con electrolitos y hacerlo con bebidas azucaradas tradicionales, y qué aporta Hidralife.",
    excerpt:
      "No toda bebida 'hidratante' hidrata igual. Te explicamos la diferencia entre electrolitos y azúcar a la hora de reponer líquidos.",
    publishedAt: "2026-05-04",
    readingMinutes: 3,
    sections: [
      {
        paragraphs: [
          "Cuando sudamos —por calor, ejercicio o rutina diaria— no solo perdemos agua, también perdemos electrolitos: minerales como sodio, potasio y magnesio que el cuerpo necesita para funcionar bien. Tomar solo agua repone líquido, pero no siempre repone esos minerales.",
          "Muchas bebidas 'hidratantes' tradicionales resuelven esto a base de azúcar y colorantes, lo cual no es necesariamente lo que el cuerpo pide después de entrenar o de un día de calor.",
        ],
      },
      {
        heading: "La fórmula de Hidralife",
        paragraphs: [
          "Hidralife está formulado con 6 electrolitos esenciales más zinc, sin azúcar ni glucosa y con 0 calorías. Está pensado para reponer minerales sin sumar azúcar innecesaria, en sabores uva, manzana, jamaica y blueberries.",
        ],
      },
      {
        heading: "Para negocios y consumo personal",
        paragraphs: [
          "Gimnasios y boxes suelen comprar Hidralife por caja para vender en su propia nevera. Si tienes un negocio y quieres cotizar, escríbenos por WhatsApp. Si solo buscas una o dos unidades, revisa dónde comprar Balance Products en Guayaquil.",
        ],
      },
    ],
    relatedProductSlugs: ["hidralife"],
  },
  {
    slug: "cacao-arriba-origen-ecuatoriano",
    title: "Cacao arriba: el origen ecuatoriano detrás de Arriba",
    description:
      "Qué es el cacao arriba, por qué es reconocido internacionalmente y cómo se usa en el néctar Arriba de Balance Products.",
    excerpt:
      "El cacao arriba es uno de los cacaos más reconocidos del mundo por su aroma, y es 100% ecuatoriano. Así se usa en el néctar Arriba.",
    publishedAt: "2026-04-20",
    readingMinutes: 3,
    sections: [
      {
        paragraphs: [
          "El cacao arriba (también llamado cacao fino de aroma) es una variedad originaria de Ecuador, conocida internacionalmente por su perfil aromático floral y afrutado. Es uno de los productos agrícolas más reconocidos del país y una referencia en la industria del chocolate fino a nivel mundial.",
        ],
      },
      {
        heading: "El néctar Arriba",
        paragraphs: [
          "Arriba es el néctar de cacao de Balance Products, con fibra prebiótica y sabor mango. Es una forma distinta de hidratarte, partiendo de un ingrediente 100% ecuatoriano en lugar de las frutas más habituales en este tipo de bebidas.",
        ],
      },
    ],
    relatedProductSlugs: ["arriba"],
    citation: { label: "sitio oficial de Balance Products", url: "https://balanceproducts.com.ec/site/" },
  },
  {
    slug: "cuando-tomar-proteina",
    title: "Cuándo tomar proteína para maximizar la recuperación",
    description:
      "Qué rol cumple la proteína después de entrenar y cómo encaja Maximum, la bebida de proteína de Balance Products, en tu rutina.",
    excerpt:
      "El momento en que tomas proteína importa tanto como la cantidad. Esto es lo que debes saber sobre la ventana post entrenamiento.",
    publishedAt: "2026-04-06",
    readingMinutes: 3,
    sections: [
      {
        paragraphs: [
          "Después de entrenar, el cuerpo entra en un proceso de reparación muscular que necesita proteína disponible. Por eso muchas personas buscan una fuente de proteína práctica de consumir en los minutos siguientes a su rutina, en vez de esperar a su próxima comida completa.",
        ],
      },
      {
        heading: "Maximum como opción práctica",
        paragraphs: [
          "Maximum es la bebida de proteína de Balance Products: 20 gramos de proteína, 4 gramos de BCAA, 0 azúcar y 80 calorías por botella, en sabores frutos rojos y frutos tropicales. Su formato líquido la hace fácil de llevar al gimnasio o a la oficina.",
        ],
      },
      {
        heading: "Para gimnasios y boxes",
        paragraphs: [
          "Si tu gimnasio o box quiere ofrecer Maximum a sus miembros justo después de entrenar, cotiza por caja con ATLINN, distribuidor oficial en Guayaquil.",
        ],
      },
    ],
    relatedProductSlugs: ["maximum"],
  },
  {
    slug: "stevia-natural-sin-calorias",
    title: "Stevia natural: cómo endulzar sin sumar calorías",
    description:
      "Qué es la stevia, en qué se diferencia de otros endulzantes y cómo se usa Stevia Balance en bebidas y alimentos.",
    excerpt:
      "La stevia es un endulzante de origen vegetal sin calorías. Te contamos cómo se compara con el azúcar y cómo usar Stevia Balance.",
    publishedAt: "2026-03-23",
    readingMinutes: 3,
    sections: [
      {
        paragraphs: [
          "La stevia es un endulzante natural que se extrae de las hojas de la planta Stevia rebaudiana, originaria de Sudamérica. A diferencia del azúcar, no aporta calorías, lo que la convierte en una alternativa habitual para quienes buscan reducir su consumo de azúcar sin resignar el sabor dulce.",
        ],
      },
      {
        heading: "Stevia Balance",
        paragraphs: [
          "Stevia Balance es el endulzante natural de Balance Products, con antioxidantes, vitaminas C y E y selenio, 0 calorías. Viene en presentaciones de caja (200 unidades) y funda (500 unidades), en sobres de 1 gramo, ideal para negocios que sirven bebidas o alimentos.",
        ],
      },
      {
        heading: "Para cafeterías y negocios de alimentos",
        paragraphs: [
          "Si tu negocio sirve café, té o jugos y quiere ofrecer una alternativa sin azúcar a sus clientes, cotiza Stevia Balance por caja con ATLINN en Guayaquil.",
        ],
      },
    ],
    relatedProductSlugs: ["stevia-balance"],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
