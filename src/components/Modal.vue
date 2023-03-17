<template>
  <div>
    <button type="button" class="btn btn-primary" @click="showModal">
      {{ buttonLabel }}
    </button>

    <div
      class="modal"
      tabindex="-1"
      role="dialog"
      ref="modal"
      @click.self="hideModal"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ modalTitle }}</h5>
            <button type="button" class="btn-close" @click="hideModal"></button>
          </div>

          <div class="modal-body">
            <slot />
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="hideModal">
              {{ closeLabel }}
            </button>
            <button type="button" class="btn btn-primary" @click="saveChanges">
              {{ saveLabel }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Modal',
  props: {
    buttonLabel: {
      type: String,
      default: 'Open Modal',
    },
    modalTitle: {
      type: String,
      default: 'Modal Title',
    },
    closeLabel: {
      type: String,
      default: 'Close',
    },
    saveLabel: {
      type: String,
      default: 'Save Changes',
    },
  },
  setup(props, { slots }) {
    const showModal = ref(false);

    const hideModal = () => {
      showModal.value = false;
    };

    const saveChanges = () => {
      hideModal();
    };

    return {
      showModal,
      hideModal,
      saveChanges,
      slots,
    };
  },
};
</script>

<style>
.modal-dialog {
  max-width: 90%;
  margin: 1.75rem auto;
}

.modal-header {
  position: relative;
}

.modal-header .btn-close {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
