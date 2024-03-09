// to run, type `node file-directory.js` in the terminal

const fs = require('fs');
const path = require('path');

const paths = [
  'c/ac',
  'cpp/cwh',
  'cpp/ac',
  'cpp/azc',
  'js/cwh',
  'js/ac',
  'js/jsm',
  'html/cwh',
  'html/ac',
  'css/cwh',
  'css/ac',
  'tailwind/cwh',
  'vue/vue2/nn',
  'vue/vue3/nn',
  'nuxt/nuxt2/nn',
  'react/cwh',
  'react/jsm',
  'next/cwh',
  'next/jsm',
  'server',
  'git',
  'terminal'
];

paths.forEach((filePath) => {
  const dirs = filePath.split('/');
  let currentPath = '';
  for (let i = 0; i < dirs.length; i++) {
    currentPath = path.join(currentPath, dirs[i]);
    if (i < dirs.length - 1) {
      if (!fs.existsSync(currentPath)) {
        fs.mkdirSync(currentPath);
      }
    } else {
      fs.writeFileSync(currentPath, '');
    }
  }
});