const express=require("express")
const router=express.Router()

router.post("/product/cart/:productId", (req,res)=> {
    let {productId}=req.params
    let user=req.user
    let foundProduct=user.cart.find((item)=> item.product == productId)
    if(foundProduct){
        foundProduct.count++;
    }
    else{
        user.cart.push({product:productId})
    }
    res.send("Product added successfully!")
})

module.exports = router