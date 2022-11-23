var path = require('path');

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'babel-plugin-module-resolver',
        {
          extensions: ['.js', '.jsx', '.android.js', '.ios.js', '.web.js'],
          alias: {
            src: './src',
          },
        },
      ],
    ],
  };
};
