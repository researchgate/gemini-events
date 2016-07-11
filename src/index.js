module.exports = function (gemini, opts) {
  if (opts.startRunner) {
    gemini.on('startRunner', opts.startRunner);
  }

  if (opts.endRunner) {
    gemini.on('endRunner', opts.endRunner);
  }
};
