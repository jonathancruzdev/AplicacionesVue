const app = new Vue({
    el: '#app',
    data: {
        palabraFiltro: '',
        producto: '',
        lista: ['Coca cola', 'alfajor', 'galletita', 'jugo']
    },
    computed: {
        cantidadProducto(){
            return this.lista.length
        },
        productosFiltrados(){
            let array =  this.lista.filter( item => item.toLowerCase().includes(this.palabraFiltro.toLowerCase() )  )
            console.log(array);
            return array;
        }
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