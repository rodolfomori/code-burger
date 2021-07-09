module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'codeburger',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}
