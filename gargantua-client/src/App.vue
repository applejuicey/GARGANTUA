<script setup>

import { ref, onBeforeMount, computed } from 'vue'
import { useRoute } from 'vue-router'
import defaultLayout from './layouts/DefaultLayout.vue'
import { NConfigProvider, zhCN, dateZhCN, useOsTheme, darkTheme } from 'naive-ui'
import { useI18n } from 'vue-i18n'

// set layout according to route meta info
const route = useRoute()
const layout = computed(() => {
  console.log(route.meta.layout)
  return (route.meta.layout || defaultLayout)
})

onBeforeMount(() => {
  // set default theme according to os preference
  theme.value = useOsTheme().value === 'dark'? darkTheme : null
})

// change theme
const theme = ref(null)
function setTheme (themeName) {
  if (themeName === 'dark') {
    theme.value = darkTheme
  }
  else if (themeName === 'light') {
    theme.value = null
  }
  else {
    console.error('no such theme')
  }
}

// change language
const uiLocale = ref(null)
const uiDateLocale = ref(null)
const { locale: i18nLocale } = useI18n({ useScope: 'global' })
function setLanguage (languageName) {
  if (languageName === 'zh') {
    uiLocale.value = zhCN
    uiDateLocale.value = dateZhCN
    i18nLocale.value = 'zh'
  }
  else if (languageName === 'en') {
    uiLocale.value = null
    uiDateLocale.value = null
    i18nLocale.value = 'en'
  }
  else {
    console.error('no such language')
  }
}

</script>

<template>

  <n-config-provider :theme="theme" :locale="uiLocale" :date-locale="uiDateLocale">

    <component :is="layout" @setTheme="setTheme" @setLanguage="setLanguage">
      <slot />
    </component>

  </n-config-provider>

</template>

<style>

#app {
  font-family: v-mono, v-sans, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
