<template>
  <nav class="navbar border-bottom">
    <span class="navbar-brand">
      <button type="button" class="btn">
        <span class="fa fa-fire"/></button>
    </span>
    <span class="float-right">
      <button type="button" class="btn" title="最小化" @click="minimizeWindow">
        <span class="fa fa-window-minimize"/></button>
      <button type="button" class="btn" :title="maximizeRestoreTitle" @click="maximizeRestoreWindow">
        <span :class="maximizeRestoreIconClass"/></button>
      <button type="button" class="btn" title="关闭" @click="closeWindow">
        <span class="fa fa-window-close"/></button>
    </span>
  </nav>
</template>

<script>
  import { remote } from 'electron'

  const maximizeTitle = '最大化'
  const maximizeIconClass = 'fa fa-window-maximize'
  const restoreTitle = '向下还原'
  const restoreIconClass = 'fa fa-window-restore'

  export default {
    data: function () {
      return {
        maximizeRestoreTitle: remote.getCurrentWindow().isMaximized() ? restoreTitle : maximizeTitle,
        maximizeRestoreIconClass: remote.getCurrentWindow().isMaximized() ? restoreIconClass : maximizeIconClass,
      }
    },

    methods: {
      /**
       * 最小化窗口
       */
      minimizeWindow: function () {
        remote.getCurrentWindow().minimize()
      },

      /**
       * 最大化、恢复窗口
       */
      maximizeRestoreWindow: function () {
        let window = remote.getCurrentWindow()
        if (window.isMaximized()) {
          window.restore()
          this.maximizeRestoreTitle = maximizeTitle
          this.maximizeRestoreIconClass = maximizeIconClass
        } else {
          window.maximize()
          this.maximizeRestoreTitle = restoreTitle
          this.maximizeRestoreIconClass = restoreIconClass
        }
      },

      /**
       * 关闭窗口
       */
      closeWindow: function () {
        remote.getCurrentWindow().close()
      },
    },
  }
</script>

<style scoped>
  nav {
    -webkit-app-region: drag;
  }

  nav button {
    -webkit-app-region: no-drag;
  }
</style>
