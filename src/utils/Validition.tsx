export const isValidEmail = (stringEmail: string) => stringEmail.length <= 5;

export const isValidPassword = (stringPassword: string) => stringPassword.length <= 3;

export const isValidPhone = (stringPhone: string) => stringPhone.length >= 12;
