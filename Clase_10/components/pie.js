Vue.component('pie', {
    props:['descripcion'],
    template: // html
            `<footer class="bg-primary text-light">
                    <p v-text="descripcion">  </p>
                </footer>`
})