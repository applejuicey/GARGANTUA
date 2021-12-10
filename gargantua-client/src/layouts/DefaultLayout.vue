<script setup>

import {h, ref, defineEmits, computed} from 'vue'
import { useI18n } from 'vue-i18n'
import {
   NCard, NSpace, NButton, NDatePicker, NSwitch,
  zhCN, dateZhCN, useOsTheme, darkTheme,NIcon, NLayout, NLayoutHeader, NLayoutSider,NMenu,NLayoutFooter
} from 'naive-ui'
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon
} from '@vicons/ionicons5'

// define emits
const emit = defineEmits(['setTheme', 'setLanguage'])

// change theme
const setTheme = (themeName) => {
  emit('setTheme', themeName)
}

// change language
const setLanguage = (languageName) => {
  emit('setLanguage', languageName)
}

const { t } = useI18n({ useScope: 'global' })

// render icons for menu items
function renderIcon (icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

//test
const aa = computed(() => {
  return t("message.hello")
})
console.log('xx',aa.value)
// define menu items
const menuOptions = [
  {
    label: aa.value,
    key: 'hear-the-wind-sing',
    icon: renderIcon(BookIcon)
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    icon: renderIcon(BookIcon),
    disabled: true,
    children: [
      {
        label: '鼠',
        key: 'rat'
      }
    ]
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
    disabled: true,
    icon: renderIcon(BookIcon)
  },
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    icon: renderIcon(BookIcon),
    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator',
            icon: renderIcon(PersonIcon)
          },
          {
            label: '羊男',
            key: 'sheep-man',
            icon: renderIcon(PersonIcon)
          }
        ]
      },
      {
        label: '饮品',
        key: 'beverage',
        icon: renderIcon(WineIcon),
        children: [
          {
            label: '威士忌',
            key: 'whisky'
          }
        ]
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich'
          }
        ]
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes'
      }
    ]
  }
]

</script>

<template>

  <n-space vertical>
    <n-layout>
      <n-layout-header bordered>
        <img alt="LOGO" src="../assets/logo.png" style="max-height: 20px" />
        <n-card>
          <n-space>
            <n-button @click="setTheme('dark')">深色</n-button>
            <n-button @click="setTheme('light')">浅色</n-button>
          </n-space>
          <n-space vertical>
            <n-space>
              <n-button @click="setLanguage('en')">英文</n-button>
              <n-button @click="setLanguage('zh')">中文</n-button>
              <p>{{ t("message.hello") }}</p>
            </n-space>
            <n-date-picker />
          </n-space>
        </n-card>
      </n-layout-header>
      <n-layout has-sider>
        <n-layout-sider bordered show-trigger collapse-mode="width" :collapsed-width="64" :width="250" :native-scrollbar="false">
          <n-menu :options="menuOptions" :collapsed-width="64" :collapsed-icon-size="22"/>
        </n-layout-sider>
        <n-layout>
          <router-view />
        </n-layout>
      </n-layout>
      <n-layout-footer bordered>
        Footer Footer Footer
      </n-layout-footer>
    </n-layout>
  </n-space>

</template>