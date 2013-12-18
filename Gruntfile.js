module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    mochacli: {
      options: {
        timeout: 5000,
        ignoreLeaks: false,
        ui: 'bdd',
        reporter: 'dot'
      },
      all: 'spec/**/*.js'
    }

  });

  grunt.loadNpmTasks('grunt-mocha-cli');

  grunt.registerTask('test', ['mochacli']);
  grunt.registerTask('default', ['test']);
};
