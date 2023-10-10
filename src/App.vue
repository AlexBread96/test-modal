<template>
  <div class="wrapper">
    <TheButton @click="showModal">Открыть</TheButton>
  </div>
  <TheModal v-model:display="display">
    <form class="form">
      <div class="form__input">
        <TheInput
          label="Имя"
          placeholder="Иван"
          requried
          v-model:value="formData.name"
          maxlength="100"
          validateMsg="Поле должно быть не длинее 100 символов"
          :isValid="isInvalidName"
        />
      </div>
      <div class="form__input">
        <TheInput
          placeholder="Иванов"
          label="Фамилия"
          v-model:value="formData.surname"
          maxlength="100"
          validateMsg="Поле должно быть не длинее 100 символов"
          :isValid="isInvalidSurname"
        />
      </div>
      <div>
      </div>
      <div class="form__input">
        <TheInput
          placeholder="+79999099090"
          requried
          type="phone"
          label="Телефон"
          v-model:value="formData.phone"
          validateMsg="Только номера РФ"
          :isValid="isInvalidPhone"
          @input="checkValidPhone"
        />
      </div>
      <div class="form__input">
        <TheInput
          placeholder="example@example.com"
          requried
          type="email"
          label="Эл. почта"
          v-model:value="formData.email"
        />
      </div>
      <div class="form__input">
        <TheTextArea
          :isValid="isInvalidMsg"
          label="Сообщение"
          placeholder="Введите сообщение"
          v-model:msg="formData.msg"
        ></TheTextArea>
      </div>
      <div class="form__btn">
        <TheButton :disabled="!isAllValid" type="submit">Отправить</TheButton>
      </div>
    </form>
  </TheModal>
</template>

<script>
import TheTextArea from "@/components/ui/TheTextArea";
import TheModal from "@/components/TheModal";
import TheButton from "@/components/ui/TheButton";
import TheInput from "@/components/ui/TheInput.vue";

import { validatePhone, validateText } from "@/utils/validator";
export default {
  name: "App",
  components: {
    TheTextArea,
    TheModal,
    TheButton,
    TheInput,
  },
  data() {
    return {
      loading: null,
      display: false,
      formData: {
        name: "",
        surname: "",
        phone: null,
        email: null,
        msg: "",
      },
      isInvalidPhone: true,
    };
  },
  methods: {
    showModal() {
      this.display = true;
    },
    checkValidPhone() {
      this.isInvalidPhone = validatePhone(this.formData.phone);
    },
  },
  computed: {
    isInvalidName() {
      return validateText(this.formData.name, 100);
    },
    isInvalidSurname() {
      return validateText(this.formData.surname, 100);
    },
    isInvalidMsg() {
      return validateText(this.formData.msg, 500);
    },
    isAllValid() {
      return (
        this.isInvalidPhone &&
        this.isInvalidName &&
        this.isInvalidSurname &&
        this.isInvalidMsg
      );
    },
  },
};
</script>

<style lang="scss">
*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.wrapper {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.form {
  width: 336px;
  &__input {
    margin-bottom: 16px;
  }
  &__btn {
    button {
      width: 100%;
    }
  }
}
</style>
