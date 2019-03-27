<template>
    <div>
        <button v-on:click="decrementar">Decrementar</button>
        <p>{{ numero }}</p>
        <button v-on:click="incrementar">Incrementar</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            numero: 0
        }
    }, 
    methods: {
        decrementar() {
            if (this.numero > 0) {
                this.numero = this.numero - 1;
            } else {
                alert("Não é possível decrementar de zero")
            }
        }, 
        incrementar() {
            this.numero = this.numero + 1;
        } 
    }
}
</script>

<style>

</style>
