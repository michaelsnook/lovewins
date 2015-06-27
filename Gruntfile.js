module.exports = function(grunt) {
grunt.loadNpmTasks('grunt-contrib-coffee');
  // Project configuration.
  grunt.initConfig({
    coffee: {
      compile: {
        files: {
          'public/js/fBomb.js': ['assets/coffee/coffeeBomb.coffee']
        }
      }
    }
  });
  // Default task.
  grunt.registerTask('default', 'coffee');
};
