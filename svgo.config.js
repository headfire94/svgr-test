
module.exports = {
  native: true,
  svgoConfig: {
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
