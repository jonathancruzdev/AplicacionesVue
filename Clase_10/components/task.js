Vue.component('task',{
    props: {
        nombre: String,
        estado: Boolean
    },
    template: // html
            `<li>
                <span v-text="nombre"></span>
                <strong v-if="estado">  Completa  </strong>
                <strong v-else>  Pendiente  </strong>
                <button v-on:click="$emit('cambio')" class="btn btn-success btn-sm"><i class="fa-solid fa-check"></i></button>
            </li>`,
    methods:{

    }
})