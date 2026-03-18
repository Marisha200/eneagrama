/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Question {
  id: number;
  text: string;
  type: number; // 1-9
}

export interface EnneagramType {
  id: number;
  name: string;
  alias: string;
  coreFear: string;
  coreDesire: string;
  motivation: string;
  defenseMechanism: string;
  childhoodPattern: string;
  shadow: string;
  gifts: string;
  stressArrow: number;
  growthArrow: number;
  stressDescription: string;
  growthDescription: string;
  levels: {
    low: string;
    average: string;
    high: string;
  };
  reflectionQuestions: string[];
  guidance: string[];
}

export const questions: Question[] = [
  // Tipo 1
  { id: 1, text: "Sentís una presión interna constante por hacer las cosas 'bien' o de forma correcta.", type: 1 },
  { id: 2, text: "Te resulta difícil relajarte si sabés que hay tareas pendientes o desorden a tu alrededor.", type: 1 },
  { id: 3, text: "Sos muy crítico con vos mismo y con los errores de los demás.", type: 1 },
  { id: 4, text: "Tu sentido de la ética y la moral es el motor principal de tus decisiones.", type: 1 },
  { id: 5, text: "A menudo sentís resentimiento cuando otros no se esfuerzan tanto como vos.", type: 1 },
  
  // Tipo 2
  { id: 6, text: "Necesitás sentir que los demás te quieren y te valoran para estar bien.", type: 2 },
  { id: 7, text: "Te sale natural postergar tus propias necesidades para ayudar a alguien más.", type: 2 },
  { id: 8, text: "Sentís que tenés un radar para detectar qué le pasa o qué necesita el otro.", type: 2 },
  { id: 9, text: "Te duele profundamente si alguien rechaza tu ayuda o no reconoce tu entrega.", type: 2 },
  { id: 10, text: "A veces das mucho esperando, inconscientemente, recibir afecto a cambio.", type: 2 },

  // Tipo 3
  { id: 11, text: "Tu valor personal está muy ligado a tus logros y al éxito que alcanzás.", type: 3 },
  { id: 12, text: "Te importa mucho la imagen que proyectás y cómo te ven los demás.", type: 3 },
  { id: 13, text: "Sos capaz de adaptarte y cambiar tu 'máscara' según el entorno para encajar.", type: 3 },
  { id: 14, text: "Sentís que detenerte es perder el tiempo; siempre tenés que estar produciendo.", type: 3 },
  { id: 15, text: "A veces perdés el contacto con lo que sentís de verdad por estar enfocado en la meta.", type: 3 },

  // Tipo 4
  { id: 16, text: "Sentís que sos diferente a los demás, como si te faltara algo que el resto sí tiene.", type: 4 },
  { id: 17, text: "Te sentís cómodo habitando la melancolía o emociones intensas y profundas.", type: 4 },
  { id: 18, text: "Buscás constantemente un sentido de identidad único y auténtico.", type: 4 },
  { id: 19, text: "Te retirás hacia tu mundo interno cuando sentís que el afuera es vulgar o superficial.", type: 4 },
  { id: 20, text: "La belleza y la expresión estética son fundamentales para tu bienestar.", type: 4 },

  // Tipo 5
  { id: 21, text: "Necesitás entender cómo funciona el mundo antes de participar en él.", type: 5 },
  { id: 22, text: "Valorás mucho tu privacidad y sentís que la interacción social te agota la energía.", type: 5 },
  { id: 23, text: "Preferís observar desde afuera antes que involucrarte emocionalmente.", type: 5 },
  { id: 24, text: "Sentís que tenés recursos limitados (tiempo, energía) y tenés que cuidarlos mucho.", type: 5 },
  { id: 25, text: "Te refugiás en el conocimiento y la especialización para sentirte seguro.", type: 5 },

  // Tipo 6
  { id: 26, text: "Tu mente suele anticipar posibles peligros o problemas antes de que ocurran.", type: 6 },
  { id: 27, text: "La lealtad hacia tus grupos, amigos o creencias es un valor innegociable.", type: 6 },
  { id: 28, text: "Dudás mucho antes de tomar una decisión y solés buscar la opinión de figuras de autoridad.", type: 6 },
  { id: 29, text: "Sentís una ansiedad de fondo que te empuja a buscar seguridad y certezas.", type: 6 },
  { id: 30, text: "Sos muy escéptico y solés cuestionar las intenciones ocultas de los demás.", type: 6 },

  // Tipo 7
  { id: 31, text: "Buscás constantemente nuevas experiencias para evitar sentir aburrimiento o dolor.", type: 7 },
  { id: 32, text: "Te cuesta terminar lo que empezás porque siempre aparece algo más estimulante.", type: 7 },
  { id: 33, text: "Sos optimista por naturaleza y tratás de verle el lado positivo a todo.", type: 7 },
  { id: 34, text: "Sentís que la libertad es tu valor más preciado; odiás sentirte atrapado.", type: 7 },
  { id: 35, text: "Tu mente salta de una idea a otra con mucha rapidez, planificando futuros placenteros.", type: 7 },

  // Tipo 8
  { id: 36, text: "Sentís la necesidad de tener el control de tu entorno para que nadie te domine.", type: 8 },
  { id: 37, text: "No tenés miedo al conflicto; de hecho, a veces lo buscás para medir la fuerza del otro.", type: 8 },
  { id: 38, text: "Valorás la honestidad directa y detestás la debilidad o la manipulación sutil.", type: 8 },
  { id: 39, text: "Sos muy protector con las personas que considerás vulnerables o de tu 'bando'.", type: 8 },
  { id: 40, text: "Tenés una energía vital muy fuerte y te cuesta contener tus impulsos.", type: 8 },

  // Tipo 9
  { id: 41, text: "Evitás el conflicto a toda costa, incluso si eso significa postergar tus deseos.", type: 9 },
  { id: 42, text: "Te resulta fácil ver los distintos puntos de vista de una discusión.", type: 9 },
  { id: 43, text: "A veces sentís que te 'anestesiás' con distracciones para no enfrentar problemas.", type: 9 },
  { id: 44, text: "Tu prioridad es mantener la paz interna y la armonía en tus relaciones.", type: 9 },
  { id: 45, text: "Te cuesta decir que 'no' y terminás haciendo cosas que no querés por inercia.", type: 9 },
];

export const typesData: Record<number, EnneagramType> = {
  1: {
    id: 1,
    name: "El Reformador",
    alias: "El Perfeccionista",
    coreFear: "Ser malo, corrupto, perverso o defectuoso.",
    coreDesire: "Ser bueno, tener integridad, ser equilibrado.",
    motivation: "Tener razón, esforzarse por mejorar todo, ser coherente con sus ideales.",
    defenseMechanism: "Formación reactiva (convertir el enojo en rectitud o amabilidad forzada).",
    childhoodPattern: "Sintieron que debían ser 'niños buenos' para ser aceptados; desconexión con la figura protectora.",
    shadow: "La ira reprimida que se manifiesta como crítica constante y resentimiento.",
    gifts: "Integridad, sabiduría, discernimiento y una gran capacidad de mejora social.",
    stressArrow: 4,
    growthArrow: 7,
    stressDescription: "Bajo estrés, el Uno se vuelve melancólico, se siente incomprendido y se retira hacia la autocompasión (como un Cuatro desintegrado).",
    growthDescription: "Al crecer, el Uno se vuelve más espontáneo, alegre y aprende a disfrutar del presente sin juzgarlo (como un Siete integrado).",
    levels: {
      low: "Crítico, dogmático, intolerante y obsesivo con la perfección ajena.",
      average: "Serio, trabajador, preocupado por el orden y la eficiencia.",
      high: "Sabio, aceptante, ético y profundamente humano."
    },
    reflectionQuestions: [
      "¿Qué pasaría si hoy aceptaras que las cosas son 'suficientemente buenas'?",
      "¿De dónde viene esa voz interna que te juzga tan fuerte?",
      "¿Podés permitirte cometer un error sin castigarte?"
    ],
    guidance: [
      "Practicá la autocompasión: tratate como tratarías a un buen amigo.",
      "Aprendé a distinguir entre lo que es 'importante' y lo que es 'perfecto'.",
      "Conectá con tu cuerpo y tus necesidades físicas antes que con el deber."
    ]
  },
  2: {
    id: 2,
    name: "El Ayudador",
    alias: "El Altruista",
    coreFear: "Ser indigno de amor o no ser deseado.",
    coreDesire: "Sentirse amado y necesitado.",
    motivation: "Expresar sus sentimientos hacia los demás, ser necesitado y apreciado.",
    defenseMechanism: "Represión (negar sus propias necesidades para enfocarse en las del otro).",
    childhoodPattern: "Sintieron que para ser amados debían ser útiles y complacientes.",
    shadow: "El orgullo de creer que los demás no pueden vivir sin su ayuda.",
    gifts: "Empatía, generosidad, calidez y una gran capacidad de nutrir relaciones.",
    stressArrow: 8,
    growthArrow: 4,
    stressDescription: "Bajo estrés, el Dos se vuelve agresivo, demandante y controlador (como un Ocho desintegrado).",
    growthDescription: "Al crecer, el Dos se vuelve más consciente de sus propias necesidades y desarrolla una identidad auténtica (como un Cuatro integrado).",
    levels: {
      low: "Manipulador, posesivo y victimista si no recibe el agradecimiento esperado.",
      average: "Complaciente, busca aprobación y descuida su propio bienestar.",
      high: "Altruista desinteresado, humilde y profundamente amoroso."
    },
    reflectionQuestions: [
      "¿Qué necesitás vos hoy, más allá de lo que necesiten los demás?",
      "¿Podés aceptar amor sin haber hecho nada para 'merecerlo'?",
      "¿Cómo te sentís cuando estás solo y nadie te necesita?"
    ],
    guidance: [
      "Aprendé a decir 'no' sin sentir culpa.",
      "Dedicá tiempo exclusivo a tus propios hobbies y deseos.",
      "Observá cuándo estás dando para 'comprar' afecto."
    ]
  },
  3: {
    id: 3,
    name: "El Triunfador",
    alias: "El Ejecutor",
    coreFear: "Ser despreciable o no tener valor por sí mismo.",
    coreDesire: "Sentirse valioso, exitoso y admirado.",
    motivation: "Ser afianzado, distinguirse de los demás, tener éxito y atención.",
    defenseMechanism: "Identificación (convertirse en el rol que el entorno premia).",
    childhoodPattern: "Sintieron que eran valorados por lo que hacían, no por lo que eran.",
    shadow: "La vanidad y el autoengaño; creerse la imagen que proyectan.",
    gifts: "Eficiencia, optimismo, capacidad de liderazgo y motivación.",
    stressArrow: 9,
    growthArrow: 6,
    stressDescription: "Bajo estrés, el Tres se vuelve apático, se rinde y se desconecta de sus metas (como un Nueve desintegrado).",
    growthDescription: "Al crecer, el Tres desarrolla lealtad, compromiso con el grupo y honestidad emocional (como un Seis integrado).",
    levels: {
      low: "Competitivo al extremo, engañoso y obsesionado con el estatus.",
      average: "Pragmático, enfocado en la imagen y el rendimiento constante.",
      high: "Auténtico, inspirador, modesto y conectado con su verdad interna."
    },
    reflectionQuestions: [
      "¿Quién sos cuando no estás logrando nada?",
      "¿Qué parte de vos estás ocultando para que los demás te admiren?",
      "¿Podés permitirte ser vulnerable frente a alguien hoy?"
    ],
    guidance: [
      "Practicá la honestidad: empezá por admitir tus fallas ante vos mismo.",
      "Tomate descansos reales donde no haya ninguna meta que cumplir.",
      "Valorá el proceso tanto como el resultado final."
    ]
  },
  4: {
    id: 4,
    name: "El Individualista",
    alias: "El Romántico",
    coreFear: "No tener identidad o importancia personal.",
    coreDesire: "Descubrirse a sí mismo y su importancia (ser auténtico).",
    motivation: "Expresarse, rodearse de belleza, mantener ciertos sentimientos y estados de ánimo.",
    defenseMechanism: "Introyección (incorporar el dolor o la carencia como parte de la identidad).",
    childhoodPattern: "Sintieron una pérdida o abandono temprano; sensación de ser 'diferentes'.",
    shadow: "La envidia; la sensación de que a los demás les resulta más fácil vivir.",
    gifts: "Creatividad, profundidad emocional, intuición y autenticidad.",
    stressArrow: 2,
    growthArrow: 1,
    stressDescription: "Bajo estrés, el Cuatro se vuelve dependiente, busca atención de forma desesperada y se vuelve complaciente (como un Dos desintegrado).",
    growthDescription: "Al crecer, el Cuatro desarrolla disciplina, estructura y se conecta con la realidad objetiva (como un Uno integrado).",
    levels: {
      low: "Depresivo, autocomplaciente en el dolor y alienado de la realidad.",
      average: "Melancólico, soñador, hipersensible y enfocado en lo que falta.",
      high: "Creativo, ecuánime, capaz de transformar el dolor en belleza universal."
    },
    reflectionQuestions: [
      "¿Qué pasaría si aceptaras que sos tan 'común' como el resto?",
      "¿Cuánto de tu identidad depende de sentirte triste?",
      "¿Podés ver la belleza en lo cotidiano y simple?"
    ],
    guidance: [
      "Establecé rutinas diarias para anclarte en la realidad física.",
      "Evitá rumiar sentimientos negativos; buscá la acción constructiva.",
      "Reconocé que tus sentimientos no son hechos objetivos."
    ]
  },
  5: {
    id: 5,
    name: "El Investigador",
    alias: "El Observador",
    coreFear: "Ser inútil, incapaz o incompetente.",
    coreDesire: "Ser capaz y competente.",
    motivation: "Poseer conocimientos, comprender el entorno, proteger sus recursos.",
    defenseMechanism: "Aislamiento (separar los pensamientos de las emociones).",
    childhoodPattern: "Sintieron que el mundo era invasivo o abrumador; se refugiaron en su mente.",
    shadow: "La avaricia de tiempo, energía y conocimientos.",
    gifts: "Objetividad, profundidad intelectual, independencia y visión innovadora.",
    stressArrow: 7,
    growthArrow: 8,
    stressDescription: "Bajo estrés, el Cinco se vuelve disperso, hiperactivo y busca distracciones superficiales (como un Siete desintegrado).",
    growthDescription: "Al crecer, el Cinco se vuelve más seguro, asertivo y se involucra físicamente con el mundo (como un Ocho integrado).",
    levels: {
      low: "Cínico, aislado, paranoico y desconectado de la realidad.",
      average: "Intelectual, distante, ahorrativo de su energía y reservado.",
      high: "Visionario, perceptivo, generoso con su saber y profundamente conectado."
    },
    reflectionQuestions: [
      "¿Qué sentís en tu cuerpo en este preciso momento?",
      "¿Podés confiar en que tenés energía suficiente para el día de hoy?",
      "¿Qué pasaría si compartieras lo que sabés sin miedo a quedarte vacío?"
    ],
    guidance: [
      "Hacé actividad física para bajar de la mente al cuerpo.",
      "Compartí tus sentimientos con personas de confianza, no solo tus ideas.",
      "Participá activamente en grupos sin sentir que te van a 'invadir'."
    ]
  },
  6: {
    id: 6,
    name: "El Leal",
    alias: "El Escéptico",
    coreFear: "Quedarse sin apoyo o guía.",
    coreDesire: "Tener seguridad y apoyo.",
    motivation: "Tener seguridad, sentirse apoyado por los demás, tener certidumbre.",
    defenseMechanism: "Proyección (atribuir sus propios miedos o impulsos a los demás).",
    childhoodPattern: "Relación ambivalente con la figura de autoridad; necesidad de protección.",
    shadow: "La ansiedad y la duda constante; el miedo al miedo.",
    gifts: "Lealtad, coraje, responsabilidad y gran capacidad de trabajo en equipo.",
    stressArrow: 3,
    growthArrow: 9,
    stressDescription: "Bajo estrés, el Seis se vuelve competitivo, arrogante y se enfoca solo en el rendimiento (como un Tres desintegrado).",
    growthDescription: "Al crecer, el Seis desarrolla paz interna, confianza en la vida y se relaja (como un Nueve integrado).",
    levels: {
      low: "Paranoico, autoritario o sumiso al extremo, y muy ansioso.",
      average: "Preocupado, cauteloso, busca reglas y es muy trabajador.",
      high: "Valiente, confiado en sí mismo, estable y gran apoyo para los demás."
    },
    reflectionQuestions: [
      "¿Qué es lo peor que podría pasar y qué harías si ocurriera?",
      "¿Podés confiar en tu propia guía interna hoy?",
      "¿Cuánto de tu ansiedad es real y cuánto es una construcción mental?"
    ],
    guidance: [
      "Practicá la meditación para calmar el flujo de pensamientos ansiosos.",
      "Tomá decisiones pequeñas sin consultar a nadie más.",
      "Reconocé que la seguridad absoluta no existe, y eso está bien."
    ]
  },
  7: {
    id: 7,
    name: "El Entusiasta",
    alias: "El Epicúreo",
    coreFear: "Ser despojado de todo o sufrir dolor.",
    coreDesire: "Estar satisfecho y contento.",
    motivation: "Mantener su libertad y felicidad, evitar el dolor, tener experiencias.",
    defenseMechanism: "Racionalización (darle un giro positivo a las experiencias dolorosas).",
    childhoodPattern: "Sintieron que debían buscar su propia gratificación; desconexión con la figura nutricia.",
    shadow: "La gula; el hambre insaciable de estímulos y opciones.",
    gifts: "Entusiasmo, versatilidad, alegría y rapidez mental.",
    stressArrow: 1,
    growthArrow: 5,
    stressDescription: "Bajo estrés, el Siete se vuelve crítico, perfeccionista y amargado (como un Uno desintegrado).",
    growthDescription: "Al crecer, el Siete desarrolla profundidad, enfoque y aprende a estar en silencio (como un Cinco integrado).",
    levels: {
      low: "Impulsivo, maníaco, escapista y superficial.",
      average: "Distraído, buscador de placer, evita compromisos profundos.",
      high: "Agradecido, enfocado, alegre y profundamente presente."
    },
    reflectionQuestions: [
      "¿Qué pasaría si te quedaras quieto con lo que sentís ahora mismo?",
      "¿De qué estás escapando con tanto plan y actividad?",
      "¿Podés encontrar satisfacción en lo que ya tenés?"
    ],
    guidance: [
      "Practicá el silencio y la soledad sin distracciones.",
      "Comprometete con un proyecto de principio a fin.",
      "Aprendé a valorar la calidad de las experiencias sobre la cantidad."
    ]
  },
  8: {
    id: 8,
    name: "El Desafiador",
    alias: "El Líder",
    coreFear: "Ser dañado o controlado por otros.",
    coreDesire: "Protegerse, decidir su propio camino.",
    motivation: "Ser independiente, ser fuerte, tener el control de su vida.",
    defenseMechanism: "Negación (negar su propia vulnerabilidad y ternura).",
    childhoodPattern: "Sintieron que debían crecer rápido y ser fuertes para sobrevivir.",
    shadow: "La lujuria; la necesidad de intensidad y exceso en todo.",
    gifts: "Fuerza, protección, liderazgo natural y honestidad radical.",
    stressArrow: 5,
    growthArrow: 2,
    stressDescription: "Bajo estrés, el Ocho se vuelve retraído, frío y se aísla para pensar (como un Cinco desintegrado).",
    growthDescription: "Al crecer, el Ocho se vuelve tierno, protector y se conecta con su corazón (como un Dos integrado).",
    levels: {
      low: "Dictatorial, violento, vengativo y despiadado.",
      average: "Dominante, confrontativo, protector de los suyos y muy enérgico.",
      high: "Magnánimo, heroico, usa su fuerza para el bien y es vulnerable."
    },
    reflectionQuestions: [
      "¿A quién le permitís ver tu lado más tierno y vulnerable?",
      "¿Qué pasaría si soltaras el control por un momento?",
      "¿Podés ser fuerte sin necesidad de ser duro?"
    ],
    guidance: [
      "Aprendé a escuchar antes de reaccionar con fuerza.",
      "Reconocé que la vulnerabilidad es una forma de valentía.",
      "Bajá el ritmo y permití que otros también tomen la iniciativa."
    ]
  },
  9: {
    id: 9,
    name: "El Pacificador",
    alias: "El Mediador",
    coreFear: "La pérdida y la separación.",
    coreDesire: "Tener estabilidad interna y paz mental.",
    motivation: "Evitar conflictos, mantener la unión, estar en armonía.",
    defenseMechanism: "Narcotización (usar distracciones para no sentir sus propios deseos o enojo).",
    childhoodPattern: "Sintieron que sus deseos no importaban; se adaptaron para no molestar.",
    shadow: "La pereza de sí mismo; el olvido de sus propias prioridades.",
    gifts: "Paz, aceptación, mediación y una presencia sanadora.",
    stressArrow: 6,
    growthArrow: 3,
    stressDescription: "Bajo estrés, el Nueve se vuelve ansioso, dubitativo y preocupado (como un Seis desintegrado).",
    growthDescription: "Al crecer, el Nueve se vuelve activo, enfocado y desarrolla su propio valor (como un Tres integrado).",
    levels: {
      low: "Apático, negligente, desconectado y testarudo pasivo.",
      average: "Complaciente, evita problemas, se distrae y posterga.",
      high: "Vital, presente, pacificador activo y muy consciente de sí mismo."
    },
    reflectionQuestions: [
      "¿Qué es lo que vos querés de verdad en esta situación?",
      "¿A qué le tenés miedo si expresás tu enojo?",
      "¿Podés darte cuenta de que tu presencia es importante?"
    ],
    guidance: [
      "Hacé una lista de tus prioridades y cumplilas primero.",
      "Expresá tu opinión aunque sepas que puede haber desacuerdo.",
      "Mantené tu cuerpo activo para evitar la inercia mental."
    ]
  }
};
