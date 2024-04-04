const app = require('./app');
const router = require('./routes/index');
const PORT = 5000;


async function main(){
    app.use(router);
    await app.listen(PORT, () => {
        console.log("SERVIDOR CORRIENDO EN EL PUERTO: ", PORT);
    });
}

main();