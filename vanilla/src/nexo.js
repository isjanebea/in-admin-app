const nexo = require('@tiendanube/nexo').default;

const nexoClient =  nexo.create({
  clientId: '5205',
  log: true,
});

module.exports = nexoClient;
