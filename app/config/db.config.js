module.exports = {
  HOST: "198.71.225.62",
  USER: "DurbarDB",
  PASSWORD: 'pinkworld2050',
  DB: "DurbarDB",
  dialect: "mysql",
  PORT: process.env.PORT || 3306,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};