<template>
  <div class="the-textarea">
    {{ label }}
    <textarea
      @input="inputValue"
      v-model="value"
      class="the-textarea__input"
      :class="{ invalid: !isValid }"
      name="text"
      :placeholder="placeholder"
    >
    </textarea>
    <small class="the-textarea__counter">{{ value.length }} / 500 </small>
    <small v-if="!isValid" class="the-textarea__msg"
      >Поле должно быть не длинее 100 символов</small
    >
  </div>
</template>

<script>
export default {
  name: "TheTextArea",
  props: {
    label: {
      type: String,
      requaried: false,
    },
    placeholder: {
      type: String,
      requaried: false,
    },
    msg: {
      type: String,
    },
    isValid: {
      type: Boolean,
      requaried: false,
      default: false,
    },
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    inputValue() {
      this.$emit("update:msg", this.value.trim());
    },
  },
};
</script>

<style lang="scss" scoped>
.the-textarea {
  display: flex;
  flex-direction: column;
  align-items: start;
  &__input {
    width: 100%;
    margin-top: 4px;
    border-radius: 5px;
    border: 1px solid #23a3e3;
    padding: 10px 0 10px 10px;
    font-family: inherit;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    resize: none;
    min-height: 120px;
    &.invalid {
      border: 1px solid red;
      outline: red;
    }
  }
  &__counter {
    width: 100%;
    text-align: right;
    font-size: 12px;
    margin-top: 4px;
  }
  &__msg {
    margin-top: 4px;
    color: red;
  }
}
</style> 