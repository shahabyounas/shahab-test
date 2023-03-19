<script>
/**
 * References
 * https://blog.fontawesome.com/how-to-use-vue-js-with-font-awesome/
 * https://github.com/TylerPottsDev/vue-popups-yt/blob/main/src/App.vue
 **/
export default {
  props: ['TogglePopup'],
};
</script>

<template>
  <div class="popup">
    <div class="popup-inner">
      <i
        class="fa-regular fa-circle-xmark popup-close"
        @click="TogglePopup()"
      ></i>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.popup-inner {
  background: #fff;
  margin: 0 1rem;
  position: relative;
}

.popup-close {
  position: absolute;
  right: 0;
  margin: 0.2rem;
}

.popup-close:hover {
  color: #5d38e0;
}
</style>
