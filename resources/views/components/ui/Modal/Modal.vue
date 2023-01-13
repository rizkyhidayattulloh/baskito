<template>
  <div class="modal" :class="{'fade': withFade}" tabindex="-1" role="dialog" style="display: none;" aria-hidden="true">
    <div class="modal-dialog" :class="{'modal-dialog-centered': isCenter, [modalSizeClass]: modalSizeClass ? true : false}" role="document">
      <div class="modal-content">
        <div class="modal-header" v-if="$slots.header">
          <slot name="header"></slot>
        </div>
        <div class="modal-header" v-else>
          <h5 class="modal-title">
              {{ title }}
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer bg-whitesmoke br" v-if="$slots.footer">
            <slot name="footer"></slot>
        </div>
        <div class="modal-footer bg-whitesmoke br" v-else>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">{{ closeText }}</button>
            <button type="button" class="btn btn-primary"  @click="$emit('submit')">{{ submitText }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'

  const props = withDefaults(
    defineProps<{
      title?: string
      closeText?: string
      submitText?: string
      isCenter?: boolean
      withFade?: boolean
      size?: string
    }>(), {
      closeText: () => "Close",
      submitText: () => "Save Changes",
      isCenter: () => false,
      withFade: () => true,
    }
  );

  const modalSizeClass = computed(() => {
    if (props.size) {
      return `modal-${props.size}`;
    }
    return '';
  })
</script>