module.exports = {
  development: {
    dialect: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "rodrigo0",
    database: "api",
    operatorAliases: false,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true
    }
  }
};
