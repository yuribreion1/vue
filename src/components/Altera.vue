<template>
    <div>
        <button v-on:click="decrementar">Decrementar</button>
        <p :class="campo">{{ numero }}</p>
        <button v-on:click="incrementar">Incrementar</button>
    </div>
</template>

<script scoped>
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
    }, 
    computed: {
        campo(){
            return this.numero > 0 ? "positivo" : "negativo";
        }
    }
}
</script>

<style>
    .positivo {
        color: blue;
    }
    .negativo {
        color: red;
    }
</style>
