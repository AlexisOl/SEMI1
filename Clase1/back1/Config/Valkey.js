const { ClosingError, GlideClusterClient, Logger } = require("@valkey/valkey-glide");

const test = async (req, res) => {
  Logger.setLoggerConfig("info");
  let client;
  try {
    client = await GlideClusterClient.createClient({
      addresses: [{ host: process.env.VALKEY_HOST, port: 6379 }],
      useTLS: true
    });
    await client.set("foo", "bar");
    const value = await client.get("foo");
    return { ok: true, value: value?.toString() };
  } catch (err) {
    return { ok: false, error: err.message };
  } finally {
    if (client) client.close();
  }
}


module.exports = {
    test
};
