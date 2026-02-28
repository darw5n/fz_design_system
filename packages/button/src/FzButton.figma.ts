import figma, { html } from '@figma/code-connect'

figma.connect('https://www.figma.com/design/BtKDlkVqx58JHvqP7GoD1u/FzButton?node-id=2002-5181&m=dev', {
  props: {
    environment: figma.enum('environment', {
      backoffice: 'backoffice',
      frontoffice: 'frontoffice',
    }),
    variant: figma.enum('variant', {
      primary: 'primary',
      secondary: 'secondary',
      invisible: 'invisible',
      danger: 'danger',
      success: 'success',
    }),
    disabled: figma.boolean('isDisabled'),
    label: figma.string('text'),
    iconPosition: figma.boolean('hasIconLeft', {
      true: 'before',
      false: 'after',
    }),
  },
  example: ({ environment, variant, disabled, label, iconPosition }) => html`
    <FzButton
      environment="${environment}"
      variant="${variant}"
      :disabled="${disabled}"
      label="${label}"
      iconPosition="${iconPosition}"
    />
  `,
})