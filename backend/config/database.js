const mongoose = require("mongoose");

exports.connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((con) => console.log(`Database Connected on http://${con.connection.host}:${con.connection.port}`))
    .catch((err) => console.log(`Database Connection Error ${err}`));
};
