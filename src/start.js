
let webdriverio = require('webdriverio');
let yargs = require('yargs');

yargs
  .option('debug', {
    alias: 'd',
    default: false
  });

let shouldDebug = yargs.argv.debug;
let overriddenOptions = {};

if (shouldDebug) {
  overriddenOptions.debug = true;
  overriddenOptions.execArgv = ['--inspect-brk=127.0.0.1:5859'];
}

let wdio = new webdriverio.Launcher('./src/wdio.conf.js', overriddenOptions);

(async () => {
  try {
    let code = await wdio.run();
    process.exit(code);
  } catch (err) {
    console.error('Launcher failed to start the test', error.stacktrace);
    process.exit(1);
  }
})();
