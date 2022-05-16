'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('Categories', [
      {
        title: 'Города и страны',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Кино',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Спорт',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
