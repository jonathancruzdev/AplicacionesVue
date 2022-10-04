// Componete global
Vue.component('caja',{
    data: function(){
        return {
            titulo: 'Nombre de la caja'
        }
    },
    template: '<div>  <h2>{{titulo}}</h2>  </div>'
})



const app = new Vue({
    el:'#app',
    data: {
        lista: [
            {
                nombre: 'teclado mecanico',
                precio: 19000,
                foto: 'https://http2.mlstatic.com/D_NQ_NP_945291-MLA49692414798_042022-O.webp'
            },
            {
                nombre: 'mouse',
                precio: 3000,
                foto: 'https://http2.mlstatic.com/D_NQ_NP_918568-MLA32146214305_092019-V.webp'
            },
            {
                nombre: 'parlante',
                precio: 2000,
                foto: ''
            },
        ]
    },
    methods: {

    }
})