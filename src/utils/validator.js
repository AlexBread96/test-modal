export const validatePhone = (phone) => {
    let isPhoneValid;
    const phoneRegex = /^((\+7|7|8)+([0-9]){10})$/;

    isPhoneValid = phoneRegex.test(phone);

    return isPhoneValid

}

export const validateText = (text, length) => {
    let isTextValid;
    const textLength = text.length

    textLength > length ? isTextValid = false : isTextValid = true

    return isTextValid

}