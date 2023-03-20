let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #3d1f07;">Desarrollo sitios web y creo contenido en Tik Tok y YouTube.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
