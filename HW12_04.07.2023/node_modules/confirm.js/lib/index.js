#!/usr/bin/env node

'use strict';

var rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Are you sure? (y/N) ', function (answer) {
  if (answer.match(/^y(es)?$/i)) {
    process.exit();
  }

  process.exit(1);
});

rl.on('SIGINT', function () {
  process.exit(1);
});
