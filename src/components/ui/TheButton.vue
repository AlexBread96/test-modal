<template>
  <button :disabled="loading" :class="{ loading }" class="the-btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'TheButton',
  props: {
    loading: {
      type: Boolean,
      requaried: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.the-btn {
  position: relative;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  border-radius: 5px;
  background: #23a3e3;
  outline: none;
  border: 0;
  padding: 0 10px;
  min-width: 200px;
  height: 40px;
  opacity: 1;
  transition: opacity 0.22s linear 0.05s;

  &:hover {
    opacity: 0.5;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #ccc;
    border-top-color: #333;
    animation: spin 1s linear infinite;
    opacity: 0;
  }
  &:disabled {
    cursor: no-drop;
    background: #0b3144;
    color: #4d4d4d;
    &:hover {
      opacity: 1;
    }
  }

  &.loading::before {
    opacity: 1;
  }

  @keyframes spin {
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
}
</style>
 