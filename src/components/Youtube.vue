<template>
    <iframe :src="url" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</template>

<script>
export default {
    name: 'Youtube',
    props: {
        url: String, 
        altura: Number,
        largura: Number
    }
}
</script>

<style>
iframe {
    margin: 10px
}
</style>
