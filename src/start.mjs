
import webdriverio from 'webdriverio';
let wdio = new webdriverio.Launcher('./src/wdio.conf.js');

(async () => {
  try {
    let code = await wdio.run();
    process.exit(code);
  } catch (err) {
    console.error('Launcher failed to start the test', error.stacktrace);
    process.exit(1);
  }
})();
