/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/templates/**/*.html",
    "./app/templates/**/*.jinja",
    "./app/templates/**/*.jinja2",
    "./app/static/styles.css",
  ],
  theme: {
    extend: {
      colors: {
        'gym-dark': '#0f3460',
        'gym-darker': '#16213e',
        'gym-darkest': '#1a1a2e',
        'gym-orange': '#ff6b35',
        'gym-red': '#e63946',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'gym-gradient': 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      },
      boxShadow: {
        'gym': '0 10px 30px rgba(255, 107, 53, 0.2)',
        'gym-lg': '0 20px 50px rgba(255, 107, 53, 0.3)',
      },
      spacing: {
        'safe': 'max(1rem, env(safe-area-inset-bottom))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
