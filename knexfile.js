// Update with your config settings.

module.exports = {

  // development: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'reduxlogin',
  //     user:     'yuanchao',
  //     password: ''   //mac homebrew命令安装默认用户名就是当前用户，无密码。
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  development: {
    client: 'postgresql',
    connection: {
      database: 'redux_login',
      user:     'egova',
      password: 'root'   // 新建的用户和数据库，参考:tip14笔记。
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
