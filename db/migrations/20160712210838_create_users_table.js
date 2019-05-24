exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('users', function (table) {
    table.increments('id');
    table.string('name');
    table.string('email');
  })
  .createTable('cookies', function (table) {
    table.integer('cookieid');
    table.biginteger('usersID').references('id').inTable('users');
  })
  .createTable('events', function (table) {
    table.increments('id');
    table.string('title');
    table.string('description', [500]);
    table.string('location');
    table.string('url');
    table.biginteger('creatorID').references('id').inTable('users');
  })
    .createTable('date', function (table) {
    table.increments('id');
    table.biginteger('eventID').references('id').inTable('events');
    table.string('date');
  })
    .createTable('time', function (table) {
    table.increments('id');
    table.biginteger('dateID').references('id').inTable('date');
    table.string('start_time');
  })
  .createTable('options', function (table) {
    table.increments('id');
    table.biginteger('users_id').references('id').inTable('users');
    table.biginteger('events_id').references('id').inTable('events');
    table.string('start_date');
    table.string('start_time');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('time').dropTable('date').dropTable('options').dropTable('events').dropTable('cookies').dropTable('users');
};
