module.exports = {
  routes: [
    {
      // Path defined with a URL parameter
      method: "POST",
      path: "/equipment/order/:id",
      handler: "equipment.order",
      auth: false,
    },
  ],
};
