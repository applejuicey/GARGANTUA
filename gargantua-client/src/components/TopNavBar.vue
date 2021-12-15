<script setup>

import { computed, h } from 'vue';
import { useI18n } from 'vue-i18n'
import {
  NAvatar, NButton,
  NDropdown, NIcon, NText
} from 'naive-ui'
import {
  ColorPalette, Language,
  Person, Settings
} from '@vicons/ionicons5'

// general necessities
function renderIcon (icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
const { t } = useI18n({ useScope: 'global' })

// topnav
function userDropdownHeader () {
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
          h('div', null, [h(NText, { depth: 2 }, { default: () => '打工仔' })]),
          h('div', { style: 'font-size: 12px;' }, [
            h(
                NText,
                { depth: 3 },
                { default: () => '毫无疑问，你是办公室里最亮的星' }
            )
          ])
        ])
      ]
  )
}

const userOptions = [
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
    label: '处理群消息 342 条',
    key: 'stmt1'
  },
  {
    label: '被 @ 58 次',
    key: 'stmt2'
  },
  {
    label: '加入群 17 个',
    key: 'stmt3'
  }
]

const settingsOptions = computed(() => {
  return [
    {
      label: t('layout.topnav.setTheme'),
      icon: renderIcon(ColorPalette),
      key: 'setTheme',
      children: [
        {
          label: t('layout.topnav.dark'),
          key: 'dark'
        },
        {
          label: t('layout.topnav.light'),
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
          label: t('layout.topnav.english'),
          key: 'english'
        },
        {
          label: t('layout.topnav.chinese'),
          key: 'chinese'
        },
      ]
    },
    {
      type: 'divider',
      key: 'divider1'
    },
  ]
})

const handleUserSelect = () => {

}

</script>

<template>

  <div class="ml-10 flex items-center">
    <img alt="LOGO" src="../assets/logo.png" class="max-h-35px" />
  </div>

  <div class="ml-auto mr-5 flex items-center">
    <n-dropdown :options="userOptions" @select="handleUserSelect" placement="bottom-end">
      <n-button text class="mr-4">
        <template #icon>
          <n-icon>
            <person />
          </n-icon>
        </template>
        User
      </n-button>
    </n-dropdown>
    <n-dropdown :options="settingsOptions" @select="handleSettingsSelect" placement="bottom-end" >
      <n-button text class="mr-4">
        <template #icon>
          <n-icon>
            <settings />
          </n-icon>
        </template>
        Settings
      </n-button>
    </n-dropdown>
  </div>

</template>
