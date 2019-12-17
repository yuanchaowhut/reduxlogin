// up方法用于创建表
exports.up = function (knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments();   // 自增的id
        table.string('username').notNullable().unique();
        table.string('email').notNullable().unique();
        table.string('password_digest').notNullable();
        table.timestamps();
    })
};

// down 方法用于删除表
exports.down = function (knex) {
    return knex.schema.dropTable('users')
};
