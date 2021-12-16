<script setup>

import TopNavBar from '../components/TopNavBar.vue'
import { h, ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  NCard, NSpace, NButton, NDatePicker, NSwitch,
  zhCN, dateZhCN, useOsTheme, darkTheme, NIcon, NLayout, NLayoutHeader, NLayoutSider, NMenu, NLayoutFooter, tabsDark,
  NTabs, NTabPane, useMessage, NDropdown, NAvatar, NText, NScrollbar
} from 'naive-ui'
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon,
    GameController,
} from '@vicons/ionicons5'

// general necessities
function renderIcon (icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
const { t } = useI18n({ useScope: 'global' })

// menu
const menuOptions = computed(() => {
  return [
    {
      label: t("layout.sider.menu.project"),
      key: 'project',
      icon: renderIcon(BookIcon),
      children: [
        {
          type: 'group',
          label: '所有项目',
          key: 'people',
          children: [
            {
              label: '新增项目',
              key: 'sheep-man',
              icon: renderIcon(PersonIcon)
            },
            {
              label: '项目列表',
              key: 'narrator',
              icon: renderIcon(PersonIcon)
            }
          ]
        },
        {
          type: 'group',
          label: '当前项目',
          key: 'beverage',
          icon: renderIcon(WineIcon),
          children: [
            {
              label: '项目信息',
              key: 'whisky',
              icon: renderIcon(PersonIcon)
            },
            {
              label: '管理项目',
              key: 'whisky1',
              icon: renderIcon(PersonIcon)
            }
          ]
        }
      ]
    },
    {
      label: t("layout.sider.menu.document"),
      key: 'document',
      icon: renderIcon(BookIcon),
      children: [
        {
          type: 'group',
          label: '通用文档',
          key: 'people',
          children: [
            {
              label: '新增文档',
              key: 'sheep-man',
              icon: renderIcon(PersonIcon)
            },
            {
              label: '文档列表',
              key: 'narrator',
              icon: renderIcon(PersonIcon)
            }
          ]
        },
        {
          type: 'group',
          label: '项目文档',
          key: 'beverage',
          icon: renderIcon(WineIcon),
          children: [
            {
              label: '新增文档',
              key: 'whisky',
              icon: renderIcon(PersonIcon)
            },
            {
              label: '通用文档',
              key: 'whisky1',
              icon: renderIcon(PersonIcon)
            }
          ]
        }
      ]
    },
    {
      label: t("layout.sider.menu.guide"),
      key: 'guide',
      icon: renderIcon(BookIcon),
      children: [
        {
          type: 'group',
          label: '通用指南',
          key: 'people',
          children: [
            {
              label: '新增指南',
              key: 'sheep-man',
              icon: renderIcon(PersonIcon)
            },
            {
              label: '指南列表',
              key: 'narrator',
              icon: renderIcon(PersonIcon)
            }
          ]
        },
        {
          type: 'group',
          label: '项目指南',
          key: 'beverage',
          icon: renderIcon(WineIcon),
          children: [
            {
              label: '新增指南',
              key: 'whisky',
              icon: renderIcon(PersonIcon)
            },
            {
              label: '指南列表',
              key: 'whisky1',
              icon: renderIcon(PersonIcon)
            }
          ]
        }
      ]
    },
    {
      label: '舞，舞，舞',
      key: 'dance-dance-dance',
      icon: renderIcon(BookIcon),
      disabled: true,
    }
  ]
})

// tabs
const currentTab = ref(1)
const allTabs = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
function handleClose (name) {
  const { value: tabs } = allTabs
  if (tabs.length === 1) {
    console.log('最后一个了')
    return
  }
  console.log('关掉 ' + name)
  const index = tabs.findIndex((v) => name === v)
  tabs.splice(index, 1)
  // 打开下一个tab
  if (currentTab.value === name) {
    currentTab.value = tabs[index]
  }
}



</script>

<template>

  <n-layout position="absolute">

    <n-layout-header bordered class="h-64px flex items-center">
      <top-nav-bar></top-nav-bar>
    </n-layout-header>

    <n-layout position="absolute" has-sider class="!inset-y-64px">

      <n-layout-sider bordered show-trigger collapse-mode="width" :collapsed-width="64" :width="250" :native-scrollbar="false">
        <n-menu :options="menuOptions" :collapsed-width="64" :collapsed-icon-size="22"/>
      </n-layout-sider>

      <n-layout>
        <n-tabs v-model:value="currentTab" type="card" closable @close="handleClose">

            <n-tab-pane v-for="tab in allTabs" :key="tab" :tab="tab.toString()" :name="tab">
              <n-scrollbar x-scrollable>

              {{ tab }}

                <router-view />
              </n-scrollbar>

            </n-tab-pane>


        </n-tabs>
      </n-layout>

    </n-layout>

    <n-layout-footer position="absolute" bordered class="h-64px grid justify-center items-center">
      <p>{{ t('layout.footer.introduction') }}</p>
    </n-layout-footer>

  </n-layout>

</template>