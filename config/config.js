/**
 * For development you can set the variables by creating a .env file on the root
 */
var fs = require('fs');
var production = process.env.NODE_ENV === 'production';
production = "production";
var prodConfig;
if(production) {
  prodConfig = JSON.parse(fs.readFileSync(__dirname + '/build-config.json'));
  console.log('Build config loaded: ', prodConfig);
}

module.exports = {
  "PRODUCTION": production,
  "DATABASE_URL": process.env.DATABASE_URL || "postgres://mybabuser:MyBab2014@localhost/mybabdb",
  "BIP32_DERIVED": process.env.BIP32_DERIVED_KEY || "xpub6B9dN8ghhQszDeyBR5gGujPpe2zcDu2zGZDjJgXewJqhY6wjqMYGkY9qNy8LtoW9Nf7erETvyn2bdaAgMKQ4R8u5GSM9unJWEBZYTWdaD1n",
  "AWS_SES_KEY": process.env.AWS_SES_KEY,
  "AWS_SES_SECRET": process.env.AWS_SES_SECRET,
  "CONTACT_EMAIL": process.env.CONTACT_EMAIL || "ryan@moneypot.com",
  "SITE_URL": process.env.SITE_URL || "https://bustabit.club",
  "ENC_KEY": process.env.ENC_KEY || "devkey",
  "SIGNING_SECRET": process.env.SIGNING_SECRET || "secret",
  "BANKROLL_OFFSET": parseInt(process.env.BANKROLL_OFFSET) || 200000000,
  "RECAPTCHA_PRIV_KEY": process.env.RECAPTCHA_PRIV_KEY || '6LdMoTUUAAAAACmGEvh3HiBYTvq0rUKxjiLqKUuC',
  "RECAPTCHA_SITE_KEY": process.env.RECAPTCHA_SITE_KEY || '6LdMoTUUAAAAAH4ViRSouSGmsfjhThpyrYVhXhq0',
  "BITCOIND_HOST": process.env.BITCOIND_HOST,
  "BITCOIND_PORT": process.env.BITCOIND_PORT || 8332,
  "BITCOIND_USER": process.env.BITCOIND_USER,
  "BITCOIND_PASS": process.env.BITCOIND_PASS,
  "BITCOIND_CERT": process.env.BITCOIND_CERT  || '',
  "PORT":  process.env.PORT || 3841,
  "SSL_PORT": process.env.SSLPORT || 443,
  "MINING_FEE": process.env.MINING_FEE || 10000,
  "BUILD": prodConfig
};
