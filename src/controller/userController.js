const userModel=require("../model/userModel")
// const{TWILIO_SERVICE_SID,TWILIO_ACCOUNT_SID,TWILIO_AUTH_TOKEN}=process.env
// const client=require("twilio")(TWILIO_ACCOUNT_SID,TWILIO_AUTH_TOKEN,{
//     lazyLoading:true
// })

const createUser=async function(req,res){
    try {
        let data=req.body
        console.log(data)
        let saveData=await userModel.create(data)
        res.status(201).send({msg:"user created",saveData})
    } catch (error) {
        res.status(500).send(error.message)
    }
}
// const sendOtp=async function(req,res){
//     try {
//         const{countryCode,phoneNumber}=req.body
//         const otpResponse=await client.verify
//         .services(TWILIO_SERVICE_SID)
//         .verifications.create({
//             to:`+${countryCode}${phoneNumber}`,
//             channel:"sms",
//         })
//         res.status(200).send(`otp send successfully: ${JSON.stringify(otpResponse)}`)
//     } catch (error) {
//         res.status(500).send(error.message)
//     }
// }

// const verifyOtp=async function(req,res){
//     try {
//         const{countryCode,phoneNumber,otp}=req.body
//         const verifiedResponse=await client.verify
//         .services(TWILIO_SERVICE_SID)
//         .verifications.create({
//             to:`+${countryCode}${phoneNumber}`,
//             channel:"sms",
//             code:otp,
//         })
//         res.status(200).send(`otp send successfully: ${JSON.stringify(verifiedResponse)}`)
//     } catch (error) {
//         res.status(500).send(error.message)
//     }
// }

module.exports={
    createUser,
    // sendOtp,
    // verifyOtp
}