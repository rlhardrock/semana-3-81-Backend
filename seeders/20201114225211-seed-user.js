'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', [{
            name: 'carlos',
            email: 'ejemplo@gmail.com',
            password: '$2y$12$L.nz1NhtSX12EQcOuZhnfe5cn81DbmhKRtZQr5lcY8nGDOEqPdNKe', //micontraseña
            rol: 'web master',
            status: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users', null, {});

    }
};