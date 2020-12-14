module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: '',
  DB: "ventk2",
  dialect: "mysql",
  PORT: process.env.PORT || 5000,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
