<template>
  <div class="main-wrapper">
    <div class="navbar-bg"></div>
    <NavBar />
    <SideBar />

    <div class="main-content">
      <slot />
    </div>

    <MainFooter />
  </div>
</template>

<script setup lang="ts">
import NavBar from "@/views/components/admin/layout/NavBar.vue";
import SideBar from "@/views/components/admin/layout/SideBar.vue";
import MainFooter from "@/views/components/admin/layout/MainFooter.vue";
</script>

<style scoped>
.main-content {
  min-height: 606px;
}
</style>
