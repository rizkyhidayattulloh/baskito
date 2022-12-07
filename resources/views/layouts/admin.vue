<template>
  <div class="main-wrapper">
    <div class="navbar-bg"></div>
    <nav-bar />
    <side-bar />

    <div class="main-content">
      <slot />
    </div>

    <main-footer />
  </div>
</template>

<script setup lang="ts">
import NavBar from "@/views/components/admin/layout/nav-bar.vue";
import SideBar from "@/views/components/admin/layout/side-bar.vue";
import MainFooter from "@/views/components/admin/layout/main-footer.vue";
</script>

<style scoped>
.main-content {
  min-height: 606px;
}
</style>
