<script setup>

import { computed, h } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'
import {
  NAvatar, NButton, NDropdown, NIcon, NText
} from 'naive-ui'
import {
  ColorPalette, Language, Person, Settings, Sunny, Moon, Text,
  FileTrayFull, ListCircle, DocumentText, HelpCircle
} from '@vicons/ionicons5'

// general necessities
function renderIcon (icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
const { t } = useI18n({ useScope: 'global' })
const store = useStore()

// user dropdown
const userDropdownHeader = () => {
  return h(
      'div',
      {
        style: 'display: flex; align-items: center; padding: 8px 12px;'
      },
      [
        h(NAvatar, {
          round: true,
          style: 'margin-right: 12px;',
          src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/demo1.JPG'
        }),
        h('div', null, [
          h('div', null, [h(NText, { depth: 2 }, { default: () => '用户名' })]),
          h('div', { style: 'font-size: 12px;' }, [
            h(
                NText,
                { depth: 3 },
                { default: () => '简介简介简介简介简介简介' }
            )
          ])
        ])
      ]
  )
}
const userOptions = computed(() => {
  return [
    {
      key: 'header',
      type: 'render',
      render: userDropdownHeader
    },
    {
      key: 'header-divider',
      type: 'divider'
    },
    {
      label: t('layout.topnav.myProfile'),
      icon: renderIcon(FileTrayFull),
      key: 'myProfile'
    },
    {
      label: t('layout.topnav.myProjects'),
      icon: renderIcon(ListCircle),
      key: 'myProjects'
    },
    {
      label: t('layout.topnav.myDocuments'),
      icon: renderIcon(DocumentText),
      key: 'myDocuments'
    },
    {
      label: t('layout.topnav.myGuides'),
      icon: renderIcon(HelpCircle),
      key: 'myGuides'
    }
  ]
})
const handleUserSelect = (key) => {
  console.log(key)
}

// settings dropdown
const settingsOptions = computed(() => {
  return [
    {
      label: t('layout.topnav.setTheme'),
      icon: renderIcon(ColorPalette),
      key: 'setTheme',
      children: [
        {
          label: t('layout.topnav.dark'),
          icon: renderIcon(Sunny),
          key: 'dark'
        },
        {
          label: t('layout.topnav.light'),
          icon: renderIcon(Moon),
          key: 'light'
        },
      ]
    },
    {
      label: t('layout.topnav.setLanguage'),
      icon: renderIcon(Language),
      key: 'setLanguage',
      children: [
        {
          label: t('layout.topnav.en'),
          icon: renderIcon(Text),
          key: 'en'
        },
        {
          label: t('layout.topnav.zh'),
          icon: renderIcon(Language),
          key: 'zh'
        },
      ]
    },
    {
      type: 'divider',
      key: 'divider1'
    },
  ]
})
const handleSettingsSelect = (key) => {
  if (['dark', 'light'].includes(key)) {
    store.commit('changeTheme', { themeName: key })
  }
  else if (['en', 'zh'].includes(key)) {
    store.commit('changeLanguage', { languageName: key })
  }
  else {
    console.error('no such theme')
  }
}

</script>

<template>

  <div class="ml-10 flex items-center">
    <img alt="LOGO" src="../assets/logo.png" class="max-h-35px" />
  </div>

  <div class="ml-auto mr-5 flex items-center">
    <n-dropdown :options="userOptions" trigger="hover" @select="handleUserSelect" placement="bottom-end">
      <n-button text class="mr-4">
        <template #icon>
          <n-icon>
            <person />
          </n-icon>
        </template>
        {{ t('layout.topnav.user') }}
      </n-button>
    </n-dropdown>
    <n-dropdown :options="settingsOptions" trigger="hover" @select="handleSettingsSelect" placement="bottom-end" >
      <n-button text class="mr-4">
        <template #icon>
          <n-icon>
            <settings />
          </n-icon>
        </template>
        {{ t('layout.topnav.settings') }}
      </n-button>
    </n-dropdown>
  </div>

</template>
