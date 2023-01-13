<template>
  <select ref="root">
      <slot></slot>
  </select>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted, watch } from 'vue';

  type SelectValue = string | number | string[] | null;

  const props = withDefaults(
    defineProps<{
      modelValue?: SelectValue
      options?: object,
      allowEmpty?: boolean
    }>(), {
      modelValue: () => null,
      options: () => ({}),
      allowEmpty: () => false
    }
  );

  const emit = defineEmits<{
    (e: 'update:modelValue', value: SelectValue | undefined): void
  }>();
  
  onMounted(createSelect2);

  onUnmounted(destroySelect2);

  const root = <any> ref(null);

  watch(
    () => props.modelValue,
    (modelValue) => {
      $(root.value).val(modelValue).trigger("change");
    }
  );

  watch(
    () => props.options,
    (options) => {
      destroySelect2();
      if (options.hasOwnProperty('data')) {
         $(root.value).empty();
      }
      createSelect2();
    },
    { deep: true }
  );

  function createSelect2() {
    const select2 = $(root.value)
      .select2(props.options)
      .on("change", function() {
          const value = $(this).val();
          emit('update:modelValue', value);

          if (Array.isArray(value)) {
            // Helping CSS to know if multiple select is filled with options
            const container = $(root.value).data('select2').$container;
            if (value.length) {
              container.find('.select2-selection--multiple').addClass('select2-selection--filled'); 
            } else {
              container.find('.select2-selection--multiple').removeClass('select2-selection--filled');
            }
          }
      });

    let value = props.modelValue;

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
/* Update select2 multiple remove button style */
.select2-selection__choice__display {
  padding-right: 15px !important;
}
.select2-selection__choice__remove {
  left: auto !important;
  right: 0 !important;
  border-right: 0 !important;
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
  border-top-right-radius: 4px !important;
  border-bottom-right-radius: 4px !important;
}
.select2-selection__choice__remove:hover, .select2-selection__choice__remove:focus {
  background-color: initial !important;
}

/* Update select2 multiple search height */
.select2-selection--multiple.select2-selection--filled .select2-search__field {
  height: 25px !important;
}

/* Update select2 multiple tag padding */
.select2-selection--multiple.select2-selection--filled .select2-selection__rendered {
  padding-left: 0px !important;
}

/* Fix select2 single select clear button padding */
.select2-selection.select2-selection--single {
  padding-right: 17px !important;
}
</style>