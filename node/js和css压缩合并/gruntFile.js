module.exports = function(grunt) {
   
   
   //初始化
   grunt.initConfig({
   	    package: grunt.file.readJSON('package.json'),
   	    
   	    concat:{
   	    	//设置合并提示内容
   	    	options:{
   	    		banner:'/*css/js合并*/'
   	    	},
   	    	//css合并
   	    	css:{
   	    		src:['public/css/*.css'],
   	    		dest:'public/src/all.css'
   	    	},
   	    	//js合并
   	    	dist:{
   	    		src:['public/js/*.js'],
   	    		dest:'public/src/all.js'
   	    	}
   	    },
   	    
//   	    css压缩
   	    cssmin:{
   	    	css:{
   	    		src:'public/src/all.css',
   	    		dest:'public/src/all.min.css'
   	    	}
   	    },
   	    
   	    //js压缩合并
   	    uglify:{
   	    	//target名字可以随意取名
   	    	target:{
   	    		src:'public/src/all.js',
   	    		dest:'public/src/all.min.js'
   	    	}
   	    },
   	    
   	   //watch 监控   files 和 tasks 是watch对象 里的固定属性
   	    watch: {
            files: ['public/js/*.js', 'public/css/*css'],
            tasks: ['concat','cssmin','uglify']
        }
   	    
   });
    

    //监控
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [ 'concat', 'cssmin','uglify', 'watch']);
    
   //grunt.registerTask里的'concat', 'cssmin','uglify', 'watch'  顺序要和watch 里的 tasks: ['concat','cssmin','uglify']顺序一致

}