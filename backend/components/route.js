const router = require("express").Router()
const regUser = require('../../../application/registerUser')
const getBalance = require("../../../application/getBalance")
const updateBalance = require("../../../application/updateBalance")
const regTrader = require("../../../application/addTrader")
const addAsset = require("../../../application/addCommodity")
const GetStateComm = require("../../../application/getStateComm")
const energyTrade = require("../../../application/energyTrade")
const fs = require("fs")
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: false }))
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.route("/").get((req, res) => { res.json("Get request!") })

router.route('/login').post(async (req, res) => {
    const user = req.body.user
    console.log(user)
    let name = user

    const path = "/home/akrom/fabric-samples/myBlockchain/application/wallet/" + name
    console.log(path)
    // if (fs.existsSync(path)) {
    //     res.json({result: true})
    // } else {
    //     res.json({result: false})
    // }
    fs.access(path, function (error) {
        if (error) {
            res.json({ result: "false" })
        } else {
            res.json({ result: "true" })
        }
    })
})

router.route('/register').post(async (req, res) => {
    const user = req.body.username
    const familyName = req.body.familyName
    let result
    let result2
    try {
        result = await regUser.main(user)

    }
    catch (err) { res.json(err) }
    try {

        result2 = await regTrader.main(user, user, familyName, "0")
        res.json(result + " " + result2)
    }
    catch (err) { res.json(err) }

})

router.route('/getBalance').post(async (req, res) => {
    const user = req.body.username
    console.log("updatebalance " + user)
    const result = await getBalance.main(user)
    console.log(result.balance)
    res.json({ result: result.balance })
})

router.route('/updateBalance').post(async (req, res) => {
    console.log("Requesting to deposit")
    console.log(req.body)
    let result = await updateBalance.main(req.body.username, req.body.deposit)
    res.json(result)
})

router.route('/addAsset').post(async (req, res) => {
    console.log("Requesting to add asset")
    console.log(req.body)
    let tradingSymbol = req.body.username + req.body.date
    let price = String(req.body.price)
    const traderId = req.body.username
    let amount = String(req.body.amount)

    let result = await addAsset.main(String(tradingSymbol), price, traderId, amount)
    res.json({ result: result.message })
})
router.route('/getAssets').post(async (req, res) => {
    console.log("Requesting for existing assets " + req.body.user)
    console.log(req.body)
    let result = await GetStateComm.main(req.body.user)
    result.sort((a, b) => {
        return a.value.tradingEnergyPrice - b.value.tradingEnergyPrice
    })
    res.json({ results: result })
})

router.route('/energyTrade').post(async (req, res) => {
    console.log("Starting energy trading")
    // console.log()
    // console.log(req.body.user)
    // res.end()      
    let result = await energyTrade.main(req.body.id, req.body.user)
    res.json({results: result})
})
module.exports = router