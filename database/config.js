//db user: mern_user
//de pass: NrEvsdGFJAa0Rs8U

const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("DB online");
  } catch (error) {
    console.log(error);
    throw new Error("Error en inicializar BBDD");
  }
};

module.exports = {
  dbConnection,
};
