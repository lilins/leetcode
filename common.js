module.exports = {
  log(message){
    console.log(message)
  },
  slog(...result) {
    console.log(JSON.stringify({ ...result }));
  }
}