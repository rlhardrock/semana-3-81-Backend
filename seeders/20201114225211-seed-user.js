'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', [{
            name: 'carlos',
            email: 'ejemplo@gmail.com',
            password: '$2y$12$btrZW0vkLSxB4NlmqNZx6u7groPGgCIphz.NftZuEQP/C2Vcfb7Wq', //perrito
            profession: 'ingeniero zootecnista',
            rol: 'database administrator',
            vehiculo: 'honda-civic',
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users', null, {});

    }
};