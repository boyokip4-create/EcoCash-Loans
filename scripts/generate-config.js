// scripts/generate-config.js
const fs = require('fs');
const path = require('path');

const cfg = {
  TELEGRAM_USER_ID: process.env.TELEGRAM_USER_ID || '',
  FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL || ''
};

const out = `window.APP_CONFIG = ${JSON.stringify(cfg, null, 2)};`;
fs.writeFileSync(path.join(__dirname, '..', 'public', 'config.js'), out);
console.log('Wrote public/config.js');
