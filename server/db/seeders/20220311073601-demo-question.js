'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('Questions', [{
      text: 'Страна утренней свежести?',
      answer: 'Корея',
      category_id: 1,
      point: 200,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      text: 'Самый сухой континент?',
      answer: 'Антарктида',
      category_id: 1,
      point: 400,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      text: 'Столица Лихтенштейна?',
      answer: 'Вадуц',
      category_id: 1,
      point: 600,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      text: 'Родина олимпийских игр?',
      answer: 'Греция',
      category_id: 1,
      point: 800,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      text: 'Столица Калмыкии?',
      answer: 'Элиста',
      category_id: 1,
      point: 1000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
      {
        text: 'Какого цвета была таблетка, которую принимает Нео в фильме “Матрица”?',
        answer: 'Красный',
        category_id: 2,
        point: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        text: 'Этот признанный режиссер, лауреат премии “Оскар”, снял фильмы “Делай ноги”, “Бейб: Поросенок в городе” и “Безумный Макс: Дорога ярости”.',
        answer: 'Джордж Миллер',
        category_id: 2,
        point: 400,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        text: 'В сиквеле какого праздничного фильма снялся Дональд Трамп?',
        answer: 'Один дома 2',
        category_id: 2,
        point: 600,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        text: 'Какой герой мультфильма живет в ананасе под водой?',
        answer: 'Губка Боб',
        category_id: 2,
        point: 800,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        text: 'Какие существа, живущие на Эндоре, помогли повстанцам победить вторую Звезду Смерти в "Звездных войнах"?',
        answer: 'Эвоки',
        category_id: 2,
        point: 1000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'Национальный вид спорта Канады?',
        answer: 'Лакросс',
        category_id: 3,
        point: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        text: 'Какой боксер был известен как “The Greatest” и “The People’s Champion”?',
        answer: 'Мухаммед Али',
        category_id: 3,
        point: 400,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        text: 'Сколько минут длится матч по регби?',
        answer: '80',
        category_id: 3,
        point: 600,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        text: 'Единственная страна, которая принимала участие во всех чемпионатах мира по футболу?',
        answer: 'Бразилия',
        category_id: 3,
        point: 800,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        text: 'В какой вид спорта играют в "Гарри Поттере"?',
        answer: 'Квиддич',
        category_id: 3,
        point: 1000,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  async down(queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Questions', null, {});
  }
};
