const defineProcess = (req) => {
  console.log("deberian haber cambiado los parametros");
  let searching = false;
  let filtering = false;
  let ordering = false;

  const order = JSON.parse(req.query.order);
  const filter = JSON.parse(req.query.filter);

  if (req.query.name) searching = { search: true, value: req.query.name };

  if (order.orderBy === "name")
    ordering = { order: true, value: order.orderType };

  if (filter.activity) filtering = { filter: true, value: filter.activity };

  console.log(searching, filtering, ordering);
  return { searching, filtering, ordering };
};

module.exports = defineProcess;
