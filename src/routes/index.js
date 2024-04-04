const {Router} = require('express');
const router = Router();
const fs = require('fs');

const pathRouter = `${__dirname}`

const removeExtension = (filename) => {
    return filename.split('.').shift();
}

fs.readdirSync(pathRouter).filter((file) => {
    const fileWOExt = removeExtension(file)
    const skipFiles = ['index'].includes(fileWOExt);
    if(!skipFiles){
        router.use(`/${fileWOExt}`, require(`./${fileWOExt}`));
        console.log("ROUTE --->", fileWOExt)
    }
})

console.log("")

router.get('/', (req, res) => {
    res.json({
        "message": "holaaa"
    })
})
router.get('*', (req, res)=> {
    res.status(404);
    res.json({
        "error": "NOT FOUND"
    })
})


module.exports = router;