module.exports = function (grunt) {

    grunt.initConfig({
        uglify: {
            options: {
                "separator": ";"
            },
            my_target: {
                files: {
                    "dist/sms-link.min.js": [
                        "src/js/**/*.js"
                    ]
                }
            }
        },
        copy: {
            main: {
                files: [
                    {src: ['dist/sms-link.min.js'], dest: 'sms-link.min.js', filter: 'isFile'}
                ]
            }
        },
        watch: {
            uglify: {
                files: ['src/**/*.js'],
                tasks: ['uglify', 'copy']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['watch']);

};