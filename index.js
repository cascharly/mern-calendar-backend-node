const express = require("express");

// crear servidor de express
const app = express();


//Rutas
app.get('/', (req,res) => {
//   console.log('Se requiere /');
  res.json({
      ok: true
  })
}  ) 

// escuchar peticiones
app.listen(4000, () => {
  console.log(`Servidor corriendo en puerto ${4000}`);
});
