const menu = new Vue({
    el: '#app-nav',
    data: {
        nombre: 'No logueado',
        logueado: false,
        id_rol: 0
    },
    methods:{
        login: function(id_rol){
            // id_rol 1 : usuario; 
            // id_rol 2 : Admin
            if(id_rol == 1){
                this.nombre = 'Usuario';
                this.id_rol = 1;
                this.logueado = true;
            } else {
                this.nombre = 'Administrador';
                this.id_rol = 2;
                this.logueado = true;
            }
        },
        salir: function(){
            this.nombre = 'No logueado';
            this.logueado = false;
        }
    }
})