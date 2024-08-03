

let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

// Usar el punto es para llamar a una propiedad o a una acción del objeto.
// Acciones se distinguen por los paréntesis ()
typewriter
  .pauseFor(2500)
  .typeString('Jasidh Ruby')
  .pauseFor(300)
  .deleteAll()
  .typeString('Desarrolladora Frontend JR')
  .pauseFor(1000)
  .start();



let frase = document.getElementById('frase');

let typewriterFrase = new Typewriter(frase, {
loop: true,
delay: 75,
});
  
  // Usar el punto es para llamar a una propiedad o a una acción del objeto.
  // Acciones se distinguen por los paréntesis ()
  typewriterFrase
    .pauseFor(2500)
    .typeString("I cry a lot but I am so productive, It's an art")
    .pauseFor(300)
    .deleteAll()
    .typeString('-Taylor Swift')
    .pauseFor(1000)
    .start();