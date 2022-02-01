module.exports = {
  content: ['../eleventy/earl.md'],
  theme: {
    extend: {
      container: {
        center: true,
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
