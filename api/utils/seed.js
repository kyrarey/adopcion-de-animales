const mongoose = require("mongoose");
const Species = require("../models/Species");
// const User = require('../models/User')
const Animal = require("../models/Animal");
const axios = require("axios");
const UserFoundation = require("../models/UserFoundation")

mongoose
  .connect("mongodb://localhost:27017/AnimalesFelices", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MONGO CONNECTION");
  })
  .catch((err) => {
    console.log(err);
  });

const species = [{ SpeciesName: "Perro" }, { SpeciesName: "Gato" }];

const fakeAnimals = [
  {
    animalname: "Zen",
    history:
      "Este pequeño nació en un criadero para consumo de reptiles y fue rescatado por una de nuestras activistas",
    image: ["/01-01.jpg", "/01-02.jpg", "/01-03.jpg"],
    fundationId: "1",
    location: "bahía blanca, buenos aires",
    size: "pequeño",
    species: "hamster",
    sex: "macho",
    personality: "Tímido, tranquilo, comelón.",
    age: "cachorro",
    vaccines: "No requeridas para esta especie",
  },
  {
    animalname: "Yori",
    history:
      "Se la encontró corriendo alrededor de un basurero en el centro de la ciudad antes de ser rescatada. Fue acogida por un hogar temporal mientras se recuperaba y ahora está lista para ser adoptada.",
    image: ["/02-01.jpg", "/02-02.jpg", "/02-03.jpg"],
    fundationId: "1",
    location: "bahía blanca, buenos aires",
    size: "mediano",
    species: "hamster",
    sex: "hembra",
    personality:
      "Activa (le gusta trepar a cualquier cosa), le disgustan los movimientos bruscos o repentinos.",
    age: "adulto",
    vaccines: "No requeridas para esta especie",
  },
  {
    animalname: "Anatolia",
    history:
      "Se la encontró corriendo alrededor de un basurero en el centro de la ciudad antes de ser rescatada. Fue acogida por un hogar temporal mientras se recuperaba y ahora está lista para ser adoptada.",
    image: ["/03-01.jpg", "/03-02.jpg", "/03-03.jpg"],
    fundationId: "2",
    location: "neuquén, neuquén",
    size: "mediano",
    species: "cabra",
    sex: "hembra",
    personality:
      "Le gusta pastar todo el día y acurrucarse por la noche. Ama jugar con otras mascotas",
    age: "jóven",
    vaccines: "Al día",
  },
  {
    animalname: "Fa",
    history:
      "El ojo izquierdo de fa fue removido quirúrgicamente debido a un abseso que estab creciendo detrás de él. Después de la cirugía, su ojo no fue completamente cerrado y necesitá limpieza externa en caso de que exista alguna descarga desde el interior.",
    image: ["/04-01.jpg", "/04-02.jpg", "/04-03.jpg"],
    fundationId: "1",
    location: "bahía blanca, buenos aires",
    size: "grande",
    species: "hamster",
    sex: "macho",
    personality:
      "Aunque al principio era muy tímido, con el tiempo ha aprendido a amar la interacción humana y le encanta si esta se realiza con cuidado y delicadeza.",
    age: "adulto",
    vaccines: "No requeridas para esta especie",
  },
  {
    animalname: "Joker",
    history:
      "Joker formaba parte de una manada de gatos ferales rescatados en el norte de la ciudad. Al principio le costaba adaptarse a la presencia de humanos u otras especies, pero ahora le encanta pasar el día recibiendo mimos. Se ha convertido en un gato de interiores, por lo que no se recomienda mantenerlo fuera de su hogar o permitirle salir a la calle.",
    image: ["/05-01.jpg", "/05-02.jpg", "/05-03.jpg"],
    fundationId: "3",
    location: "marull, códoba",
    size: "mediano",
    species: "cat",
    sex: "macho",
    personality:
      "Bueno para interactual con otros humanos, no le gustan otros gatos. Juguetón y mimoso",
    age: "adulto",
    vaccines: "Al día",
  },
  {
    animalname: "Apolo",
    history:
      "La familia de apolo se tuvo que mudar de país y lo dejaron en la fundación para que encuentre un nuevo hogar",
    image: ["/06-01.jpg", "/06-02.jpg", "/06-03.jpg"],
    fundationId: "4",
    location: "la plata, buenos aires",
    size: "mediano",
    species: "perro",
    sex: "macho",
    personality:
      "Apolo es muy bueno con los niños, es protector y juguetón, si tienes niños en casa, no podrás encontrar un mejor compañero de juego para ellos.",
    age: "adulto",
    vaccines: "Al día",
  },
  {
    animalname: "Lola",
    history:
      "El humano de Lola falleció hace unos días y la fundación se hizo cargo de ella mientras encuentra una nueva familia.",
    image: ["/07-01.jpg", "/07-02.jpg", "/07-03.jpg"],
    fundationId: "5",
    location: "san isidro, buenos aires",
    size: "grande",
    species: "perro",
    sex: "hembra",
    personality:
      "Muy activa, necesita tomar largos paseos a diario para drenar toda su energía. Le gusta jugar con sus juguetes y ama la comida.",
    age: "joven",
    vaccines: "Al día",
  },
  {
    animalname: "Baco",
    history:
      "La familia de baco atraviesa por graves problemas económicos, que no les permite darle la vida que se merece, por tal razón lo trajeron con nosotros para encontrarle un hogar que lo ame tanto como ellos y que le pueda brindar un hogar con las comodidades que un perrito de su edad necesita. ",
    image: ["/08-01.jpg", "/08-02.jpg", "/08-03.jpg"],
    fundationId: "5",
    location: "san isidro, buenos aires",
    size: "pequeño",
    species: "perro",
    sex: "macho",
    personality:
      "Tranquilo, gentil, le gusta acompañar a su familia de una manera pasiva y amorosa.",
    age: "senior",
    vaccines: "Al día",
  },
  {
    animalname: "Luzmila",
    history:
      "Esta pequeña es un manojo de amor, fue encontrada deambulando en el centro de la ciudad cuando un alma gentil la rescató y la trajo con nosotros.",
    image: ["/09-01.jpg", "/09-02.jpg", "/09-03.jpg"],
    fundationId: "5",
    location: "san isidro, buenos aires",
    size: "pequeño",
    species: "perro",
    sex: "hembra",
    personality:
      "Juguetona, cariñosa, ama que la mimen y también los días de paseos largos.",
    age: "jóven",
    vaccines: "Al día",
  },
  {
    animalname: "Sasha",
    history:
      "Hermosa gatita encontrada en las inmediaciones del hospital docente, fue traída por una estudiante a la que le pedía comida diariamente.",
    image: ["/10-01.jpg", "/10-02.jpg", "/10-03.jpg"],
    fundationId: "6",
    location: "CABA, buenos aires",
    size: "mediano",
    species: "gato",
    sex: "hembra",
    personality:
      "Muy amigable, le gusta socializar con humanos y con perros pero no le gustan mucho los gatos.",
    age: "adulto",
    vaccines: "Al día",
  },
  {
    animalname: "Cat Woman",
    history:
      "Antes de ser rescatada se la veía frecuentemente sobre los techos de las casas de Villa Urquiza, en busca de ratones o alguna que otra paloma.",
    image: ["/11-01.jpg", "/11-02.jpg", "/11-03.jpg"],
    fundationId: "6",
    location: "CABA, buenos aires",
    size: "mediano",
    species: "gato",
    sex: "hembra",
    personality:
      "Ágil e intrépida, le gusta mucho la comida- de todo tipo, por lo que hay que tener cuidado de no sobrealimentarla.",
    age: "senior",
    vaccines: "Al día",
  },
  {
    animalname: "Audi",
    history:
      "Este guapo caballero fue encontrado por una de nuestras voluntarias en las inmediaciones del mercado de Liniers, se acercó muy amigablemente y fue traído a la fundación.",
    image: ["/12-01.jpg", "/12-02.jpg", "/12-03.jpg"],
    fundationId: "6",
    location: "CABA, buenos aires",
    size: "pequeño",
    species: "gato",
    sex: "macho",
    personality:
      "Le encanta tener toda la atención siempre, por lo que no es muy bueno compartiendo espacio con otros animales, de la misma o de diferente especie.",
    age: "cachorro",
    vaccines: "Al día",
  },
  {
    animalname: "Chess",
    history:
      "Solía pasar sus días alegrando los paseos de los turistas que acuden a Caminito, hasta que un día fue atropellado, llevado a una clínica por un turista y luego vino con nosotros, que lo estamos cuidando hasta ahora.",
    image: ["/13-01.jpg", "/13-02.jpg", "/13-03.jpg"],
    fundationId: "6",
    location: "CABA, buenos aires",
    size: "mediano",
    species: "gato",
    sex: "macho",
    personality:
      "Chess tiene mucha personalidad, él sabe muy bien lo que quiere y siempre lo consigue. Es determinado y cariñoso, siempre en busca de alguna aventura.",
    age: "jóven",
    vaccines: "Al día",
  },
  {
    animalname: "Garfield",
    history:
      "Este guapo gato dorado tiene leucemia felina, por lo que requiere tomar su medicina a diario (lo cual hace sin chistar) y no debe salir de su casa para evitar contagiar a otros gatitos.",
    image: ["/14-01.jpg", "/14-02.jpg", "/14-03.jpg"],
    fundationId: "6",
    location: "CABA, buenos aires",
    size: "grande",
    species: "gato",
    sex: "macho",
    personality:
      "Tal como su homónimo de las caricaturas, a Garfield le encanta la comida, dormir y recibir mimos. Es ideal para una familia sin niños o con hijos adolecentes.",
    age: "adulto",
    vaccines: "Al día",
  },
  {
    animalname: "Sombra Gris",
    history:
      "El esposo de su humana desarrollo un grave cuadro respiratorio y por recomemdación médica no puede estar cerca de gatos o perros, por eso este increíble animal está ahora con nosostros en busca de una nueva familia.",
    image: ["/15-01.jpg", "/15-02.jpg", "/15-03.jpg"],
    fundationId: "6",
    location: "CABA, buenos aires",
    size: "grande",
    species: "gato",
    sex: "macho",
    personality:
      "Como el mítico caballo de LOTR, a Sombra Gris le encanta salir en busca de aventuras, por lo que quien decida adoptar a este pequeño, tendrá que ser ingenioso para evitar que salga de su casa, pues sabemos que la calle está llena de peligros para estos pequeñines.",
    age: "adulto",
    vaccines: "Al día",
  },
  {
    animalname: "Francis",
    history:
      "No se sabe por qué, pero un día de primavera se vió a Francis caminando sin rumbo a la orilla del río e inmediatamente fue traído con nosotros.",
    image: ["/16-01.jpg", "/16-02.jpg", "/16-03.jpg"],
    fundationId: "2",
    location: "neuquén, neuquén",
    size: "mediano",
    species: "ganzo",
    sex: "macho",
    personality:
      "Le gusta estar en el pasto, recibir el sol e investigar su entorno, es muy activo",
    age: "jóven",
    vaccines: "Al día",
  },
  {
    animalname: "Carmelita",
    history:
      "Carmelita llegó a nosotros después de que desarrolló un padecimiento que impide que su lana crezca normalmente. Su antiguo hogar era una granja de producción de lana de oveja.",
    image: ["/17-01.jpg", "/17-02.jpg", "/17-03.jpg"],
    fundationId: "2",
    location: "neuquén, neuquén",
    size: "grande",
    species: "oveja",
    sex: "hembra",
    personality: "Tranquila, ama tomar el sol y que la acaricien en la cabeza.",
    age: "adulto",
    vaccines: "Al día",
  },
  {
    animalname: "Alberto",
    history:
      "La granja en la que vivía este intrépido burrito fue vendida y él fue traído con nosotros de inmediato.",
    image: ["/18-01.jpg", "/18-02.jpg", "/18-03.jpg"],
    fundationId: "2",
    location: "neuquén, neuquén",
    size: "extra-grande",
    species: "burro",
    sex: "macho",
    personality:
      "Alberto ama estar rodeado de humanos y ayuda en todo lo que puede. Necesita estar en una granja o una casa con mucho espacio verde para que pueda explorar.",
    age: "adulto",
    vaccines: "Al día",
  },
];

const fakeOrgs = [
  {
      foundationName: "Proyecto 4 patas",
      image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/188/849/themes/common/logo-1866482157-1574635760-6cf4fcbbca71b55a01145347adaf5bde1574635760.png?0",
      location: "Buenos Aires, Argentina",
      description: "Proyecto 4 Patas (P4P) es una organización sin fines de lucro liderada por un grupo de voluntarios que buscan superar la situación de sobrepoblación, abandono, crueldad e indiferencia que viven millones de animales en nuestro país. ",
      email:"proyecto4Patas@email.com",
      password:"1234",
    },
    {
      foundationName: "El campito refugio",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpQuBYEj6IxjbLiDkMz66aItpE6NhyOgwa0Q&usqp=CAU",
      location: "Buenos Aires, Argentina",
      description: "El refugio tiene una población que ronda los 750 perros. El trabajo de rescate y recuperación NO TIENE PRECEDENTES EN AMERICA LATINA.  Por ser un REFUGIO NO EUTANÁSICO no considera inviable a ninguno de sus animales.  ",
      email:"elcampito@email.com",
      password:"1234",
    },
    {
      foundationName: "Patitas al rescate",
      image: "https://d1fdloi71mui9q.cloudfront.net/DqXHZc8TzCbpsxCGzZ5Z_8LC568lCZ06642U1",
      location: "Cordoba, Argentina",
      description: "Rescate, rehabilitación y adopción ",
      email:"patitas@email.com",
      password:"1234",
    },
    {
      foundationName: "Zaguates",
      image: "https://scontent.faep8-3.fna.fbcdn.net/v/t31.18172-8/12182611_452872468230452_8616442658070815663_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hZ7oSDSxIbUAX8gz1ZF&_nc_ht=scontent.faep8-3.fna&oh=00_AT8Asm_WHXdyb8n6PFZ8G6vB7pQlkMIO3K8_Wy8Eq4BVCA&oe=62EB29F6",
      location: "Zona Norte, Buenos Aires",
      description: "Somos proteccionistas independientes, hace años que rescatamos animales en situación de calle, en estados deplorables, pidiendo a gritos dejar de ser invisibles.",
      email:"zaguates@email.com",
      password:"1234",
    },
    {
      foundationName: "Callejeritos Brown",
      image: "https://www.callejeritosalmirantebrown.org/wp-content/uploads/2020/09/LOGO-CALLEJERITOS-original-01.png",
      location: "Almirante Brown, Buenos Aires",
      description: "Callejeritos de Almirante Brown es una Asociación sin fines de lucro, que nace durante el año 2011, fue creada por un grupo de vecinos preocupados por el maltrato y abandono de animales en situación de calle  en las ciudades.",
      email:"callejeritos@email.com",
      password:"1234",
    },
    {

      foundationName: "ADVA",
      image: "https://static.wixstatic.com/media/50561d_01bf299407094da59d6c9b90b83de90d~mv2.png/v1/fill/w_604,h_604,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo%20adva%202019-01.png",
      location: "bahía blanca, buenos aires",
      description: "ONG sin fines de lucro que desarrolla proyectos en beneficio de los la fauna del país desde el 2006. Albergamos a 650 animales en nuestra red de temporales y santuario.",
      email: "adva@gmail.com",
      password: "1234"
  },
  {
      foundationName: "lucky",
      image: "https://www.fundacionlucky.org/images/lucky.png",
      location: "neuquén, neuquén",
      description: "Somos un refugio con 600 animalitos de diferentes especies, nos alimentamos de autogestión.",
      email: "lucky@hotmail.com",
      password: "1234"
  },
  {
      foundationName: "segunda oportunidad",
      image: "https://scontent.faep8-1.fna.fbcdn.net/v/t31.18172-8/322561_216882875058604_605670641_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6FfebGyHCF8AX9dVnQV&_nc_ht=scontent.faep8-1.fna&oh=00_AT8x_lJ_LmU-OSaC1aq6EKALQUmCu-bF92c3rJxkD9dWUw&oe=62EE9804",
      location: "marull, códoba",
      description: "Manejamos casos de rescate, adopción y hogar temporal y promovemos la tenencia responsable de animales de compañía.",
      email: "segundaoportunidad@hotmail.com",
      password: "1234"
  },
  {
      foundationName: "FARA",
      image: "https://scontent.faep8-1.fna.fbcdn.net/v/t31.18172-8/10386970_245707768886747_7473550850485997571_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=IhFbOMwcr4sAX-bLXlH&_nc_ht=scontent.faep8-1.fna&oh=00_AT_qihkf44lSuRRaGe4c6Kd2U1rRlA_5ZrZzYQFQ69KDPg&oe=62EDACAB",
      location: "la plata, buenos aires",
      description: "Rescate de alto riesgo animales de todo tipo y tamaños en situación de peligro o que haga peligrar a terceros, fomentar el adiestramiento de perros para búsqueda y rescate, capacitar, recuperación de animales silvestres.",
      email: "farafundacion@hotmail.com",
      password: "1234"
  },
  {
      foundationName: "red solidaria animal",
      image: "https://static.wixstatic.com/media/192de1_e9e749e2127e4f468ce2c8b4b9d6462d~mv2.png/v1/fill/w_555,h_366,al_c,lg_1,q_85,enc_auto/192de1_e9e749e2127e4f468ce2c8b4b9d6462d~mv2.png",
      location: "san isidro, buenos aires",
      description: "Red Solidaria Animal, es una Asociación Civil sin fines de lucro que se dedica al cuidado y protección de los animales",
      email: "redanimal@gmail.com",
      password: "1234"
  },
  {
      foundationName: "maneki",
      image: "https://scontent.faep8-1.fna.fbcdn.net/v/t39.30808-6/291056980_5618468651506300_5214298827385533394_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=iM2jA7aR9hMAX_V0wFI&_nc_ht=scontent.faep8-1.fna&oh=00_AT9JlCZjkuu88U-LpLb0JMXg_vaf9_KCvDdPROevIAPKRg&oe=62CC147F",
      location: "CABA, buenos aires",
      description: "Maneki rescata, recupera y da en adopcion gatitos en la ciudad de Buenos Aires. Desde hace diez años trabajamos en pro de el bienestar de los felinos. Hoy abrimos nuestro Catshop espacio para los amantes de los felinos.",
      email: "maneki@gmail.com",
      password: "1234"
  },
  {
      foundationName: "Fundacion Perros sin nombre",
       image: "https://scontent.faep8-1.fna.fbcdn.net/v/t39.30808-6/241045287_135075725498876_7560316351739215290_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6z7pAwWHZ4AAX9lUSZ6&_nc_ht=scontent.faep8-1.fna&oh=00_AT_zd8VCwBGAh2KpGPnru_0RjETyeu2tkg-tZAOU7AcroA&oe=62CC4F31",
      location: "parque siquimán, córdoba",
      description: "ONG dedica a la protección de perros en situación de calle o maltratados, su rescate, rehabilitación social, castracion y su posterior adopción en hogares.",
      email: "fundacion1@email.com",
      password: "1234"
  }
]

const seedDb = async () => {
  await Animal.deleteMany();
  await Animal.insertMany(fakeAnimals);
  await Species.deleteMany();
  await Species.insertMany(species);
  await UserFoundation.deleteMany();
  await UserFoundation.insertMany(fakeOrgs);
};

seedDb();
