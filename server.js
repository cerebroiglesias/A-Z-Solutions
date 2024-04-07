const connectDB = require('./mongoose.js');
const dotenv = require('dotenv');
const app = require('./app.js');

dotenv.config();

async function main() {
    const db = await connectDB();

    const PORT = process.env.PORT || 3000;

    const server = app.listen(PORT, () => {
        console.log(`Server trabajando en http://localhost:${PORT}`);
    })

    server.on('error', (error) => {
        console.log(`Error en servidor ${error}`);
    })
}

main();