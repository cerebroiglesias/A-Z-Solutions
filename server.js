const connectDB = require('./mongoose.js');
const dotenv = require('dotenv');
const app = require('./app.js');
const server = require('http').Server(app);
const socketInit = require('./socket');

dotenv.config();

async function main() {
    const db = await connectDB();

    const PORT = process.env.PORT || 3000;

    socketInit(server);

    server.listen(PORT, () => {
        console.log(`Server trabajando en http://localhost:${PORT}`);
    })
    server.on('error', (error) => {
        console.log(`Error en servidor ${error}`);
    })
}

main();

    