module.exports = {
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/transform-runtime'
  ],
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    'module:metro-react-native-babel-preset'
  ]
};
