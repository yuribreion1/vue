<template>
    <div class="bloco">
        {{ msg }}
    </div>
</template>

<script>
export default {
    name: 'Mensagem',
    props: {
        msg: String
    }
}
</script>

<style>
.bloco {
    color: red;
}
</style>
