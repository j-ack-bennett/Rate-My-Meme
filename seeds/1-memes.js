exports.seed = function (knex, Promise) {
  return knex('memes').insert([
    {id: 1, url: "/choke.jpg", submitted_by: "jack", category_id: 3},
    {id: 2, url: "/idontrecognisethisfurniture.jpg", submitted_by: "jack", category_id: 3},
    {id: 3, url: "/lasagne.jpg", submitted_by: "jack", category_id: 3},
    {id: 4, url: "/pcbuild.jpg", submitted_by: "jack", category_id: 3},
    {id: 5, url: "/twosmirnofs.jpg", submitted_by: "jack", category_id: 3},
    {id: 6, url: "/whyareyourunning.jpg", submitted_by: "jack", category_id: 3},
    {id: 7, url: "/deadinside.jpg", submitted_by: "lara", category_id: 2},
    {id: 8, url: "/netflix.jpg", submitted_by: "lara", category_id: 2},
    {id: 9, url: "/neverknownhappiness.jpg", submitted_by: "lara", category_id: 2},
    {id: 10, url: "/po.jpg", submitted_by: "lara", category_id: 2},
    {id: 11, url: "/rosesarered.jpg", submitted_by: "lara", category_id: 2},
    {id: 12, url: "/weightedblanket.jpg", submitted_by: "lara", category_id: 2},
  ])
}
