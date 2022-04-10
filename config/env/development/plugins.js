module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        service: "yandex",
        host: env("SMTP_HOST", "smtp.yandex.ru"),
        port: env("SMTP_PORT", 587),
        secure: env("SMTP_PORT", 587) === 465,
        auth: {
          user: env("SMTP_USERNAME"),
          pass: env("SMTP_PASSWORD"),
        },
      },
      settings: {
        defaultFrom: "micbmstu@yandex.ru",
      },
    },
  },
});
