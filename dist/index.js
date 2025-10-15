#!/usr/bin/env node
'use strict';

var core = require('@actions/core');
var github = require('@actions/github');

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var core__namespace = /*#__PURE__*/_interopNamespaceDefault(core);
var github__namespace = /*#__PURE__*/_interopNamespaceDefault(github);

try {
  const nameToGreet = core__namespace.getInput("who-to-greet");
  core__namespace.info(`Hello ${nameToGreet}`);

  const time = new Date().toTimeString();
  core__namespace.setOutput("time", time);

  const payload = JSON.stringify(github__namespace.context.payload, undefined, 2);
  core__namespace.info(`The event payload: ${payload}`);
} catch (error) {
  core__namespace.setFailed(error.message);
}
