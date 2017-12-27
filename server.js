if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}