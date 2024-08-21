/**
 * Babel configuration file.
 * @param {object} api - Babel API object.
 * @returns {object} Babel configuration.
 */
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
