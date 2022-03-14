
module.exports = {
  native: true,
  svgo: {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false
          },
        },
      },
    ],
  }
  
}
