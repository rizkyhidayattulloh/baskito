<template>
  <select ref="root">
      <slot></slot>
  </select>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted, watch } from 'vue';

  const props = withDefaults(
    defineProps<{
      modelValue?: string | number | string[] | null
      options?: object,
      allowEmpty?: boolean
    }>(), {
      modelValue: () => null,
      options: () => ({}),
      allowEmpty: () => false
    }
  );


  const emit = defineEmits<{
    (e: 'update:modelValue', value: string | number | string[] | undefined): void
  }>();
  
  onMounted(createSelect2);

  onUnmounted(destroySelect2);

  const root = <any> ref(null);

  watch(
    () => props.options,
    (options) => {
      destroySelect2();
      if (options.hasOwnProperty('data')) {
         $(root.value).empty();
      }
      createSelect2();
    }
  );

  function createSelect2() {
    const select2 = $(root.value)
      .select2(props.options)
      .on("change", function() {
          const value: string | number | string[] | undefined = $(this).val();
          emit('update:modelValue', value);
      });

    let value: string | number | string[] | null = props.modelValue;

    if (! props.allowEmpty && value == null) {
      value = select2.val();
    }

    select2.val(value).trigger("change");
  };

  function destroySelect2() {
    $(root.value).off().select2('destroy');
  };
</script>

<style>
/* Fix select2 multiple choice padding */
.select2-container--default .select2-selection--multiple .select2-selection__choice__display {
  padding-left: 15px !important;
}

/* Fix select2 single select clear button padding */
.select2-selection.select2-selection--single {
  padding-right: 17px !important;
}
</style>