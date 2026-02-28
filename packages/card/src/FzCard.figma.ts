import figma, { html } from '@figma/code-connect'

figma.connect('https://www.figma.com/design/cooL3TRFEHjN3RvdDgrPUT/FzCard?node-id=2006-4176&t=jpvv6wB161b97UF1-4', {
  props: {
    environment: figma.enum('environment', {
      backoffice: 'backoffice',
      frontoffice: 'frontoffice',
    }),
    color: figma.enum('color', {
      default: 'default',
      blue: 'blue',
      orange: 'orange',
      purple: 'purple',
      grey: 'grey',
      yellow: 'yellow',
      red: 'red',
    }),
  },
  example: ({ environment, color }) => html`
    <FzCard
      environment="${environment}"
      color="${color}"
      title="Titolo card"
      :primaryAction="{ label: 'Conferma' }"
      :secondaryAction="{ label: 'Annulla' }"
    >
      <!-- contenuto della card -->
    </FzCard>
  `,
})git push -u origin main
