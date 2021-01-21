exports.seed = function (knex, Promise) {
  return knex('memes').insert([
    {id: 1, url: "/choke.jpg", submitted_by: "jack", category_id: 3},
    {id: 2, url: "/idontrecognisethisfurniture.jpg", submitted_by: "jack", category_id: 3},
    {id: 3, url: "/lasagne.jpg", submitted_by: "jack", category_id: 3},
    {id: 4, url: "/pcbuild.jpg", submitted_by: "jack", category_id: 3},
    {id: 5, url: "/twosmirnofs.jpg", submitted_by: "jack", category_id: 3},
    {id: 6, url: "/whyareyourunning.jpg", submitted_by: "jack", category_id: 3},
  ])
}
