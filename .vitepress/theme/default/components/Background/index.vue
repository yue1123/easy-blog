<template></template>

<script setup lang="ts">
  import { getScriptAsync } from '../../../../utils'
  import { LIGHT_THEME_CONFIG, DARK_THEME_CONFIG } from './config'
  getScriptAsync({
    key: 'particlesJS',
    src: 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js'
  }).then(() => {
    const div = document.createElement('div')
    div.style.cssText = 'position: fixed; top:0; left:0; width: 100vw; height: 100vh; z-index: 0;'
    div.id = 'particlesJS_canvas'
    document.body.append(div)
    const init = () => {
      if (window.particlesJS) {
        window.particlesJS(
          'particlesJS_canvas',
          document.querySelector('html.dark') ? DARK_THEME_CONFIG : LIGHT_THEME_CONFIG
        )
      }
    }
    if (window.particlesJS) init()
    const originFn = window.localStorage.setItem
    window.localStorage.setItem = (key, value) => {
      init()
      originFn.apply(window.localStorage, [key, value])
    }
  })
</script>

<style>
  #app {
    position: relative;
    z-index: 1;
    pointer-events: none;
  }
</style>
