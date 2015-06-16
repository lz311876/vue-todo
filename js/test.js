new Vue({
			el:'#tasks',

			data:{
				tasks:[
					{body:'Example1',complete:false },
					{body:'Example2',complete:true}
				],
				myTask:''
				
			},

			filters:{
				f:function(tasks){
					return tasks.filter(function(task){
						return ! task.complete;
					});
				},
				nof:function(tasks){
					return tasks.filter(function(task){
						return ! task.complete;
					});
				}	
			},

			methods:{
				add:function(e){
					e.preventDefault();

					this.tasks.push({
						 body : this.myTask,
						 complete: false
					});

					this.myTask = '';
				},

				complete:function(task){
					task.complete = true;
				},
				
				remove: function(task){
					this.tasks.$remove(task);
				}

			}
		});
