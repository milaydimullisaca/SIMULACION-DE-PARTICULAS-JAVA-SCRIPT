const dictionary = [
  { word: "Algorithm", definition: "A step-by-step procedure for solving a problem or accomplishing a task.", definition_es: "Un procedimiento paso a paso para resolver un problema o realizar una tarea." },
  { word: "Database", definition: "An organized collection of structured information, or data, typically stored electronically.", definition_es: "Una colección organizada de información estructurada, normalmente almacenada electrónicamente." },
  { word: "Network", definition: "A group of interconnected computers that can share resources and information.", definition_es: "Un grupo de computadoras interconectadas que pueden compartir recursos e información." },
  { word: "Software", definition: "A set of instructions, data, or programs used to operate computers and execute specific tasks.", definition_es: "Un conjunto de instrucciones, datos o programas usados para operar computadoras y ejecutar tareas específicas." },
  { word: "Hardware", definition: "The physical components of a computer system.", definition_es: "Los componentes físicos de un sistema informático." },
  { word: "Cloud Computing", definition: "The delivery of computing services over the internet.", definition_es: "La entrega de servicios informáticos a través de Internet." },
  { word: "Cybersecurity", definition: "The practice of protecting systems, networks, and programs from digital attacks.", definition_es: "La práctica de proteger sistemas, redes y programas de ataques digitales." },
  { word: "Operating System", definition: "System software that manages computer hardware and software resources.", definition_es: "Software de sistema que administra los recursos de hardware y software de la computadora." },
  { word: "Programming", definition: "The process of designing and building executable computer programs.", definition_es: "El proceso de diseñar y construir programas informáticos ejecutables." },
  { word: "Data Structure", definition: "A way of organizing and storing data so it can be accessed and modified efficiently.", definition_es: "Una forma de organizar y almacenar datos para que puedan ser accedidos y modificados eficientemente." },
  { word: "Artificial Intelligence", definition: "The simulation of human intelligence in machines.", definition_es: "La simulación de la inteligencia humana en máquinas." },
  { word: "Machine Learning", definition: "A subset of AI that enables systems to learn and improve from experience.", definition_es: "Un subconjunto de la IA que permite a los sistemas aprender y mejorar a partir de la experiencia." },
  { word: "System Analysis", definition: "The process of studying a system to identify its components and how they interact.", definition_es: "El proceso de estudiar un sistema para identificar sus componentes y cómo interactúan." },
  { word: "Requirement", definition: "A condition or capability needed by a user to solve a problem or achieve an objective.", definition_es: "Una condición o capacidad que un usuario necesita para resolver un problema o lograr un objetivo." },
  { word: "Modeling", definition: "Creating representations of systems to analyze and improve them.", definition_es: "Crear representaciones de sistemas para analizarlos y mejorarlos." },
  { word: "Testing", definition: "The process of evaluating a system or its components to determine if it meets requirements.", definition_es: "El proceso de evaluar un sistema o sus componentes para determinar si cumple con los requisitos." },
  { word: "Integration", definition: "Combining different subsystems into one system and ensuring they work together.", definition_es: "Combinar diferentes subsistemas en un solo sistema y asegurar que funcionen juntos." },
  { word: "Deployment", definition: "The process of making a system available for use.", definition_es: "El proceso de poner un sistema disponible para su uso." },
  { word: "Maintenance", definition: "The process of updating and improving a system after its deployment.", definition_es: "El proceso de actualizar y mejorar un sistema después de su implementación." },
  { word: "User Interface", definition: "The means by which a user interacts with a computer, software, or application.", definition_es: "El medio por el cual un usuario interactúa con una computadora, software o aplicación." },
  { word: "Binary", definition: "A numbering system that uses only two digits: 0 and 1.", definition_es: "Un sistema de numeración que utiliza solo dos dígitos: 0 y 1." },
  { word: "Encryption", definition: "The process of converting information into code to prevent unauthorized access.", definition_es: "El proceso de convertir información en código para evitar el acceso no autorizado." },
  { word: "Firewall", definition: "A network security system that monitors and controls incoming and outgoing network traffic.", definition_es: "Un sistema de seguridad de red que monitorea y controla el tráfico de red entrante y saliente." },
  { word: "Protocol", definition: "A set of rules governing the exchange of data between devices.", definition_es: "Un conjunto de reglas que rigen el intercambio de datos entre dispositivos." },
  { word: "Server", definition: "A computer or program that provides services to other computers or clients.", definition_es: "Una computadora o programa que provee servicios a otras computadoras o clientes." },
  { word: "Client", definition: "A computer or program that requests services from a server.", definition_es: "Una computadora o programa que solicita servicios de un servidor." },
  { word: "Router", definition: "A device that forwards data packets between computer networks.", definition_es: "Un dispositivo que reenvía paquetes de datos entre redes de computadoras." },
  { word: "Switch", definition: "A device that connects devices within a network and uses packet switching to forward data.", definition_es: "Un dispositivo que conecta dispositivos dentro de una red y usa conmutación de paquetes para enviar datos." },
  { word: "Compiler", definition: "A program that translates source code into executable code.", definition_es: "Un programa que traduce código fuente en código ejecutable." },
  { word: "Bug", definition: "An error or flaw in software that causes it to produce incorrect or unexpected results.", definition_es: "Un error o fallo en el software que provoca resultados incorrectos o inesperados." },
  { word: "Debugging", definition: "The process of identifying and removing errors from computer hardware or software.", definition_es: "El proceso de identificar y eliminar errores de hardware o software." },
  { word: "Iteration", definition: "The repetition of a process in order to generate a sequence of outcomes.", definition_es: "La repetición de un proceso para generar una secuencia de resultados." },
  { word: "Function", definition: "A block of organized, reusable code that performs a single action.", definition_es: "Un bloque de código organizado y reutilizable que realiza una sola acción." },
  { word: "Variable", definition: "A storage location paired with an associated symbolic name, which contains some known or unknown quantity.", definition_es: "Una ubicación de almacenamiento con un nombre simbólico asociado, que contiene un valor conocido o desconocido." },
  { word: "Array", definition: "A data structure consisting of a collection of elements, each identified by an index.", definition_es: "Una estructura de datos que consiste en una colección de elementos, cada uno identificado por un índice." },
  { word: "Loop", definition: "A sequence of instructions that is continually repeated until a certain condition is reached.", definition_es: "Una secuencia de instrucciones que se repite continuamente hasta que se cumple una condición." },
  { word: "Boolean", definition: "A data type that has one of two possible values (usually denoted true and false).", definition_es: "Un tipo de dato que tiene uno de dos valores posibles (normalmente verdadero o falso)." },
  { word: "Class", definition: "A blueprint for creating objects, providing initial values for state and implementations of behavior.", definition_es: "Un modelo para crear objetos, proporcionando valores iniciales y comportamientos." },
  { word: "Object", definition: "An instance of a class containing data and behavior.", definition_es: "Una instancia de una clase que contiene datos y comportamientos." },
  { word: "Framework", definition: "A platform for developing software applications.", definition_es: "Una plataforma para desarrollar aplicaciones de software." },
  { word: "Library", definition: "A collection of precompiled routines that a program can use.", definition_es: "Una colección de rutinas precompiladas que un programa puede usar." },
  { word: "DNS", definition: "Domain Name System, translates domain names to IP addresses.", definition_es: "Sistema de Nombres de Dominio, traduce nombres de dominio a direcciones IP." },
  { word: "HTML", definition: "A markup language used to create web pages.", definition_es: "Un lenguaje de marcado usado para crear páginas web." },
  { word: "Agile", definition: "A method of software development with iterative progress through collaboration.", definition_es: "Un método de desarrollo de software con progreso iterativo mediante colaboración." },
  { word: "Scrum", definition: "A framework within Agile for managing work with small teams.", definition_es: "Un marco de trabajo dentro de Agile para gestionar trabajos con equipos pequeños." },
  { word: "Bit", definition: "The smallest unit of data in a computer.", definition_es: "La unidad de datos más pequeña en una computadora." },
  { word: "Cache", definition: "A hardware or software component that stores data for faster access.", definition_es: "Componente que almacena datos para acceder más rápido." },
  { word: "IoT", definition: "Internet of Things: Devices connected and communicating via the internet.", definition_es: "Internet de las Cosas: Dispositivos conectados que se comunican a través de internet." },
  { word: "DevOps", definition: "A set of practices that combines software development and IT operations.", definition_es: "Un conjunto de prácticas que combina desarrollo de software y operaciones de TI." },
  { word: "Virtual Machine", definition: "A software emulation of a computer system.", definition_es: "Una emulación por software de un sistema informático." }
];
// Renderiza la lista de palabras en el diccionario
function renderDictionary(list) {
  const ul = document.getElementById('dictionary-list');
  ul.innerHTML = '';
  list.forEach(entry => {
    const li = document.createElement('li');
    li.className = 'dictionary-item';
    li.textContent = entry.word;
    li.onclick = function() {
      showDefinition(entry);
    };
    ul.appendChild(li);
  });
}

// Muestra la definición al hacer clic en una palabra
function showDefinition(entry) {
  document.getElementById('word-title').textContent = entry.word;
  document.getElementById('word-definition').innerHTML = `
    <b>EN:</b> ${entry.definition}<br>
    <b>ES:</b> ${entry.definition_es}
  `;
  document.getElementById('definition-box').classList.remove('hidden');

  // Pronunciación en inglés
  document.getElementById('pronounce-btn').onclick = function() {
    const utter = new SpeechSynthesisUtterance(entry.word);
    utter.lang = 'en-US';
    window.speechSynthesis.speak(utter);
  };
}

// Cierra la definición
document.getElementById('close-btn').onclick = function() {
  document.getElementById('definition-box').classList.add('hidden');
};

// Busca palabras
document.getElementById('search').addEventListener('input', function(e) {
  const query = e.target.value.toLowerCase();
  const filtered = dictionary.filter(entry => entry.word.toLowerCase().includes(query));
  renderDictionary(filtered);
});

// Pantalla de inicio
const startBtn = document.getElementById('start-btn');
if (startBtn) {
  startBtn.onclick = function() {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('main-dictionary').classList.remove('hidden');
    renderDictionary(dictionary);
  };
} else {
  // Si no hay pantalla de inicio, muestra el diccionario directamente
  renderDictionary(dictionary);
}
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: ["#43cea2", "#ffd200", "#2193b0"] },
    shape: { type: "circle" },
    opacity: { value: 10, random: true },
    size: { value: 20, random: true },
    line_linked: { enable: false },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    },
    modes: {
      repulse: { distance: 80, duration: 0.4 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});
