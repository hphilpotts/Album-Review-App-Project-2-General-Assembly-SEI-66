const { app } = require("./src/app");

const PORT = process.env.PORT;

app.listen(PORT, function () {

    if (PORT == undefined) {
        throw new Error('Environment variable `PORT` is undefined.');
    }

    try {
        console.log(`Album Review App is running on:\x1b[36m http://localhost:${PORT} \x1b[0m`);
    } catch {
        console.error(error);
    }

});
