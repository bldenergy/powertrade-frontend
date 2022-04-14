/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const prod = process.env.NODE_ENV === 'production';

module.exports = withPWA({
  reactStrictMode: true,
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en', 'zh'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'zh',
  },
  pwa: {
    dest: 'public',
    runtimeCaching,
    disable: prod ? false : true,
  },
});
