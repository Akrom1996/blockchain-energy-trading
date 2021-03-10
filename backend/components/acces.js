const fs = require('fs')
let name = 'Akrom'
if(fs.existsSync(`./../../../application/wallet/${name}`))
console.log("exists")
else
console.log("not exists")