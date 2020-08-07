const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: ["node_modules", "node_modules/@material/*"].map((d) =>
      path.join(__dirname, d)
    ),
  },
};
