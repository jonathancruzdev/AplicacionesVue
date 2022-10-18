Vue.component('encabezado',{
    props: ['titulo'],
    template: // html
            `<header class="bg-success">
                <h1 class="text-center text-light" v-text="titulo"></h1>
            </header>`
})