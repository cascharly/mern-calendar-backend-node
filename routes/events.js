/* 
Event Routes
/api/events
*/
const { Router } = require("express");
const router = Router();

const { validarJWT } = require("../middlewares/validar-jwt");
const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const { isDate } = require("../helpers/isDate");

// Todas tienen que validarJWT
router.use(validarJWT);

// Obtener eventos
router.get("/", getEventos);

// Crear nuevo evento
router.post(
  "/",
  [
    check('title','El titulo es obligatorio').not().isEmpty(),
    check('start','Fecha de inicio es obligatoria').custom(isDate),
    check('end','Fecha de finalizacion es obligatoria').custom(isDate),
    validarCampos
  ],
   crearEvento
   );

//Actualizar Evento
router.put("/:id", actualizarEvento);

//Borrar Evento
router.delete("/:id", eliminarEvento);

module.exports = router;
