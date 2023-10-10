<template>
  <div v-if="display" class="the-modal">
    <div @click="hideModal" class="the-modal__overlay"></div>
    <button @click="hideModal" class="the-modal__close"></button>
    <div class="the-modal__inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheModal',
  props: {
    display: {
      type: Boolean,
      requaried: true,
      default: false,
    },
  },
  methods: {
    hideModal() {
        this.$emit("update:display", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.the-modal {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  &__overlay {
    cursor: pointer;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba($color: #000000, $alpha: 0.7);
    z-index: 2;
  }
  &__close {
    cursor: pointer;
    position: fixed;
    width: 40px;
    height: 40px;
    top: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    background: transparent;
    z-index: 3;
    border: 0;
    outline: none;

    &::after,
    &::before {
      position: absolute;
      content: "";
      width: 100%;
      height: 2px;
      background: #fff;
      border-radius: 5px;
    }
    &::after {
      transform: rotate(45deg);
    }
    &::before {
      transform: rotate(-45deg);
    }
  }

  &__inner {
    position: absolute;
    background: #fff;
    padding: 15px;
    z-index: 4;
    border-radius: 10px;
    box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.4);
  }
}
</style> 