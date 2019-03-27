<template class="uk-container">
    <div class="uk-container">
        <!-- Passando um valor direto usando v-model, pega de data -->
        <input type="text" v-model="nome">
        <br>

        <!-- Criando botões que ao clicar chamam o metodo definido no script -->
        <button class="uk-button uk-button-default" v-on:click="decrementar">Decrementar</button>
        <p :class="campo">{{ numero }}</p>
        <button class="uk-button uk-button-default" v-on:click="incrementar">Incrementar</button>
    </div>
</template>

<script scoped>
export default {
    data(){
        return {
            numero: 0,
            nome: "Yuri Breion"
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
