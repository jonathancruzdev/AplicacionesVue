const app = new Vue({
    el: '#app',
    data: {
        taskName: '',
        tasks: []
    },
    computed: {
        tasksCount(){
            return this.tasks.length;
        }
    },
    methods: {
        addTask(){
            if( this.taskName.trim() != '' ){
                this.tasks.push({
                    name: this.taskName,
                    complet: false
                })
                this.taskName = '';
            }
        }
    }
})