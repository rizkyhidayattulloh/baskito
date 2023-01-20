<template layout="admin">
  <Head title="Dashboard" />

  <PageSection header="Dashboard Page" :back-link="$route('admin.dashboard')">
    <PageTitle>Dashboard</PageTitle>
    <PageDescription>Description for the page.</PageDescription>
    <InputBase v-model="name" type="text" ></InputBase>
  </PageSection>
</template>

<script setup lang="ts">
import PageDescription from "@components/admin/layout/Page/PageDescription.vue";
import PageSection from "@components/admin/layout/Page/PageSection.vue";
import PageTitle from "@components/admin/layout/Page/PageTitle.vue";
import InputBase from "@components/admin/ui/Input/InputBase.vue";

import { Head } from "@inertiajs/inertia-vue3";
import { ref } from "vue";

const name = ref("");

</script>

<style scoped></style>
