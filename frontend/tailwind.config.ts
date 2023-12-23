import type { Config } from 'tailwindcss'
const { nextui } = require("@nextui-org/react");
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
        'tertiary': 'var(--color-tertiary)',
        'background': 'var(--color-background)',
        'surface-100': 'var(--color-surface-100)',
        'surface-200': 'var(--color-surface-200)',
        'surface-300': 'var(--color-surface-300)',
        'surface-400': 'var(--color-surface-400)',
        'text': 'var(--color-text)',
        'highlight': 'var(--color-highlight)',
        'disabled': 'var(--color-disabled)',
        'error': 'var(--color-error)',
        'success': 'var(--color-success)',
      },
      boxShadow: {
        'custom': "inset 0px 0px 10px 5px rgba(0,0,0,0.2)",
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
export default config
