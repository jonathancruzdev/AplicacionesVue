Vue.component('task',{
    props: {
        nombre: String,
        estado: Boolean
    },
    template: // html
            `<li>
                <strong v-text="nombre" v-bind:class="{'text-success': estado, 'text-danger': !estado }"></strong>
                <span v-if="estado">  Completa  </span>
                <span v-else>  Pendiente  </span>
                <button v-on:click="$emit('cambio')" class="btn btn-success btn-sm"><i class="fa-solid fa-check"></i></button>
            </li>`,
    methods:{

    }
})