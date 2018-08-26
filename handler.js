'use strict';

const exec = require('child_process').exec;

module.exports.hello_ruby = (event, context, callback) => {
  const child = exec('./traveling-ruby/bin/ruby ./src/hello.rb ' + "'" + JSON.stringify(event) + "'");

  child.stdout.on('data', (result) => {
    callback(null,result);
  });
  child.stderr.on('data', (result) => {
    callback(result);
  });
};

module.exports.hello_crystal = (event, context, callback) => {
  const child = exec('./buildfile/hello ' + "'" + JSON.stringify(event) + "'");

  child.stdout.on('data', (result) => {
    callback(null,result);
  });
  child.stderr.on('data', (result) => {
    callback(result);
  });
};
