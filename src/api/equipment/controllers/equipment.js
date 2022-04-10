"use strict";

/**
 *  equipment controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::equipment.equipment",
  ({ strapi }) => ({
    async order(ctx) {
      const { id } = ctx.params;
      const { email, phone, fio } = JSON.parse(ctx.request.body);
      try {
        await strapi
          .plugin("email")
          .service("email")
          .send({
            to: "micbmstu@yandex.ru",
            from: "micbmstu@yandex.ru",
            subject: "Запрос на оборудование",
            text: `Поступил запрос на оборудование с id: ${id}. Имя: ${fio}. Телефон: ${phone}`,
          });
        await strapi.plugin("email").service("email").send({
          to: email,
          from: "micbmstu@yandex.ru",
          subject: "Запрос на оборудование",
          text: `Ваш запрос на оборудование был отправлен модераторам. Скоро с вами свяжутся.`,
        });
        ctx.status = 200;
      } catch (error) {
        ctx.status = 502;
        ctx.body = error;
      }
    },
  })
);
