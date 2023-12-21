const Sale = require('../models/saleModel');
const catchAsyncError = require('../middlewares/catchAsyncError')

//Get Products - /api/v1/sales
exports.getSales = catchAsyncError(async (req, res, next)=>{
    const sales = await Sale.find().populate('productId');
    res.status(200).json({
        success : true,
        sales
    })
})

//Create Sale - /api/v1/sale/new
exports.newSale = catchAsyncError(async (req, res, next)=>{
    const sale = await Sale.create(req.body);
    res.status(201).json({
        success: true,
        sale
    })
});
