<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Mensagem msg="Aqui é a minha propriedade"/>
    <Youtube url="https://player.vimeo.com/video/322667805"/>
    <Arquivo/>
    <Altera/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Mensagem from './components/Mensagem.vue'
import Youtube from './components/Youtube.vue'
import Arquivo from './components/Arquivo.vue'
import Altera from './components/Altera.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Mensagem,
    Youtube,
    Arquivo,
    Altera
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
