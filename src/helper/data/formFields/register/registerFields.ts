export const signUpItems = [
  {
    label: "Name",
    name: "patient.name",
    type: "text",
    required: true,
    placeholder: "Enter your name",
    multiline: false,
  },
  {
    label: "Email",
    name: "patient.email",
    type: "email",
    required: true,
    placeholder: "Enter your email",
    multiline: false,
  },
  {
    label: "Password",
    name: "password",
    required: true,
    type: "password",
    multiline: false,
    placeholder: "Enter your password",
  },
  {
    label: "Contact Number",
    name: "patient.contactNumber",
    required: true,
    type: "tel",
    multiline: false,
    placeholder: "Enter your contact number",
  },
  {
    label: "Address",
    name: "patient.address",
    required: true,
    type: "text-area",
    multiline: true,
    placeholder: "Enter your Address",
  },
];

export const signInItems = [
  {
    label: "Email",
    name: "email",
    required: true,
    type: "email",
    placeholder: "Enter your email",
    multiline: false,
  },
  {
    label: "Password",
    name: "password",
    required: true,
    type: "password",
    multiline: false,
    placeholder: "Enter your password",
  },
];
