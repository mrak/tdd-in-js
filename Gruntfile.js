module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    mochacli: {
      options: {
        timeout: 5000,
        ignoreLeaks: false,
        ui: 'bdd',
        reporter: 'spec'
      },
      all: 'test/**/*.js'
    },
    watch: {
      files: ['**/*.js'],
      tasks: ['mochacli']
    }

  });

  grunt.loadNpmTasks('grunt-mocha-cli');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('test', ['mochacli']);
  grunt.registerTask('default', ['test']);
};
