#!/usr/bin/env node
// Replace Int16Array.from([...]) with hex-encoded strings + compact decoder.
// Saves ~10 KB by eliminating commas and using fixed-width 4-char hex per value.

const fs = require('fs');
const path = require('path');

const DECODER = 'function _h(s){var a=new Int16Array(s.length>>2),i=0;for(;i<a.length;i++)a[i]=parseInt(s.slice(i*4,i*4+4),16);return a}';

const file = process.argv[2];
if (!file) { console.error('Usage: pack-tables.js <file>'); process.exit(1); }

let src = fs.readFileSync(file, 'utf8');

let count = 0;
src = src.replace(/Int16Array\.from\(\[([^\]]*)\]\)/g, (match, inner) => {
  const vals = inner.split(',').map(v => {
    const n = Math.round(Number(v.trim()));
    const u = n & 0xFFFF;
    return (u < 0 ? u + 65536 : u).toString(16).padStart(4, '0');
  });
  count++;
  return '_h("' + vals.join('') + '")';
});

// Insert decoder after the opening license comment (first line starting with /*! ... */)
const licenseEnd = src.indexOf('*/');
if (licenseEnd !== -1) {
  src = src.slice(0, licenseEnd + 2) + DECODER + src.slice(licenseEnd + 2);
} else {
  src = DECODER + src;
}

fs.writeFileSync(file, src);
console.log(`Packed ${count} Int16Array tables in ${path.basename(file)}`);
