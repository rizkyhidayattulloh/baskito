<!-- eslint-disable vue/no-v-html -->
<template>
  <nav v-if="links.length > 3">
    <ul class="pagination">
      <li
        v-for="(link, index) in links"
        :key="index"
        class="page-item"
        :class="{ active: link.active, disabled: link.url === null }"
      >
        <Link class="page-link" :href="link.url ?? '#'">
          <span v-html="link.label" />
        </Link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import type { PaginationLink } from "@/scripts/types/ui";
import { Link } from "@inertiajs/inertia-vue3";

defineProps<{
  links: PaginationLink[];
}>();
</script>
