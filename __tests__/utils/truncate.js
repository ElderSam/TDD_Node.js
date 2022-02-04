
const { sequelize } = require('../../src/app/models');

// loop through all database tables (sqlite) and delete all
module.exports = () => {
    return Promise.all(Object.keys(sequelize.models).map(key => {
        return sequelize.models[key].destroy({ truncate: true, force: true })
    }));
}