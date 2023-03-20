<script>
/**
 * References
 * https://blog.fontawesome.com/how-to-use-vue-js-with-font-awesome/
 * https://getbootstrap.com/docs/5.0/components/modal/
 **/
export default {
  props: {
    modalId: { type: String, required: true, default: 'modal' },
  },
};
</script>

<template>
  <div
    class="modal fade"
    :id="modalId"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div
      class="
        modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable
      "
    >
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <slot />
        </div>
        <div class="modal-footer"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-header {
  border-bottom: 0 none;
}
.modal-footer {
  border-top: 0 none;
}
</style>
