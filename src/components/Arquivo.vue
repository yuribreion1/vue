<template>
    <div v-if="this.idade < 32" v-on:click="clicou">
        <p class="nome-arquivo">{{ nome }}</p>
        <strong><p class="idade-arquivo"> {{ idade }}</p></strong>
    </div>
</template>

<script>
export default {
    data(){
        return {
            nome: "Um nome qualquer",
            idade: 30
        }
    },
    methods: {
        clicou() {
            alert("Alerta de mensagem");
            this.idade = this.idade + 1;
        }
    }
}
</script>

<style>
    .nome-arquivo {
        color: blueviolet;
    }
    .idade-arquivo {
        color: cornflowerblue;
    }
</style>
