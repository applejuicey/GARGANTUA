<script setup>

import { ref, onBeforeMount, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import defaultLayout from './layouts/DefaultLayout.vue'
import { NConfigProvider, zhCN, dateZhCN, useOsTheme, darkTheme } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import { useStore } from "vuex";

// general necessities
const store = useStore()

// set layout according to route meta info
const route = useRoute()
const layout = computed(() => {
  console.log('currentlayout', route.meta.layout)
  return (route.meta.layout || defaultLayout)
})

onBeforeMount(() => {
  // set default theme according to os preference
  const osPreferTheme = useOsTheme().value
  store.commit('changeTheme', { themeName: osPreferTheme })
  theme.value = osPreferTheme === 'dark'? darkTheme : null
})

const theme = ref(null);
// change theme according to vuex
watch(
    () => store.state.themeName,
    (curVal, oldVal) => {
      if (curVal === 'dark') {
        theme.value = darkTheme
      }
      else if (curVal === 'light') {
        theme.value = null
      }
      else {
        console.error('no such theme')
        theme.value = null
      }
    }
)

// change language according to vuex
const uiLocale = ref(null)
const uiDateLocale = ref(null)
const { locale: i18nLocale } = useI18n({ useScope: 'global' })
watch(
    () => store.state.languageName,
    (curVal, oldVal) => {
      if (curVal === 'en') {
        uiLocale.value = null
        uiDateLocale.value = null
        i18nLocale.value = 'en'
      }
      else if (curVal === 'zh') {
        uiLocale.value = zhCN
        uiDateLocale.value = dateZhCN
        i18nLocale.value = 'zh'
      }
      else {
        console.error('no such language')
        theme.value = null
      }
    }
)

</script>

<template>

  <n-config-provider :theme="theme" :locale="uiLocale" :date-locale="uiDateLocale">

    <component :is="layout">
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
