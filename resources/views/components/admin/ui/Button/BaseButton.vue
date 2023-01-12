<template>
  <button :class="buttonClass" :disabled="props.disabled">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import type {
  ButtonSize,
  ButtonVariants,
  ButtonShape
} from "@/scripts/types/ui";
import { useBaseButton } from "@/scripts/composables/ui/button/useBaseButton";
import { computed } from "vue";

const { getClassVariant, getClassSize, getClassShape } = useBaseButton();

const props = withDefaults(
  defineProps<{
    variant?: ButtonVariants;
    block?: boolean;
    size?: ButtonSize;
    shape?: ButtonShape;
    disabled?: boolean;
  }>(),
  {
    variant: "primary",
    block: false,
    size: "default",
    shape: "default",
    disabled: false
  }
);

const buttonClass = computed(() => [
  "btn",
  getClassVariant(props.variant),
  getClassSize(props.size),
  getClassShape(props.shape),
  {
    "btn-block": props.block
  },
  {
    disabled: props.disabled
  }
]);
</script>
