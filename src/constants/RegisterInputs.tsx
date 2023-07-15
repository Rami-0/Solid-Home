export const RegisterInputs = [
  {
    id: '1',
    name: 'first_name',
    type: 'text',
    pattern: '^[A-Za-z0-9]{3,16}$',
    required: true
  },
  {
    id: '2',
    name: 'last_name',
    type: 'text',
    pattern: '^[A-Za-z0-9]{3,16}$',
    required: true
  },
  {
    id: '3',
    name: 'email',
    type: 'email',
    required: true
  },
  {
    id: '4',
    name: 'phone_number',
    type: 'tel',
    pattern: `^\\+?[0-9]{1,3}-?[0-9]{6,14}$`,
    required: true
  }
];
