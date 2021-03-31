const router = require("./auth");



// Obtener eventos
router.get('/', getEventos)

// Crear nuevo evento
router.post('/', crearEvento)

//Actualizar Evento
router.put('/:id', actualizarEvento)

//Borrar Evento
router.delete('/:id', eliminarEvento)