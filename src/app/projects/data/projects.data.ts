import { Project } from '../interfaces/project.interface';

export const PROJECTS: Project[] = [

  {

    id: 0,
    name: 'Nueva imagen',
    company:'Getronics',
    customer: 'BBVA Bancomer',
    year: '2012 - 2014',
    channel: 'Autoservicio',
    shortDescription: 'Diseño del cambio de imagen de los ATM’s de BBVA, diseñando componentes más simples y copies más claros.',
    description: [
      'En este momento, BBVA Bancomer llevaba a cabo la transformación de la imagen y la experiencia en todos sus canales, tanto físicos como digitales.',
      'En este proyecto tuve la oportunidad de participar en el diseño del cambio de imagen de los ATM’s de BBVA, diseñando componentes más simples y copies más claros.',
      'Como conclusión del proyecto, a lo largo de 3 años, logramos diseñar una interfaz única en el mercado de autoservicio mexicano, que otorga una experiencia más amigable y completa en los ATM’s.',
     ],
    coverImage: './assets/img-nueva-imagen.jpg',
    device: 'Cajero',
    tools: [ 'Adobe flash (Animate)'],
    problems: [
      'Los usuarios pasaban mucho tiempo en el cajero y había filas muy largas.',
      'Los cajeros no eran intuitivos y ni nada amigables, esto probocaba que los usuarios tuvieran miedo de usarlos.',
    ],
    targets: [
      'Clientes con nómina BBVA Bancomer'
    ],
    solutions: [
    {
      title: 'Antes',
      images: ['./assets/img-atm01-s01-01.jpg','./assets/img-atm01-s01-02.jpg','./assets/img-atm01-s01-03.jpg','./assets/img-atm01-s01-04.jpg'],
      },
    {
      title: 'Primer cambio de imagen - 2012 - 2013',
      description: 'En esta fase del proyecto reemplazamos los fondos azules por fondos blancos para agregarle sentido de simplicidad, además de cambiar los iconos, la paleta de colores y textos.',
      images: ['./assets/img-atm01-s02-01.jpg','./assets/img-atm01-s02-02.jpg','./assets/img-atm01-s02-03.jpg','./assets/img-atm01-s02-04.jpg'],
      },
    {
      title: 'Segundo cambio de imagen - 2014',
      description: 'En esta segunda fase del proyecto reacomodamos la estructura de los elementos, haciendo un esfuerzo porque la pantalla se vea más limpia aún, además de integrar mejoras de usabilidad en cada flujo.',
      images: ['./assets/img-atm01-s03-01.jpg','./assets/img-atm01-s03-02.jpg','./assets/img-atm01-s03-03.jpg','./assets/img-atm01-s03-04.jpg'],
    }
    ]
  },{
    id: 1,
    name: 'Comprobante digital',
    company:'Getronics',
    customer: 'BBVA Bancomer',
    year: '2013',
    channel: 'Autoservicio',
    shortDescription: 'Diseño del funcionamiento y experiencia para el envío de comprobantes digitales y contratación de notificaciones por correo y SMS.',
    description: [
      'BBVA Bancomer es una empresa responsable con el medio ambiente y en ese momento el área de cajeros generaba mucha basura, por los comprobantes que tenían que imprimir los ATM’s y Practicajas; por lo tanto se necesitaba una solución para enviar comprobantes de manera digital.',
      'En este proyecto tuve la oportunidad de participar en el diseño del flujo de activación de notificaciones por correo y SMS.',
      'Como conclusión del proyecto logramos diseñar una experiencia única en el mercado de autoservicio mexicano, para incentivar a los clientes a cambiar sus comprobantes impresos, por comprobantes digitales.',
     ],
    coverImage: './assets/img-eliminar-comprobante.jpg',
    device: 'Cajero',
    tools: [ 'Adobe flash (Animate)'],
    problems: [
      'Los usuarios tiraban sus comprobantes en el suelo de la sucursal.',
      'Muchos usuarios no habían contratado Alertas Bancomer y/o notificaciones por correo electrónico.',
      'Se necesitaba generar conciencia en los clientes para que prefirieran comprobantes digitales.',
    ],
    targets: [
      'Clientes sin Alertas Bancomer (SMS)',
      'Clientes sin notificaciones por correo activas',
    ],
    solutions: [
    {
      title: 'Solución final',
      description: 'En este proyecto tuvimos que detectar todos los posibles casos en los que un cliente se podría encontrar, ya que si no contaba con Alertas Bancomer, se tenía que ofertar la contratación y lo mismo si no contaba con notificaciones por correo. Sin mencionar que este proyecto aplicaba para todos los flujos que tenía el cajero en ese momento.',
      images: ['./assets/img-atm02-s01-01.jpg','./assets/img-atm02-s01-02.jpg','./assets/img-atm02-s01-03.jpg','./assets/img-atm02-s01-04.jpg','./assets/img-atm02-s01-05.jpg','./assets/img-atm02-s01-06.jpg','./assets/img-atm02-s01-07.jpg','./assets/img-atm02-s01-08.jpg'],
    }
    ]
  },{
    id: 2,
    name: 'Diseño del sistema de turnos (Podio) ',
    company:'Getronics',
    customer: 'BBVA Bancomer',
    year: '2013',
    channel: 'Autoservicio',
    shortDescription: 'BBVA Bancomer necesitaba un Podio para otorgar turnos en sus nuevas sucursales, donde se pudiera diferenciar a los clientes y se pudiera elegir la operación que fueran a realizar.',
    description: [
      'BBVA Bancomer necesitaba un Podio para otorgar turnos en sus nuevas sucursales, donde se pudiera diferenciar a los clientes y se pudiera elegir la operación que fueran a realizar.',
      'En este proyecto tuve la oportunidad de participar en el diseño del nuevo Podio que se ocuparía en las nuevas sucursales de BBVA Bancomer.',
      'Como conclusión del proyecto logramos diseñar una experiencia única en el mercado financiero mexicano, para que los clientes pudieran tomar un turno deslizando su tarjeta de cualquier producto de BBVA.',
     ],
    coverImage: './assets/img-podio.jpg',
    device: 'Podio',
    tools: [ 'Adobe flash (Animate)'],
    problems: [
      'Se necesitaba identificar las diferentes operaciones que se pueden realizar en sucursal.',
      'Se necesitaba identificar los diferentes tipos de clientes y los clientes de BBVA Bancomer.',
      'Se necesitaba diseñar sobre un formato vertical y tamaño de pantalla nuevo, que no se tenía platillas y componentes.',
    ],
    targets: [
      'Clientes que asisten a sucursal',
      'No clientes que asisten a sucursales de BBVA Bancomer',
    ],
    solutions: [
    {
      title: 'Solución final',
      description: 'En este proyecto tuvimos que diseñar una nueva estructura de información, adaptándolo al formato vertical y generar nuevos componentes y animaciones.',
      images: ['./assets/img-podio-s01-01.jpg','./assets/img-podio-s01-02.jpg','./assets/img-podio-s01-03.jpg','./assets/img-podio-s01-04.jpg'],
    }
    ]
  },{
    id: 3,
    name: 'Depósito de cheques',
    company:'Getronics',
    customer: 'BBVA Bancomer',
    year: '2014',
    channel: 'Autoservicio',
    shortDescription: 'Esta funcionalidad es poco conocida, pero desde el 2014, en las Practicajas de BBVA Bancomer, se pueden hacer depósitos con cheques.',
    description: [
      'BBVA Bancomer necesitaba un canal de autoservicio, donde los clientes pudiera cobrar sus cheques, depositando a su cuenta.',
      'En este proyecto tuve la oportunidad de participar en el diseño de una nueva funcionalidad en Practicajas, que es poco conocida, pero desde el 2014, se pueden hacer depósitos con cheques.',
      'Como conclusión del proyecto logramos diseñar una experiencia única en el mercado financiero mexicano, para que los clientes pudieran cobrar sus cheques en el área de autoservicio de BBVA Bancomer, en cualquier horario, los 365 días del año.',
     ],
    coverImage: './assets/img-cheques.jpg',
    device: 'Practicaja',
    tools: [ 'Adobe flash (Animate)'],
    problems: [
      'Se necesitaba ampliar el horario de servicio para la atención del cobro de cheques.',
      'Se necesitaba diseñar un flujo simple y sencillo de pocos pasos, para el cobro de cheques en el área de autoservicio.',
    ],
    targets: [
      'Clientes que reciben cheques de BBVA Bancomer',
    ],
    solutions: [
    {
      title: 'Solución final',
      description: 'En este proyecto diseñamos una nueva experiencia simple y sencilla, que en solo 3 pasos un cliente podría cobrar uno o hasta 20 cheques.',
      images: ['./assets/img-cheques-s01-01.jpg','./assets/img-cheques-s01-02.jpg','./assets/img-cheques-s01-03.jpg','./assets/img-cheques-s01-04.jpg'],
    }
    ]
  },{
    id: 4,
    name: 'Oneclic',
    company:'Getronics',
    customer: 'BBVA Bancomer',
    year: '2015',
    channel: 'Multicanal',
    shortDescription: 'Diseño de flujos de contratación para productos como consumo preaprobado, seguros e incrementos de línea de crédito; para todos los canales de BBVA Bancomer.',
    description: [
      'BBVA Bancomer necesitaba ofrecer sus productos, donde los clientes pudieran contratarlos de una forma fácil y sencilla, casi que con un solo clic.',
      'En este proyecto tuve la oportunidad de participar en el diseño de flujos de contratación de productos como consumo preaprobado, seguros e incrementos de línea.',
      'Como conclusión del proyecto logramos diseñar una experiencia para el mercado financiero mexicano, en la que los clientes podían contratar productos oneclic, de forma rápida, sencilla y en cualquier canal de BBVA Bancomer.',
     ],
    coverImage: './assets/img-one-clic.png',
    device: 'Autoservicio, Móvil, Web',
    tools: [ 'Adobe flash (Animate)', 'Illustrator'],
    problems: [
      'Se necesitaba diseñar flujos de contratación de productos para todos los canales de BBVA Bancomer.',
      'Además de los flujos, se necesitaba crear una nueva sección en el menú de todos los canales para ofertarlos.',
      'El reto es que el número de productos y los productos ofertados tenían que ser diferentes para cada cliente.',
    ],
    targets: [
      'Clientes con nómina en BBVA Bancomer',
    ],
    solutions: [
    {
      title: 'Solución final ATM',
      description: 'Para este canal diseñamos un menú dinámico, donde apareciera el botón de la oferta si el cliente tenía una sola oferta. Pero si el cliente tenía más de una oferta, el botón cambiara y llevara a otra pantalla con un carrusel de ofertas. Además de presentar la oferta después de cada retiro.',
      images: ['./assets/img-oneclic-s01-01.jpg','./assets/img-oneclic-s01-02.jpg','./assets/img-oneclic-s01-03.jpg','./assets/img-oneclic-s01-04.jpg'],
      },
    {
      title: 'Solución final Móvil',
      description: 'Para este canal diseñamos un carrusel de botones dinámicos, directamente en el menú. De tal forma que pudieran aparecer uno o mas botones, según la cantidad de ofertas que tuviera cada cliente. Además de presentar otra oferta al final de cada contratación.',
      images: ['./assets/img-oneclic-s02-01.png','./assets/img-oneclic-s02-02.png','./assets/img-oneclic-s02-03.png','./assets/img-oneclic-s02-04.png'],
      },
    {
      title: 'Solución final Web',
      description: 'Para este canal diseñamos un menú dinámico, donde apareciera el botón de la oferta si el cliente tenía una sola oferta. Pero si el cliente tenía más de una oferta, el botón cambiara y llevara a otra pantalla con un carrusel de ofertas. Además de presentar la oferta después de cada retiro.',
      images: ['./assets/img-oneclic-s03-01.jpg','./assets/img-oneclic-s03-02.jpg','./assets/img-oneclic-s03-03.jpg','./assets/img-oneclic-s03-04.jpg'],
    }
    ]
  },{
    id: 5,
    name: 'Sistema GUIA',
    company:'Getronics',
    customer: 'BBVA Bancomer',
    year: '2015',
    channel: 'Web',
    shortDescription: 'Diseño del sistema completo del inventario, venta y adquisición de inmuebles por parte de BBVA Bancomer.',
    description: [
      'BBVA Bancomer necesitaba rediseñar el sistema de gestión de inmuebles, donde la organización puede llevar el registro de adquisición y venta de los mismos.',
      'En este proyecto tuve la oportunidad de participar en el diseño del sistema GUIA que constaba de mucha información y muchas tablas.',
      'Como conclusión del proyecto logramos diseñar una experiencia bastante mejorada de la versión anterior, muy limpia y muy elegante. En esta versión era más legible la información.',
     ],
    coverImage: './assets/img-guia.jpg',
    device: 'Web',
    tools: [ 'Illustrator'],
    problems: [
      'Se necesitaba diseñar flujos de todo el sistema.',
      'Además de hacer mejoras de usabilidad para facilitar la operación.',
      'Era necesario organizar el contenido para mejorar la legibilidad.',
    ],
    targets: [
      'Consultor de BBVA Bancomer',
      'Encargado de ventas de BBVA Bancomer',
      'Administrador de inventarios de BBVA Bancomer',
    ],
    solutions: [
    {
      title: 'Antes',
      images: ['./assets/img-guia-s01-01.jpg','./assets/img-guia-s01-02.jpg','./assets/img-guia-s01-03.jpg','./assets/img-guia-s01-04.jpg'],
      },
    {
      title: 'Solución final',
      images: ['./assets/img-guia-s02-01.jpg','./assets/img-guia-s02-02.jpg','./assets/img-guia-s02-03.jpg','./assets/img-guia-s02-04.jpg'],
    }
    ]
  },{
    id: 6,
    name: 'Rediseño App Línea Bancomer',
    company:'Getronics',
    customer: 'BBVA Bancomer',
    year: '2016',
    channel: 'Móvil',
    shortDescription: 'Rediseño de la app Línea Bancomer, agregando funcionalidades innovadoras para ayudar a los clientes: GPS de Cajeros y sucursales con medidor de afluencia, Recuperación de NIP. ',
    description: [
      'BBVA Bancomer necesitaba una app que ayudara a los clientes a acceder, más rápido y fácil, a la opción de atención a clientes Línea Bancomer.',
      'En este proyecto tuve la oportunidad de participar en el diseño de la experiencia de la app Línea Bancomer, para dar a conocer el número de atención a clientes y las redes sociales oficiales de BBVA Bancomer.',
      'Como conclusión del proyecto logramos diseñar una aplicación que lograba ayudar a los clientes a resolver ciertas dudas que tenía con sus productos de manera autoservicio y 100% digital.',
     'Logramos un producto, que sin llamar a la Línea Bancomer, el cliente pudiera consultar el NIP de sus tarjetas, bloquearlas por perdida o robo, tramitar su reposición y hasta levantar una aclaración de cargos no reconocidos.',
    ],
    coverImage: './assets/img-linea-bancomer.jpg',
    device: 'Móvil',
    tools: [ 'Illustrator'],
    problems: [
      'Los clientes esperan de 20 a 40 minutos antes de poder ser atendidos, entre que encuentran la opción en el menú, se autentican y esperan la disponibilidad de un asesor.',
      'Línea Bancomer recibe muchas llamadas diarias.',
    ],
    targets: [
      'Clientes de BBVA Bancomer que llaman regularmente a Línea Bancomer',
    ],
    solutions: [
    {
      title: 'Antes',
      description: 'Con el auge de las aplicaciones, BBVA Bancomer lanzó una app para que los clientes puedan tener el número oficial de su centro de atención a clientes y entrar a la llama identificados y autenticados. La idea era que pudieran entrar directamente al menú y no escucharlo en la llamada.',
      images: ['./assets/img-linea-s01-01.png','./assets/img-linea-s01-02.png'],
      },
    {
      title: 'Primer rediseño 2015',
      description: 'En esta primera etapa, rediseñamos la app y agregamos una funcionalidad para ayudar a los clientes a localizar cajeros y sucursales cercanas; indicando su ubicación, horarios de atención, como llegar y si tiene mucha afluencia.',
      images: ['./assets/img-linea-s02-01.png','./assets/img-linea-s02-02.png','./assets/img-linea-s02-03.png','./assets/img-linea-s02-04.png'],
      },
    {
      title: 'Segundo rediseño 2015 - 2016',
      description: 'En este proyecto hicimos múltiples iteraciones y con el tiempo fuimos agregando funcionalidades cada vez más innovadoras y la app línea Bancomer se fue convirtiendo en una app de ayuda para los clientes, aligerando la carga del call center.',
      images: ['./assets/img-linea-s03-01.png','./assets/img-linea-s03-02.png','./assets/img-linea-s03-03.png','./assets/img-linea-s03-04.png'],
    }
    ]
  },{
    id: 7,
    name: 'Distinción Patrimonial',
    company:'Getronics',
    customer: 'BBVA Bancomer',
    year: '2016',
    channel: 'Móvil',
    shortDescription: 'Diseño de la app Banca móvil para el segmento patrimonial de BBVA Bancomer.',
    description: [
      'En este proyecto se necesitaba una experiencia diferenciada en la banca móvil móvil para los segmentos altos de clientes, como patrimonial, privada y UHN.',
      'En este proyecto tuve la oportunidad de participar en el diseño de un apartado de la app Banca móvil para el segmento alto de BBVA Bancomer, donde puedan consultar los saldos de sus cuentas y contratos patrimoniales.',
      'Como conclusión del proyecto logramos diseñar una nueva funcionalidad para brindar una experiencia única a los clientes patrimoniales, con la facultad de consultar sus contratos patrimoniales.',
     ],
    coverImage: './assets/img-patrimonial.jpg',
    device: 'Móvil',
    tools: [ 'Illustrator'],
    problems: [
      'Se necesita diferenciar los segmentos de clientes, patrimonial, privado y UHN.',
      'Se requiere consultar contratos patrimoniales.',
      'Se requiere una opción para tener contacto con el asesor patrimonial: Poder llamar, mandar mensaje, correo o agendar una cita.',
    ],
    targets: [
      'Clientes del segmento patrimonial',
      'Clientes del segmento privado',
      'Clientes del segmento UHN',
    ],
    solutions: [
    {
      title: 'Solución final',
      description: 'En este proyecto diseñamos una experiencia simple pero funcional, a apegada a los lineamientos de la organización en cuestión visual y brindando el servicio de consulta de saldos y atención directa.',
      images: ['./assets/img-patrimonial-s01-01.png','./assets/img-patrimonial-s01-02.png','./assets/img-patrimonial-s01-03.png','./assets/img-patrimonial-s01-04.png'],
    }
    ]
  },{
    id: 8,
    name: 'Diseño App TDC Empresarial',
    company:'Getronics',
    customer: 'BBVA Bancomer',
    year: '2016',
    channel: 'Móvil',
    shortDescription: 'Diseño de la app Tarjeta de crédito empresarial, para gestionar viajes y registro de facturas para uso interno de los colaboradores de BBVA Bancomer.',
    description: [
      'BBVA Bancomer necesitaba una plataforma para que los colaboradores puedan conocer rutas, horarios y lista de espera para uso interno.',
      'En este proyecto tuve la oportunidad de participar en el diseño de la app Transporte corporativo, una plataforma innovadora diseñada con el brand corporativo, para otorgarle un buen servicio de transporte al colaborador.',
      'Como conclusión del proyecto logramos diseñar una aplicación que logra brindar el servicio de transporte, para que los colaboradores se puedan trasladar de su casa al trabajo y de regreso, de una forma fácil y segura.',
    ],
    coverImage: './assets/img-tdc-empresarial.jpg',
    device: 'Móvil',
    tools: [ 'Illustrator'],
    problems: [
      'Se necesita dar a conocer las rutas y horarios del transporte corporativo que ofrece BBVA Bancomer para sus colaboradores.',
      'Se requiere que los colaboradores puedan apartar su lugar en la ruta y horario de su preferencia para poder abordar un vehículo.',
    ],
    targets: [
      'Colaboradores de BBVA Bancomer',
    ],
    solutions: [
    {
      title: 'Solución final',
      description: 'En este proyecto hicimos múltiples iteraciones hasta llegar a la solución final. Diseñamos una aplicación para el uso interno de la organización que ayude a sus colaboradores a tener una mejor gestión de sus viajes.',
      images: ['./assets/img-tdc-empresarial-s01-01.png','./assets/img-tdc-empresarial-s01-02.png','./assets/img-tdc-empresarial-s01-03.png','./assets/img-tdc-empresarial-s01-04.png'],
    }
    ]
  },{
    id: 9,
    name: 'Sistema Único de Controversias',
    company:'TATA Consultancy Services',
    customer: 'E-global',
    year: '2017',
    channel: 'Web',
    shortDescription: 'Diseño y programación front del sistema para resolver las aclaraciones que los clientes hacen a los bancos por cargos no reconocidos detectados en sus tarjetas bancarias.',
    description: [
      'E-global necesitaba centralizar todas sus operaciones en un sólo sistema que pudiera atender a todos sus clientes de forma homologada y llevar la contabilidad.',
      'En este proyecto tuve la oportunidad de participar en el diseño y la programación front del sistema para resolver las aclaraciones que los clientes hacen a los bancos por cargos no reconocidos detectados en sus tarjetas bancarias.',
      'Como conclusión del proyecto logramos diseñar una aplicación que puede dar servicio para resolver las controversias que puedan existir entre emisores y adquirentes.',
    ],
    coverImage: './assets/img-suc.jpg',
    device: 'Web',
    tools: [ 'Sketch', 'HTML'],
    problems: [
      'Se necesita centralizar y automatizar ciertos procesos de operación en la atención de controversias.',
      'Se requiere que llevar la contabilidad de los servicios otorgados a cada cliente.',
    ],
    targets: [
      'Operador de E-global',
      'Contadores de E-global',
    ],
    solutions: [
    {
      title: 'Solución final',
      description: 'En este proyecto diseñamos y desarrollamos un sistema único, en el cual se pueden dar servicios a los clientes de forma homologada y centralizada. Además de llevar a cabo la contabilidad de una forma automatizada.',
      images: ['./assets/img-suc-s01-01.jpg','./assets/img-suc-s01-02.jpg','./assets/img-suc-s01-03.jpg','./assets/img-suc-s01-04.jpg'],
    }
    ]
  },{
    id: 10,
    name: 'App Transporte corporativo',
    company:'TATA Consultancy Services',
    customer: 'BBVA Bancomer',
    year: '2017',
    channel: 'Móvil',
    shortDescription: 'Diseño de la app Transporte corporativo, para conocer rutas, horarios y lista de espera para uso interno de los colaboradores de BBVA Bancomer.',
    description: [
      'BBVA Bancomer necesitaba una plataforma para que los colaboradores puedan conocer rutas, horarios y lista de espera para uso interno.',
      'En este proyecto tuve la oportunidad de participar en el diseño de la app Transporte corporativo, una plataforma innovadora diseñada con el brand corporativo, para otorgarle un buen servicio de transporte al colaborador.',
      'Como conclusión del proyecto logramos diseñar una aplicación que logra brindar el servicio de transporte, para que los colaboradores se puedan trasladar de su casa al trabajo y de regreso, de una forma fácil y segura.',
    ],
    coverImage: './assets/img-transporte-corp.jpg',
    device: 'Móvil',
    tools: [ 'Sketch', 'Marvel', 'Zeplin', 'HTML'],
    problems: [
      'Se necesita dar a conocer las rutas y horarios del transporte corporativo que ofrece BBVA Bancomer para sus colaboradores.',
      'Se requiere que los colaboradores puedan apartar su lugar en la ruta y horario de su preferencia para poder abordar un vehículo.',
    ],
    targets: [
      'Colaboradores de BBVA Bancomer',
    ],
    solutions: [
    {
      title: 'Solución final',
      description: 'En este proyecto hicimos múltiples iteraciones después de cada test, hasta llegar a la solución final. Retomamos una propuesta de diseño que ya se había trabajado y se rediseñó para tener una mejor experiencia.',
      images: ['./assets/img-tdc-empresarial-s01-01.png','./assets/img-tdc-empresarial-s01-02.png','./assets/img-tdc-empresarial-s01-03.png','./assets/img-tdc-empresarial-s01-04.png'],
    }
    ]
  },{
    id: 11,
    name: 'App Bhappy',
    company:'TATA Consultancy Services',
    customer: 'BBVA Bancomer',
    year: '2017 - 2018',
    channel: 'Móvil',
    shortDescription: 'Diseño de la app Bhappy, para conocer el estado de animo de las personas, para uso interno de los colaboradores de BBVA Bancomer.',
    description: [
      'BBVA Bancomer necesitaba una plataforma para conocer el estado de ánimo de sus colaboradores y poder tomar acciones al identificar personas con estados de ánimo, canalizando a cada colaborador a actividades recreativas.',
      'En este proyecto tuve la oportunidad de participar en el diseño de la experiencia de una app Bhappy, para conocer el estado de animo de las personas.',
      'Como conclusión del proyecto logramos diseñar una aplicación que logra acercar a las personas, haciendo una comunidad dentro de la organización.',
      'Logramos un producto que integrará a los colaboradores, invitando y dando a conocer a las actividades recreativas que ofrece BBVA Bancomer.',
    ],
    coverImage: './assets/img-bhappy.jpg',
    device: 'Móvil',
    tools: [ 'Sketch', 'Marvel', 'Zeplin', 'HTML'],
    problems: [
      'Se necesita identificar el estado de ánimo de los colaboradores y conocer la media por área o proyecto.',
      'Se requiere dar a conocer las actividades recreativas que ofrece BBVA para los colaboradores.',
    ],
    targets: [
      'Colaboradores de BBVA Bancomer',
    ],
    solutions: [
    {
      title: 'Solución final',
      description: 'En este proyecto hicimos múltiples iteraciones después de cada test, hasta llegar a la solución final. Retomamos una propuesta de diseño que ya se había trabajado y se rediseñó para tener una mejor experiencia.',
      images: ['./assets/img-bhappy-s01-01.png','./assets/img-bhappy-s01-02.png','./assets/img-bhappy-s01-03.png','./assets/img-bhappy-s01-04.png','./assets/img-bhappy-s01-05.png','./assets/img-bhappy-s01-06.png','./assets/img-bhappy-s01-07.png','./assets/img-bhappy-s01-08.png'],
    }
    ]
  },{
    id: 12,
    name: 'A2CENSO',
    company:'TATA Consultancy Services',
    customer: 'BVC Colombia',
    year: '2019',
    channel: 'Web',
    shortDescription: 'Lideré el diseño y la experiencia del sitio web para la experiencia de una plataforma de crowdfunding.',
    description: [
      'La Bolsa de Valores de Colombia (BVC), necesita una plataforma de financiamiento colectivo (crowdfunding), para conectar a las empresas que necesitan capital de inversión con los inversionistas.',
      'En este proyecto tuve la oportunidad de liderear el diseño y la experiencia del sitio web para la plataforma de crowdfunding.',
      'Como conclusión del proyecto logramos diseñar una aplicación líder en el mercado colombiano que logra acercar a las pequeñas y medianas empresas con los inversionistas.',
      'Logramos un producto que integrará los distintos tipos de usuario, las empresas necesitaban inscribir su proyecto y los aportadores podrán elegir los distintos proyectos disponibles en los cuales quieran invertir.',
    ],
    coverImage: './assets/img-a2censo.jpg',
    device: 'Web',
    tools: [ 'Sketch', 'Marvel', 'Zeplin'],
    problems: [
      'Las PyMEs necesitan un canal digital donde puedan solicitar inversión y también dar a conocer su proyecto a los interesados a invertir.',
      'Se requiere un catálogo digital, regulado, donde inversionistas puedan elegir proyectos para un financiamiento colectivo.',
    ],
    targets: [
      'Emisores',
      'Inversionistas',
    ],
    solutions: [
    {
      title: 'Solución final',
      description: 'En este proyecto hicimos múltiples iteraciones después de cada test, hasta llegar a la solución final. Fue un proyecto 100% remoto. Colaboramos con el cliente que estaba en Colombia, con desarrolladores ubicados en la india y el equipo de diseño en México.',
      images: ['./assets/img-a2censo-s01-01.png','./assets/img-a2censo-s01-02.png','./assets/img-a2censo-s01-03.png','./assets/img-a2censo-s01-04.png'],
    }
    ]
  },{
    id: 13,
    name: 'Módulo OTP Transversal',
    company:'TATA Consultancy Services',
    customer: 'Scotiabank',
    year: '2020',
    channel: 'Móvil',
    shortDescription: 'Diseño de la experiencia única y homologada, para el proceso de contraseñas dinámicas en todos los productos de Scotiabank.',
    description: [
      'Tuve la oportunidad de participar en el diseño de la experiencia única y homologada, para el proceso de contraseñas dinámicas en todos los productos de Scotiabank.',
      'En ese momento, Scotiabank utilizaba códigos OTP para la autenticación y verificación de sus clientes, pero la experiencia no era la misma en los diferentes canales que se utilizaba.',
      'Se diseñó un flujo que pudiera ser más simple y que estuviera homologado en los canales web y móvil.',
    ],
    coverImage: './assets/img-otp.jpg',
    device: 'Móvil',
    tools: [ 'Sketch', 'InVision', 'Zeplin'],
    problems: [
      'Cada producto tiene diferentes elementos, tanto textos como imágenes.',
      'No hay reglas de negocio estándar.',
      'Tiene mucho texto de contenido.',
      'Ninguna de las experiencias se puede reutilizar porque tiene textos muy específicos.',
      'Algunos elementos están fuera de las reglas del equipo UX de ese momento.'
    ],
    targets: [
      'Clientes que utilizan la banca digital de Scotiabank',
    ],
    solutions: [
    {
      title: 'Antes',
      images: ['./assets/img-otp-s01-01.jpg','./assets/img-otp-s01-02.jpg','./assets/img-otp-s01-03.jpg','./assets/img-otp-s01-04.jpg'],
      },
    {
      title: 'Solución final',
      images: ['./assets/img-otp-s02-01.jpg','./assets/img-otp-s02-02.jpg','./assets/img-otp-s02-03.jpg'],
      }
    ]
  },{
    id: 14,
    name: 'Cuenta Única N2 Exprés',
    company:'TATA Consultancy Services',
    customer: 'Scotiabank',
    year: '2020',
    channel: 'Web',
    shortDescription: 'Diseño de una experiencia diferenciada para clientes existentes en Scotiabank, para la contratación de una Cuenta Digital N2, donde el proceso sea completado en menor tiempo.',
    description: [
      'Tuve la oportunidad de participar en el diseño de una experiencia diferenciada para clientes existentes en Scotiabank, para la contratación de una Cuenta Digital N2.',
      'Como conclusión del proyecto logramos desarrollar un proceso de apertura muy rápido, en solo 9 clics.',
    ],
    coverImage: './assets/img-n2-digital.jpg',
    device: 'Web',
    tools: [ 'Sketch', 'InVision', 'Zeplin', 'Figma'],
    problems: [
      'Actualmente no se cuenta con un flujo para clientes. Si un cliente ingresa a la contratación de Cuenta Digital, tiene que ingresar todos sus datos, cuando se supone que Scotiabank ya los tiene.',
      'Se requiere una experiencia diferenciada para clientes existentes de Scotiabank, para la contratación de una Cuenta Digital N2, donde la apertura sea completada en menor tiempo a diferencia de un nuevo cliente.',
      'Se pretende que el diseño de este flujo sea transversal y otros productos puedan utilizarlo para ofrecer la misma experiencia a todos nuestros clientes.',
    ],
    targets: [
      'Clientes monoproducto de auto',
      'Clientes monoproducto de TDC',
      'Clientes multiprodcuto (Crédito + débito)'
    ],
    solutions: [
    {
      title: 'Antes',
      images: ['./assets/img-n2-s01-01.png','./assets/img-n2-s01-02.png','./assets/img-n2-s01-03.png','./assets/img-n2-s01-04.png'],
      },
    {
      title: 'Solución final',
      images: ['./assets/img-n2-s02-01.png','./assets/img-n2-s02-02.png','./assets/img-n2-s02-03.png','./assets/img-n2-s02-04.png'],
      }
    ]
  },{
    id: 15,
    name: 'Sistema OCRA',
    company:'GFT',
    customer: 'AMIS',
    year: '2021 - 2022',
    channel: 'Web',
    shortDescription: 'Lideré el diseño para el sitio web de la plataforma de control de robos y recuperación de vehículos única en México.',
    description: [
      'AMIS, es la Asociación Mexicana de Instituciones de Seguros y tiene la necesidad de renovar el sistema OCRA Virtual, pues ya lleva más de 10 años de operación y sus tiempos de respuesta son muy lentos.',
      'Tuve la oportunidad de liderar el diseño para el sitio web, para el rediseño completo de este sistema, para el control de robos y recuperación de vehículos única en México.',
      'Como conclusión del proyecto logramos desarrollar una aplicación única en México con elementos innovadores y prácticos, que responden a las necesidades específicas de nuestro cliente.',
      'Logramos un producto visualmente atractivo y fácil de usar.',
    ],
    coverImage: './assets/img-ocra.jpg',
    device: 'Web',
    tools: [ 'Figma'],
    problems: [
      'Actualmente, AMIS ya siente obsoleto el sistema OCRA Virtual, pues ya lleva más de 10 años de operación y sus tiempos de respuesta son muy lentos.',
      'AMIS recibe solicitudes constantes de mejoras y cambios por parte de los usuarios finales.',
      'Se requiere automatizar procesos que actualmente se hacen de forma manual.',
    ],
    targets: [
      'Usuario de AMIS',
      'Usuario de OCRA',
      'Usuario de Compañías aseguradoras',
      'Usuarios de Autoridades'
    ],
    solutions: [
    {
      title: 'Prueba de concepto',
      description: 'Para poder participar en el proyecto, primero concursamos junto a otras 10 consultoras de alto prestigio. Realizamos una prueba de concepto y presentamos un prototipo mostrando funcionalidades innovadoras que pudieran complementar los requerimientos que el cliente había solicitado. Ganando la licitación.',
      images: [],
      },
    {
      title: 'Solución final',
      description: 'Se elaboró un sistema de diseño basado en los principios de Atomic Design para mantener la coherencia del diseño de toda la aplicación.',
      images: ['./assets/img-amis-s01-01.png','./assets/img-amis-s01-02.png','./assets/img-amis-s01-03.png','./assets/img-amis-s01-04.png','./assets/img-amis-s02-01.png','./assets/img-amis-s02-02.png','./assets/img-amis-s02-03.png','./assets/img-amis-s02-04.png'],
      }
    ]
  },{
    id: 16,
    name: 'Ventas digitales',
    company:'GFT',
    customer: 'Santander',
    year: '2023',
    channel: 'Móvil',
    shortDescription: 'Diseño de flujos de ventas digitales para productos, incremento de línea de crédito, seguros de auto y seguros no auto; para diferentes canales de Santander.',
    description: [
      'Santander necesitaba ofrecer sus productos, donde los clientes pudieran contratarlos de una forma fácil, sencilla y totalmente digital.',
      'En este proyecto tuve la oportunidad de participar en el diseño de flujos de contratación de productos como consumo preaprobado, contratación de TDC, incremento de línea, seguros de auto y seguros no auto; para sus diferentes canales digitales.',
      'Como conclusión del proyecto logramos diseñar una experiencia para el mercado financiero, en la que los clientes podían contratar productos de forma rápida, sencilla y remota 100% digital.',
    ],
    coverImage: './assets/img-santander01.jpg',
    device: 'Móvil',
    tools: [ 'Figma', 'Maze'],
    problems: [
      'Se necesitaba diseñar flujos de contratación de productos para todos los canales de Santander.',
      'El reto es optimización y rediseño de los flujos con la nueva imagen de Santander.',
    ],
    targets: [
      'Clientes con nómina en Santander',
      'No clientes de Santander',
    ],
    solutions: [
    {
      title: 'Solución final Móvil',
      description: 'Para este canal realizamos un facelift para el diseño, con los nuevos componentes dels sistema de diseño y un reacomodo del contenido y la jerarquía de información para optimizar los flujos',
      images: ['./assets/img-santander01-s01-01.jpg','./assets/img-santander01-s01-02.jpg','./assets/img-santander01-s01-03.jpg','./assets/img-santander01-s01-04.jpg'],
      }
    ]
  }
];
