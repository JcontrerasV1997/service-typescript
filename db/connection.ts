import {Sequelize} from 'sequelize';

const db = new Sequelize('prueba-types','root', '', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false;
});

export default db;