
const express=require("express")
const userController=require("../controller/userController")
const router=express.Router()

router.post("/createUser",userController.createUser)
// router.post("/sendOtp",userController.sendOtp)
// router.post("/verifyOtp",userController.verifyOtp)


module.exports = router;