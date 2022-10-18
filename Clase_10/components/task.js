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
            </li>`
})