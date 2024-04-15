# Form Validation Library

![npm](https://img.shields.io/npm/v/form-validation-library)
![GitHub](https://img.shields.io/github/license/your-username/form-validation-library)

## Overview

The Form Validation Library is a lightweight and flexible JavaScript library for validating form fields in web applications. It offers a simple API for defining validation rules and validating form data.

## Features

- **Customizable Validation Rules**: Define custom validation rules for different types of form fields.
- **Easy Integration**: Easily integrate the library into your web applications with just a few lines of code.
- **Error Handling**: Automatically handle form validation errors and display error messages to users.

## Installation

You can install the Form Validation Library via npm:

```bash
npm install form-validation-library
```

## Usage

```javascript
const FormValidator = require('form-validation-library');

const validator = new FormValidator();

// Example validation rules
const validationRules = {
  username: ['required'],
  email: ['required', 'email'],
  password: ['required', 'password'],
};

// Example form data
const formData = {
  username: 'example',
  email: 'example@example.com',
  password: 'password123',
};

const errors = validator.validateForm(formData, validationRules);
console.log(errors);
```

## API

### `FormValidator`

#### `constructor()`

Creates a new instance of the FormValidator class.

#### `validateField(field, value, rules)`

Validates an individual form field.

- `field`: The name of the form field.
- `value`: The value of the form field.
- `rules`: An array of validation rules to apply to the form field.

Returns an error message if the field is invalid, or `null` if the field is valid.

#### `validateForm(formData, validationRules)`

Validates an entire form.

- `formData`: An object containing the form data, where keys are field names and values are field values.
- `validationRules`: An object containing validation rules for each form field.

Returns an object containing error messages for invalid fields.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
