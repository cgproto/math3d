module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'math3d.js',
    library: 'math3d' //manually remove this global variable after packed
  },
  optimization: {
        minimize: false
  }
};
