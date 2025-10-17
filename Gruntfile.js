module.exports = function (grunt) {
  // Carrega automaticamente todas as tasks do package.json
require("load-grunt-tasks")(grunt);

  // Configuração principal
grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    clean: {
    dist: ["dist/*"]
    },

    less: {
    dev: {
        options: { sourceMap: true },
        files: {
        "dist/styles.css": "src/less/main.less"
        }
    },
    prod: {
        options: { compress: true },
        files: {
        "dist/styles.min.css": "src/less/main.less"
        }
    }
    },

    concat: {
    js: {
        src: ["src/js/**/*.js"],
        dest: "dist/bundle.js"
    }
    },

    uglify: {
    prod: {
        options: { sourceMap: true },
        files: {
        "dist/bundle.min.js": ["dist/bundle.js"]
        }
    }
    },

    watch: {
    less: {
        files: ["src/less/**/*.less"],
        tasks: ["less:dev"],
        options: { spawn: false }
    },
    js: {
        files: ["src/js/**/*.js"],
        tasks: ["build-js"],
        options: { spawn: false }
    }
    }
});

  // Tarefas registradas
grunt.registerTask("build-js", ["concat:js", "uglify:prod"]);
grunt.registerTask("build", ["clean", "less:prod", "build-js"]);
grunt.registerTask("default", ["clean", "less:dev", "build-js", "watch"]);
};
