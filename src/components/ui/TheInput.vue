<template>
  <div class="the-input">
    <label class="the-input__label">
      {{ label }}
      <input
        @input="inputValue"
        :placeholder="placeholder"
        :value="value"
        class="the-input__input"
        :class="{ invalid: !isValid }"
        :maxlength="maxlength"
        :required="requried"
        :type="type"
        
      />
      <small v-if="!isValid" class="the-input__validator">{{
        validateMsg
      }}</small>
    </label>
  </div>
</template>

<script>
export default {
  name: "TheInput",
  props: {
    value: {
      type: String,
      requaried: true,
      default: "",
    },
    placeholder: {
      type: String,
      requaried: false,
    },
    type: {
      type: String,
      requaried: false,
      default: "text",
    },
    label: {
      type: String,
      requaried: false,
    },
    validateMsg: {
      type: String,
      requaried: false,
    },
    isValid: {
      type: Boolean,
      requaried: false,
      default: true,
    },
    maxlength: {
      type: Number,
      requaried: false,
    },
    requried: {
      type: Boolean,
      requaried: false,
      default: false,
    },
  },
  methods: {
    inputValue(e) {
      this.$emit("update:value", e.target.value.trim());
    },
  },
};
</script>

<style lang="scss" scoped>
.the-input {
  &__label {
    display: flex;
    flex-direction: column;
    align-items: start;
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  &__input {
    width: 100%;
    margin-top: 4px;
    border-radius: 5px;
    border: 1px solid #23a3e3;
    padding: 10px 0 10px 10px;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    &.invalid {
      border: 1px solid red;
      outline: red;
    }
  }
  &__validator {
    margin-top: 4px;
    color: red;
  }
}
</style> 