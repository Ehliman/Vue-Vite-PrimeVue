<template>
  <div class="layout-content-wrapper">
    <div class="layout-content">
      <Menubar :model="items" />
      <br>
      <router-view/>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          label: 'Ana Sayfa',
          icon: 'pi pi-fw pi-home',
          to: '/'
        },
        {
          label: 'Açık Siparişler',
          icon: 'pi pi-fw pi-home',
          to: '/openorders'
        },
        {
          label: 'Çıkış',
          icon: 'pi pi-fw pi-power-off'
        }
      ]
    }
  },
  methods: {
    isUserAdmin() {
      return true;
    }
  }
}
</script>

<style lang="scss" scoped>

.layout-content {
  padding: 1px 22px;
  flex: 1 1 auto;
}
</style>
