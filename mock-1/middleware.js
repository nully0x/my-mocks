const ROLES_FILE = __dirname + "/roles.txt";
const fs = require("fs");

module.exports = (scope) => (req, res, next) => {
  const role = req.headers["x-role"];
  const roles = JSON.parse(fs.readFileSync(ROLES_FILE, "utf8"));
  if (!role) {
    res.status(403).send("Forbidden");
    return;
  }
};
