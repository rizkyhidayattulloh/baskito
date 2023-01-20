<template>
  <input
    class="form-control"
    :value="modelValue"
    :type="type"
    :class="`form-control ${classInput}`"
    :placeholder="placeholder"
    @input="emitInput"
  />
</template>

<script setup lang="ts">
type InputType = "button" | "checkbox" | "text";
type InputClass = "form-control-sm" | "form-control-lg"; //pecah to array size sm/lg

interface Props {
  type?: InputType;
  classInput?:  InputClass | null,
  modelValue?: string;
  placeholder?: string;
}

withDefaults(defineProps<Props>(), {
  type: "text",
  modelValue: "",
  placeholder: "",
  classInput: null,
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string | null): void;
}>();

const emitInput = (event: Event) => {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
};
</script>
