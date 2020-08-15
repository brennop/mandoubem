module.exports = {
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'development') {
      config.output.filename('[name].[hash].js').end();
    }
  },
  devServer: {
    host: '0.0.0.0'
  }
};
