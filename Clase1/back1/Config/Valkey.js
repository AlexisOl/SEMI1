const { ClosingError, GlideClusterClient, Logger } = require("@valkey/valkey-glide");

let client;

const conectar = async(req, res) => {
  if (!client) {
    Logger.setLoggerConfig("info");
    client = await GlideClusterClient.createClient({
      addresses: [{ host: process.env.VALKEY_HOST, port: 6379 }],
      useTLS: true
    });
    console.log("conectado");
  }
  return client;
}


const getRedis= async(req, res) => {
  if(!client) {
    throw new Error("no esta conectado a redis.");
  }

  return client
}




module.exports = {
    conectar,
    getRedis
};
