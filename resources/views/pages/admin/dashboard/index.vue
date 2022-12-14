<template layout="admin">
  <PageSection header="Dashboard Page" :back-link="$route('admin.dashboard')">
    <PageTitle>Dashboard</PageTitle>
    <PageDescription>Description for the page.</PageDescription>
  </PageSection>
</template>

<script setup lang="ts">
import PageDescription from "@/views/components/admin/layout/Page/PageDescription.vue";
import PageSection from "@/views/components/admin/layout/Page/PageSection.vue";
import PageTitle from "@/views/components/admin/layout/Page/PageTitle.vue";
</script>

<style scoped></style>
