<template>
  <div class="modal" :class="{'fade': withFade}" tabindex="-1" role="dialog" style="display: none;" aria-hidden="true">
    <div class="modal-dialog" :class="modalDialogClass" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="header">
            <h5 class="modal-title">
                {{ title }}
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </slot>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
            <slot name="footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">{{ closeText }}</button>
              <button type="button" class="btn btn-primary"  @click="$emit('submit')">{{ submitText }}</button>
            </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  
  type ModalSize = "sm" | "md" | "lg";

  const sizes = {
    sm: "modal-sm",
    md: "",
    lg: "modal-lg"
  };

  const getClassSize = (size: ModalSize) => sizes[size];

  const props = withDefaults(
    defineProps<{
      title?: string
      closeText?: string
      submitText?: string
      isCenter?: boolean
      withFade?: boolean
      size?: ModalSize
    }>(), {
      closeText: () => "Close",
      submitText: () => "Save Changes",
      isCenter: () => false,
      withFade: () => true,
      size: () => "md",
    }
  );

  const modalDialogClass = computed(() => [
    {
      'modal-dialog-centered': props.isCenter,
    },
    getClassSize(props.size)
  ]);
</script>