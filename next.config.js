/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  reactStrictMode: true,
  i18n: {
    // Supported locales
    locales: ['en', 'zh'],
    // Default locale
    defaultLocale: 'zh'
  },
  pwa: {
    dest: 'public',
    runtimeCaching
  }
})