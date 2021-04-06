const { response } = require("express");
const Evento = require("../models/Evento");

const getEventos = async (req, res = response) => {
  const eventos = await Evento.find().populate('user','name')

  res.json({
    ok: true,
    eventos
  });
};
const crearEvento = async (req, res = response) => {
  // verificar que tenga el evento
  // console.log(req.body);

  const evento = new Evento(req.body);

  try {
    evento.user = req.uid;
    const eventoGuardado = await evento.save();
    res.json({
      ok: true,
      evento: eventoGuardado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el admin",
    });
  }
};
const actualizarEvento = (req, res = response) => {
  res.json({
    ok: true,
    msg: "Actualizar evento",
  });
};
const eliminarEvento = (req, res = response) => {
  res.json({
    ok: true,
    msg: "Eliminar evento",
  });
};

module.exports = {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
};
