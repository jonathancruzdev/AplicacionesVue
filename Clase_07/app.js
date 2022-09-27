const app = new Vue({
    el: '#app',
    data: {
        producto: '',
        lista: ['Coca cola']
    },
    methods:{
        agregar: function(){
            if( this.producto.trim() != ''){
                this.lista.push( this.producto );
                this.producto = '';
            }
        },
        borrarTodo: function(){
            this.lista = [];
        }
    }
})