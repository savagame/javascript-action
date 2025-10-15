#!/usr/bin/env node
import * as core from '@actions/core';
import * as github from '@actions/github';

try {
  const nameToGreet = core.getInput("who-to-greet");
  core.info(`Hello ${nameToGreet}`);

  const time = new Date().toTimeString();
  core.setOutput("time", time);

  const payload = JSON.stringify(github.context.payload, undefined, 2);
  core.info(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
