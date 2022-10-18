const app = new Vue({
    el: '#app',
    data:{
        tareas: [
            {
                nombre: 'Estudiar CSS',
                estado: false
            },
            {
                nombre: 'Hacer ejercicios',
                estado: true
            },
            {
                nombre: 'Saliar a caminar',
                estado: false
            },
        ]
    },
    methods:{
        cambiarEstado:function(tarea){
            tarea.estado = !tarea.estado;
            console.log(tarea);

        }
    }
})