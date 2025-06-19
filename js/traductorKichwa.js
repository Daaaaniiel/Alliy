function traducirCarruselKichwa() {
  const traduccionesCarrusel = {
    "inicio_titulo": "Kawsay Umanta",
    "inicio_frase": "Yuyayta alli riksishka, mana llakiyuq ruraymi, chaysi sinchi ruraymi.",
    "psicologia_titulo": "Yachay Uman",
    "psicologia_frase": "Yachay uman mana shamuchinaqchu, ñukaka kikiyachinaykipaq ruraymi, ñukaka kawsaykita alli yachaypimi yanapanki.",
    "alliy_titulo": "Alliy",
    "alliy_frase": "Yuyay kawsayta alli ruray, kawsaylla alli shamukani."
  };

  for (const id in traduccionesCarrusel) {
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.innerText = traduccionesCarrusel[id];
    }
  }
}
function traducirSobreNosotrosKichwa() {
  const traduccionesSobreNosotros = {
    "sobre_nosotros_titulo": "Ñukanchikmanta",
    "alliy_titulo_2": "Alliy",
    "sobre_nosotros_parrafo1": "Alliy kay plataforma-mi ruran, rurayta munayku, yuyayta alli rikuchina, shinallatak runakunata yanapana. Mana alli kakuyta rikushpa, ñawpak yachay, allikuyta shamuchishpa kushiyta tukuchina.",
    "sobre_nosotros_parrafo2": "Ñukanchikta ruraykuna kawsaypi allikuykama shamuchishpa, kaypi kikinkunata yachachishpa, manchakuykunata riksishpa, yuyaykunata maskashpa, alli kawsayta taripanakunata ruraykuna."
  };

  for (const id in traduccionesSobreNosotros) {
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.innerText = traduccionesSobreNosotros[id];
    }
  }
}
function traducirFactoresRuralesKichwa() {
  const traduccionesFactores = {
    "factores_titulo": "Kawsay Umanpi Rural Llakikunamanta",
    "factores_intro": "Chawpi llaqtapi kawsak runakuna llakikunata riksinkapak chaykunata uyaykuchkan. Kaykunata yachachishpa allikuykama shamushun.",
    "factor1_titulo": "Shukpi kawsak, llakta wakpi kawsak",
    "factor1_texto": "Hatun llaqtakunamanta karushka kawsaykunata mana apamushkachu. Kaymi shuk llakisayayta, shuk shina tukuykuyta kacharin.",
    "factor2_titulo": "Mana ruraykuna chaymanta llakikuy",
    "factor2_texto": "Mana ruraykuna, mana kuyay rurana kallpanta, shina chaymi llakikuy, manchakuy, mana yuyaylla ruray tukurishkan.",
    "factor3_titulo": "Mana ruraykuna hamuq kawsay umanman",
    "factor3_texto": "Rural llaqtakunapi mana kawsay uman ruraykunamanta, mana yachayniyuq runakunamanta, chaymi mana atinchik hampikuyta ruray.",
    "factor4_titulo": "Yachay mana riksishka y kultura mastarishka",
    "factor4_texto": "Shamukuna llakikunata mana yachachishkachu, chaymi runakuna mana yanapayta maskan."
  };

  for (const id in traduccionesFactores) {
    const el = document.getElementById(id);
    if (el) {
      el.innerText = traduccionesFactores[id];
    }
  }
}
function traducirAlliyBotKichwa() {
  const traduccionesAlliyBot = {
    "alliybot_titulo": "AlliyBot",
    "alliybot_subtitulo": "Shimikllami rikuchkan",
    "ayuda_legal_titulo": "Yuyay kawsayta yanapanakuy",
    "ayuda_legal_texto": "Kunan shina runa llakikushpa kanki, ñawpakunapi mana alli rurakushpa, familia ukupi chaykuna tukuyllapi. Kaypi yachakuy ima rurakushka, ima rurayta riksina.",
    "apoyo_emocional_titulo": "Shunku yanapanakuy",
    "apoyo_emocional_texto": "Shina kashpa, shimikllawan rimanaykuta munan, mana llakikushpa, mana imallatak chaykuna rikuchishpa.",
    "emergencia_titulo": "Kuyanakuy chaykunapi",
    "emergencia_texto": "Shina ñawpakunapi kuyaykushpa kanki, mana yachakushpa ima rurayta, ima runawan rimanayta. Kaypi ñawikuy, chaymanta yanapanakurisha."
  };

  for (const id in traduccionesAlliyBot) {
    const el = document.getElementById(id);
    if (el) {
      el.innerText = traduccionesAlliyBot[id];
    }
  }
}
function traducirGaleriaKichwa() {
  const titulo = document.getElementById("cultura_mental_titulo");
  if (titulo) titulo.innerText = "Yuyay kawsay";

  const traducciones = [
    { titulo: "Llaki", descripcion: "Shunku llakikuy. Ama yuyaychu rurana. Mana munay. Mana kallariy. Mana mikuyman yuyay. Mana puñuy. Mana yuyay alli." },
    { titulo: "Mana chaylla ñawi ruray", descripcion: "Yuyaypimi shina mana chaylla ruraykunata chinkachin. Yuyayman llakikuy, mana alli puñuy, yuyay chinkaylla." },
    { titulo: "Aswan sinchi llakikuy", descripcion: "Llaki shina llullu shamukuy, shunku paktachiy, mana alli rikuy, mana alli sinchi ruraykuna." },
    { titulo: "Yuyay kutichiy", descripcion: "Yuyaywan mana munay ruray. Mana munay yuyay rikuyta, ñawi rurayta kutichiy shina." },
    { titulo: "Llaki trauma llapa ñawpakunapi", descripcion: "Ñawpa yuyaykunam shamuykuna. Llaki rimay, ñawpakunata mana munay. Ñawi ruray chay trauma ñawikuykunawan." },
    { titulo: "Warmikuna warmikuna llaki", descripcion: "Kawsay ruraykuna ñawpakunata kutichin. Alli ñawi ruraymanta mana alli shunku kawsayman shamuykuna." },
    { titulo: "Rikuy mana alli shina", descripcion: "Rikuykunam llakikuy. Mana shina ruray, yuyay kutichiy, riksiy mana alli rikuyta." },
    { titulo: "Shunku kutichiy", descripcion: "Yuyay chinkay. Llaki yuyay. Mana munay ruray. Llaki warmi llaki kari. Shunku chinkaylla." },
    { titulo: "Mikuykunata mana munay", descripcion: "Llaki mikuyta mana munay. Mana mikuyta ruray, mikuyta ruraymanta chinkay. Mana munay riksiyta. Rikuyta kutichiy." },
    { titulo: "Mana yuyaymanta ñawikuy", descripcion: "Mana shina yuyayta ruray. Mana riksiyta ruray. Mana munay yachayta. Rikuyta kutichiy." },
    { titulo: "Mana alli ruray", descripcion: "Mana alli shina ruray. Mana warmikunawan yanapanakuy. Kawsayta chinkachiy. Mana munay rikuykuna." },
    { titulo: "Yuyay chinkaykunawan shamuy", descripcion: "Yuyayta chinkachiy. Rikuyta kutichiy. Mana shina yuyayta ruray. Mana yachay rurayta. Mana yuyayta ruray." }
  ];

  const items = document.querySelectorAll("#gallery-container .gallery-img");
  items.forEach((img, i) => {
    if (traducciones[i]) {
      img.setAttribute("data-title", traducciones[i].titulo);
      img.setAttribute("data-description", traducciones[i].descripcion.replace(/\n/g, "<br>"));
    }
  });
}

function traducirConsejosKichwa() {
  // Título e introducción
  document.getElementById("consejos_titulo").innerText = "Yuyay kawsayta yanapanakuy rimaykuna";
  document.getElementById("consejos_intro").innerText =
    "Shina mana alli kawsayta rikuchkanki, kay rimaykuna kikillata yanapanakunkiman.";

  const titulos = [
    "Kawsayki rimayta rimanakuy",
    "Yachachikmanta yanapanakuy maskay",
    "Suma kawsayta kuyay",
    "Kawsaykimanta ñawpakuna churay",
    "Yanapanakuy ayllukunawan tinkuy",
    "Yuyariy: mana kanchi pipash nanayta rurakpak"
  ];

  const textos = [
    "- Kikillata rimanakuy shunku kallarikunata sumalla rurachin.<br>- Ama shukta ima, rimashka llapa rimayta uyariy.",
    "- Ayllukunapi riksishka yachachikkunam kikillata yanapanakunkiman.",
    "- Hampi mikuymanta, puñuymanta, ñawpak mashi ruraymanta kuyaylla.<br>- Shuk ñawikukuy ruraykuna shamuykuyta sumalla rurachin (shina ñawikukuy, shamukuy, takikuy).",
    "- Kawsaypi sinchikuy ruraykuna ñawpak yachakuyta yanapan.<br>- Kanki shuk runakuna ñawpak kawsayta ñawiriy.",
    "- Ayllu aylluwan tinkushka runakunawan rimanakuy.<br>- Shinallatak shukpa ñawpakpi shamushka runawan rimayta rurayta yanapan.",
    "- Mana kani pipash nanayta rurakpak.<br>- Shuk kawsaypi alli kawsayta kausayta kani."
  ];

  for (let i = 1; i <= 6; i++) {
    document.getElementById(`consejo${i}_titulo`).innerText = titulos[i - 1];
    document.getElementById(`consejo${i}_texto`).innerHTML = textos[i - 1];
  }
}

function traducirContactoKichwa() {
  const contactoTitulo = document.getElementById("contacto_titulo");
  if (contactoTitulo) contactoTitulo.innerText = "Ñukanchikwan rimakuy";

  const contactoSubtitulo = document.getElementById("contacto_subtitulo");
  if (contactoSubtitulo) contactoSubtitulo.innerText = "Ñukanchik redes socialesman kawsaykuy";
}
function traducirFooterKichwa() {
  const footerTexto = document.getElementById("footer_derechos");
  if (footerTexto) footerTexto.innerText = "© 2025 Alliy. Ñukanchik llankaykunaka alli kawsayman. Ñukanchikpa llapan miraykuna kananmi.";
}

let idiomaActual = "es";

// Textos originales en español
const textosOriginales = {
  carrusel: {
    "inicio_titulo": "Salud Mental",
    "inicio_frase": "Cuidar tu mente es un acto de valentía, no de debilidad",
    "psicologia_titulo": "Psicologia",
    "psicologia_frase": "La psicología no te cambia, te ayuda a entenderte y crecer desde adentro.",
    "alliy_titulo": "Alliy",
    "alliy_frase": "Yuyay kawsayta alli ruray, kawsaylla alli shamukani." // ya estaba en kichwa
  },
  galeria: {
  "cultura_mental_titulo": "Cultura Mental"
},

  sobreNosotros: {
    "sobre_nosotros_titulo": "Sobre Nosotros",
    "alliy_titulo_2": "Alliy",
    "sobre_nosotros_parrafo1": "Alliy es una plataforma creada para brindar orientación emocional y educativa a personas que han vivido o están viviendo situaciones díficles. Nuestro enfoque está en la salud mental, el autocuidado y la prevención.",
    "sobre_nosotros_parrafo2": "Nuestro objetivo es ser un espacio de apoyo empático y seguro, donde puedas informarte, identificar señales de alerta, conocer tus derechos y acceder a recursos útiles para tu bienestar emocional."
  },
  contacto: {
    "contacto_titulo": "Contáctanos",
    "contacto_subtitulo": "Síguenos en nuestras redes sociales"
  },
  factores: {
  "factores_titulo": "Factores que afectan la salud mental en comunidades rurales",
  "factores_intro": "Las personas que viven en comunidades rurales enfrentan retos particulares que pueden afectar su salud emocional y psicológica. Reconocer estos factores es esencial para fomentar el bienestar en estas zonas.",
  "factor1_titulo": "Aislamiento geográfico y social",
  "factor1_texto": "La lejanía de los centros urbanos puede limitar el acceso a servicios básicos, incluyendo salud mental. Esto puede generar sentimientos de soledad y desconexión.",
  "factor2_titulo": "Desempleo y pobreza",
  "factor2_texto": "La falta de oportunidades laborales y la precariedad económica generan estrés constante, inseguridad y baja autoestima.",
  "factor3_titulo": "Acceso limitado a servicios de salud",
  "factor3_texto": "En muchas comunidades rurales no existen centros de salud mental, ni profesionales disponibles, lo que impide un tratamiento oportuno.",
  "factor4_titulo": "Estigmas culturales y desinformación",
  "factor4_texto": "Muchas veces los problemas de salud mental son minimizados, ignorados o mal interpretados, impidiendo que las personas busquen ayuda."
},

  footer: {
    "footer_derechos": "© 2025 Alliy. Todos los derechos reservados"
  },
  consejos: {
    "consejos_titulo": "Consejos de Salud Mental",
    "consejos_intro": "Si sientes que estás atravesando una situación difícil, aquí te damos algunos consejos que te pueden ayudar:",
    titulos: [
      "Habla con alguien de confianza",
      "Busca apoyo profesional",
      "Prioriza tu autocuidado",
      "Establece límites claros",
      "Conéctate con redes de apoyo",
      "Recuerda: no eres responsable"
    ],
    textos: [
      "- Compartir lo que sientes con alguien de confianza alivia el peso emocional.<br>- Busca a alguien que escuche sin juzgar ni criticar y que respete tus pensamientos.",
      "- Trabajadores sociales o líderes comunitarios que pueden ayudarte a lidiar con la situación.",
      "- Mantén tu cuerpo sano, descansa, aliméntate bien.<br>- Encuentra actividades que te ayuden a despejar tu mente como leer, caminar o escuchar música.",
      "- Aprender a lidiar con situaciones difíciles en la vida para no tomar malas decisiones.<br>- Tienes derecho a poner límites libremente.",
      "- Participa en grupos comunitarios.<br>- Hablar con personas que pasaron por lo mismo puede ayudarte a sanar.",
      "- No es tu culpa y tienes derecho a vivir en paz y con dignidad."
    ]
  }
};

// Función para restaurar al idioma original (español)
function restaurarEspañol() {
  for (const id in textosOriginales.carrusel) {
    const el = document.getElementById(id);
    if (el) el.innerText = textosOriginales.carrusel[id];
  }

  for (const id in textosOriginales.sobreNosotros) {
    const el = document.getElementById(id);
    if (el) el.innerText = textosOriginales.sobreNosotros[id];
  }

  document.getElementById("contacto_titulo").innerText = textosOriginales.contacto.contacto_titulo;
  document.getElementById("contacto_subtitulo").innerText = textosOriginales.contacto.contacto_subtitulo;

  document.getElementById("footer_derechos").innerText = textosOriginales.footer.footer_derechos;

  document.getElementById("consejos_titulo").innerText = textosOriginales.consejos.consejos_titulo;
  document.getElementById("consejos_intro").innerText = textosOriginales.consejos.consejos_intro;

  for (let i = 1; i <= 6; i++) {
    const titulo = document.getElementById(`consejo${i}_titulo`);
    const texto = document.getElementById(`consejo${i}_texto`);
    if (titulo) titulo.innerText = textosOriginales.consejos.titulos[i - 1];
    if (texto) texto.innerHTML = textosOriginales.consejos.textos[i - 1];
  }
}

// Botón de traducción (se alterna entre español y kichwa)
function traducirSitio() {
  if (idiomaActual === "es") {
    traducirCarruselKichwa();
    traducirSobreNosotrosKichwa();
    traducirFactoresRuralesKichwa();
    traducirAlliyBotKichwa();
    traducirGaleriaKichwa();
    traducirConsejosKichwa();
    traducirContactoKichwa();
    traducirFooterKichwa();
    idiomaActual = "qu";
    document.getElementById("btn-traducir").innerText = "Volver al Español";
  } else {
    restaurarEspañol();
    idiomaActual = "es";
    document.getElementById("btn-traducir").innerText = "Traducir al Kichwa";
    // Factores rurales
for (const id in textosOriginales.factores) {
  const el = document.getElementById(id);
  if (el) el.innerText = textosOriginales.factores[id];
  // Galería
const galeriaTitulo = document.getElementById("cultura_mental_titulo");
if (galeriaTitulo) galeriaTitulo.innerText = textosOriginales.galeria.cultura_mental_titulo;

}

  }
}


