const { writeFileSync } = require("fs");
require("dotenv").config();

const targetPath = "./src/environments/environment.ts";

const envConfigFile = `export const environment = {
  production: false,
  USUARIO_API: "${process.env.USUARIO_API}",
  MENSAJE_API: "${process.env.MENSAJE_API}"
};`;

writeFileSync(targetPath, envConfigFile);
