// form-validation-library.js

class FormValidator {
    constructor() {
      this.validators = {
        required: (value) => !!value.trim(),
        email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        password: (value) => value.length >= 8,
      };
    }
  
    validateField(field, value, rules) {
      for (const rule of rules) {
        if (!this.validators[rule](value)) {
          return `${field} is invalid`;
        }
      }
      return null; // No error
    }
  
    validateForm(formData, validationRules) {
      const errors = {};
      for (const field in formData) {
        if (formData.hasOwnProperty(field)) {
          const value = formData[field];
          const rules = validationRules[field];
          if (rules) {
            const error = this.validateField(field, value, rules);
            if (error) {
              errors[field] = error;
            }
          }
        }
      }
      return errors;
    }
  }
  
  module.exports = FormValidator;
  