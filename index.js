module.exports = {
  loadPlugin: function() {

    module.exports = Object.assign(module.exports, {

      'migrator:migration:hook:require': function() {

        // do not register anything because node already has support for .cjs files, only need to allow db-migrate to found them
        // 
        /**
          * Return value of this hook can be either a pure value or a Promise.
          */
        return {
          extensions: 'cjs'
        };
      }
    });

    delete module.exports.loadPlugin;
  },
  name: 'es6cjs',
  hooks: [
    'migrator:migration:hook:require'
  ]
};
