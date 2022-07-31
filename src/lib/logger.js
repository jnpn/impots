function Logger(app, options = {}) {
  return {
    log(...args) {
      console.log(app, ...args);
    },
    info(...args) {
      console.info(app, ...args);
    },
    warn(...args) {
      console.warn(app, ...args);
    },
    debug(...args) {
      console.debug(app, ...args);
    },
  };
}
