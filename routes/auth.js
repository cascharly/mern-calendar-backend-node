// Rutas de Usuarios
// host + /api/auth

const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  //   console.log('Se requiere /');
  res.json({
    ok: true,
  });
});

module.exports = router;
