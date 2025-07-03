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
    "sobre_nosotros_titulo": "Ñuqayku Mana",
    "alliy_titulo_2": "Alliy",
    "sobre_nosotros_parrafo1": "Alliy nisqaqa huk plataforma ruwasqa kaq, chaywanmi yanapaykuna sonqo yachaykunata chaymantayachachiy runakunaman chaykunaq kawsarqanku utaq kawsachkanku maqanakuy situacionkunapi. Ñuqayku enfoqueninchisqa kachkan yuyay alliypi, kikinchismanta qhawaypi chaymanta harkaypi.",
    "sobre_nosotros_parrafo2": "Ñuqayku munayninchisqa kanku huk espacio yanapay empático chaymanta seguro, maypichus willakuyniykita atikunki, willakunki señales de alerta, riqsikunki derechoniykikunata chaymantayaykukunki recursos útiles yuyayniyki allin kayninpaq."
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
    "factores_titulo": "Factores chakra ayllukunapi yuyay alliyta afectanku",
    "factores_intro": "Chakra ayllukunapi kawsaq runakunaqa sapanchasqa sasachakuykunatam tupanku, chaykunaqa sonqoallikayninku chaymanta yuyay allikayninku afectanman. Kay factorkunata riqsiyqa ancha allinmi kayzonakunapi allin kawsayta kallpanchanapaq.",
    "factor1_titulo": "Karu kaqmanta chaymanta social karu kay",
    "factor1_texto": "Llaqtakuna centrokunamanta karukayqa pisiyachinman yaykuyta servicios básicos kaqman, chaypimkachkan yuyay alliy. Kayqa sapalla kay chaymanta mana tinkiykusqa kayma sientimientos ruranman.",
    "factor2_titulo": "Mana llamkay chaymanta wakcha kay",
    "factor2_texto": "Mana llamkay oportunidades kasqan chaymanta qolqe mana seguridad kasqanqa sapa kutilla estresña ruranku, mana seguridad chaymanta pisi autoestima.",
    "factor3_titulo": "Pisi yaykuy alliy servicios kaqman",
    "factor3_texto": "Achka chakra ayllukunapi mana kanchu yuyay alliy centrokuna, nitaq profesionales disponiblekanku, chaymi harkachkan huk hampiy pachakama.",
    "factor4_titulo": "Estigmas culturales chaymanta mana yachay",
    "factor4_texto": "Achka kutilla yuyay alliy sasachakuykunaqa pisiyachisqa kanku, qhawasqa manachu chaymantamana allinta t'ikrasqa, chaymi harkachkan runakunata yanapakuy maskaqta."
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
    "alliybot_subtitulo": "Pipas uyarisunki",
    "ayuda_legal_titulo": "Yanapay legal",
    "ayuda_legal_texto": "Tapukuy tapuyniykikunataimata ruanapaq sichus víctima kanki violencia de género nisqamanta, intrafamiliar nisqamanta utaq mana seguro sientekunkichu wasiykipi.",
    "apoyo_emocional_titulo": "Sonqo yanapay",
    "apoyo_emocional_texto": "Wakinpis necesitaykullami pipaschá uyariwayta chaymanta pipawan atiqkullanchis libremente rimayta mana manchakuspaj uzgasqa kasqanchismanta.",
    "emergencia_titulo": "Emergencia",
    "emergencia_texto": "Sichus emergenciapitarikunkichu chaymantamana yacharankichu imataruayta utaq piman riy, tapukuy sasachakuyniykita chaymanta qokusunchis aswan allin ruwaykunata."
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
    { titulo: "Llakikuy", descripcion: "Síntomas: .Ukhun chaymanta sapa kuti llakikuy .Mana munay chinkay .Sayk'uy, pisi kallpa .Mikhuy utaq puñuy cambios .Mana valiyta yuyaykuna" },
    { titulo: "Llakikuy Trastorno Generalizada (TAG)", descripcion: "Síntomas: .Nishu chaymanta sapa kuti llakikuy .Mana tarikuy utaq aycha tensión .Phiñakuy .Sasachakuy yuyaymanay .Puñuy sasachakuykuna" },
    { titulo: "Manchakuy Trastorno", descripcion: "Síntomas: .Chaylla manchakuy sinchi miedo .Palpitaciones, hump'iy, k'akullay .Ahogo sientay .Wañuy utaq control chinkachiy manchakuy" },
    { titulo: "Obsesivo-Compulsivo Trastorno (TOC)", descripcion: "Síntomas: .Kutipakuq chaymanta yaykuq yuyaykuna (obsesiones) .Kutipakuq ruwaykuna llakikuy pisiyachinapaq (compulsiones) .Ejemplo: makikuna sapa kuti maqchiy, punkukuna achka kuti qhaway" },
    { titulo: "Traumático Qhipaman Estrés Trastorno (TEPT)", descripcion: "Síntomas: .Traumata yuyariykuna utaq pesadillas kaqwan kutimuy .Sitios utaq runakunata evento kaqwan tinkisqata evitay .Hipervigilancia, sapa kuti manchakuykuna .Huchayuq utaq karu kayninchis sentimientos" },
    { titulo: "Iskay Kaq Trastorno", descripcion: "Síntomas: .Manía episodios (kusi kay, nishu kallpa, impulsividad) .Llakikuy episodios (llakikuy, mana suyay, sayk'uy) .Chaylla ánimo estado cambios" },
    { titulo: "Esquizofrenia", descripcion: "Síntomas: .Alucinaciones (rikuy utaq uyariy imakuna mana kanchu) .Delirios (llulla iñiykuna) .Chaqrusqa yuyay .Social karu kay" },
    { titulo: "mite Personalidad Trastorno (TLP)", descripcion: "Síntomas: .Sinchi ánimo estado cambios .Saqiy manchakuy .Impulsivo ruwaykuna .Mana takyasqa rilaciónkuna .Ch'usaq sentimientos" },
    { titulo: "Mikhuy Trastornos (anorexia, bulimia)", descripcion: "Síntomas: .Nishu mikhuy hark'ay (anorexia) .Atracones episodios purgas qhipanpi (bulimia) .Sinchi llasaq yachay manchakuy .Chaqrusqa aycha imagen" },
    { titulo: "TDAH (Atención Déficit Hiperactividad Trastorno)", descripcion: "Síntomas: .Yuyaymanay utaq kachariykuna qatiy sasachakuy .Hiperactividad, impulsividad .Huk llamkaypi kankuy sasachakuykuna .Sapa kuti mana tarikuy" },
    { titulo: "Conducta Trastorno", descripcion: "Síntomas: .Runakunaman utaq uywakunaman awqanakuy .Ima kapaq p'akiy .Sapa kuti llulla, suway .Social utaq yachana wasi kamachiy p'akiy" },
    { titulo: "Demencia (Alzheimer kaqwan)", descripcion: "Síntomas: .Yuyay chinkay .Pacha chaymanta k'iti chinkay .Personalidad cambios .Sapa punchaw llamkaykunata ruay sasachakuy" }
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
  document.getElementById("consejos_titulo").innerText = "Yuyay Alliy Yuyaychay";
  document.getElementById("consejos_intro").innerText =
    "Sichus sientenkichu sasachakuy situación pasashkanki, kaypi qokuyku wakinyuyaychaykunata yanapasunkiman:";

  const titulos = [
    "Confianza kaqwan rimay",
    "Profesional yanapay maskay",
    "Kikinmanta qhaway ñawpaqman churay",
    "Suthi límites churay",
    "Yanapay llikakuna kaqwan tinkinakuy",
    "Yuyariy: mana qampa huchaykichu"
  ];

  const textos = [
    "- Imaynatachus sientekankita confianza kaqwan willay sonqo llasayta pisiyachin.<br>- Maskay pipaschá uyarinqa mana juzgaspa nitaq criticaspa chaymanta yuyayniykikunata respetanqa.",
    "- Ayllukunapi riksishka yachachikkunam kikillata yanapanakunkiman.",
    "- Aychayniykita alliy waqaychay, samay, allinta mikhuy.<br>- Tariy ruwaykuna yanapasunkiman yuyayniykita ch'uyanchanapaq imaynachus ñawiy, purik utaq takiyuyariy.",
    "- Yachay sasachakuy situacionkunawan tupay kawsaypi mana mana allin tanteaykuna ruanaypaq.<br>- Derechoyuq kanki libremente límites churaymannta.",
    "- Ayllu huñurikunapi yaykuy.<br>- Kikin kaqwan pasaq runakunawan rimayqa yanapanman alliyananpaq.",
    "- Mana qampa huchaykichu chaymanta derechoyuq kanki thak kaqpi chaymanta dignidad kaqwankawsaymannta."
  ];

  for (let i = 1; i <= 6; i++) {
    document.getElementById(`consejo${i}_titulo`).innerText = titulos[i - 1];
    document.getElementById(`consejo${i}_texto`).innerHTML = textos[i - 1];
  }
}

function traducirContactoKichwa() {
  const contactoTitulo = document.getElementById("contacto_titulo");
  if (contactoTitulo) contactoTitulo.innerText = "Ñuqaykuwan Rimanakuy";

  const contactoSubtitulo = document.getElementById("contacto_subtitulo");
  if (contactoSubtitulo) contactoSubtitulo.innerText = "Ñuqayku social llikakuna qatipaway";
}

function traducirFooterKichwa() {
  const footerTexto = document.getElementById("footer_derechos");
  if (footerTexto) footerTexto.innerText = "© 2025 Alliy. Tukuy derechokuna waqaychasqa";
}

let idiomaActual = "es";

const textosOriginales = {
  carrusel: {
    "inicio_titulo": "Salud Mental",
    "inicio_frase": "Cuidar tu mente es un acto de valentía, no de debilidad",
    "psicologia_titulo": "Psicología",
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

function restaurarEspañol() {
  // Carrusel
  for (const id in textosOriginales.carrusel) {
    const el = document.getElementById(id);
    if (el) el.innerText = textosOriginales.carrusel[id];
  }

  // Sobre Nosotros
  for (const id in textosOriginales.sobreNosotros) {
    const el = document.getElementById(id);
    if (el) el.innerText = textosOriginales.sobreNosotros[id];
  }

  // Contacto
  document.getElementById("contacto_titulo").innerText = textosOriginales.contacto.contacto_titulo;
  document.getElementById("contacto_subtitulo").innerText = textosOriginales.contacto.contacto_subtitulo;

  // Footer
  document.getElementById("footer_derechos").innerText = textosOriginales.footer.footer_derechos;

  // Consejos
  document.getElementById("consejos_titulo").innerText = textosOriginales.consejos.consejos_titulo;
  document.getElementById("consejos_intro").innerText = textosOriginales.consejos.consejos_intro;

  for (let i = 1; i <= 6; i++) {
    const titulo = document.getElementById(`consejo${i}_titulo`);
    const texto = document.getElementById(`consejo${i}_texto`);
    if (titulo) titulo.innerText = textosOriginales.consejos.titulos[i - 1];
    if (texto) texto.innerHTML = textosOriginales.consejos.textos[i - 1];
  }

  // Galería
  const galeriaTitulo = document.getElementById("cultura_mental_titulo");
  if (galeriaTitulo) galeriaTitulo.innerText = textosOriginales.galeria.cultura_mental_titulo;

  const textosGaleria = [
    { titulo: "Depresión", descripcion: "Síntomas:\n- Tristeza persistente\n- Pérdida de interés\n- Fatiga, falta de energía\n- Cambios en el apetito o sueño\n- Pensamientos negativos" },
    { titulo: "Ansiedad Generalizada (TAG)", descripcion: "Síntomas:\n- Preocupación excesiva\n- Dificultad para concentrarse\n- Irritabilidad\n- Tensión muscular\n- Problemas de sueño" },
    { titulo: "Trastorno de Pánico", descripcion: "Síntomas:\n- Ataques de pánico\n- Palpitaciones, sudoración\n- Dificultad para respirar\n- Miedo intenso a perder el control" },
    { titulo: "Trastorno Obsesivo-Compulsivo (TOC)", descripcion: "Síntomas:\n- Pensamientos obsesivos recurrentes\n- Comportamientos repetitivos para reducir la ansiedad\n- Ejemplo: lavarse las manos muchas veces" },
    { titulo: "Trastorno de Estrés Postraumático (TEPT)", descripcion: "Síntomas:\n- Recuerdos intrusivos\n- Evitación de lugares o personas\n- Hipervigilancia\n- Cambios en el estado de ánimo" },
    { titulo: "Trastorno Bipolar", descripcion: "Síntomas:\n- Episodios de manía (euforia, hiperactividad)\n- Episodios de depresión (tristeza, falta de energía)\n- Cambios bruscos de ánimo" },
    { titulo: "Esquizofrenia", descripcion: "Síntomas:\n- Alucinaciones\n- Delirios\n- Pensamiento desorganizado\n- Aislamiento social" },
    { titulo: "Trastorno Límite de la Personalidad (TLP)", descripcion: "Síntomas:\n- Cambios emocionales intensos\n- Conductas impulsivas\n- Relaciones inestables\n- Sentimientos de vacío" },
    { titulo: "Trastornos de la Alimentación (anorexia, bulimia)", descripcion: "Síntomas:\n- Restricción alimentaria extrema (anorexia)\n- Episodios de atracones y purgas (bulimia)\n- Distorsión de la imagen corporal" },
    { titulo: "TDAH (Trastorno por Déficit de Atención e Hiperactividad)", descripcion: "Síntomas:\n- Dificultad para mantener la atención\n- Hiperactividad, impulsividad\n- Problemas para organizar tareas" },
    { titulo: "Trastorno de Conducta", descripcion: "Síntomas:\n- Comportamientos agresivos\n- Rompimiento de normas sociales\n- Mentiras, robos\n- Problemas en la escuela o trabajo" },
    { titulo: "Demencia (incluyendo Alzheimer)", descripcion: "Síntomas:\n- Pérdida de memoria\n- Desorientación en el tiempo y espacio\n- Cambios en la personalidad\n- Dificultades para realizar tareas cotidianas" }
  ];

  const itemsGaleria = document.querySelectorAll("#gallery-container .gallery-img");
  itemsGaleria.forEach((img, i) => {
    if (textosGaleria[i]) {
      img.setAttribute("data-title", textosGaleria[i].titulo);
      img.setAttribute("data-description", textosGaleria[i].descripcion.replace(/\n/g, "<br>"));
    }
  });
}

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
  }
}
