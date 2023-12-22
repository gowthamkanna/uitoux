const Product = require('../models/productModel');
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncError = require('../middlewares/catchAsyncError')
const APIFeatures = require('../utils/apiFeatures');


//Create Product - /api/v1/product/new
exports.newProduct = catchAsyncError(async (req, res, next)=>{
    let images = []
    let BASE_URL = process.env.BACKEND_URL;
    if(process.env.NODE_ENV === "production"){
        BASE_URL = `${req.protocol}://${req.get('host')}`
    }
    
    if(req.files.length > 0) {
        req.files.forEach( file => {
            let url = `${BASE_URL}/uploads/product/${file.originalname}`;
            images.push({ image: url })
        })
    }

    req.body.images = images;

    req.body.user = req.user.id;
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
});

//Get Products - /api/v1/products
exports.getProducts = catchAsyncError(async (req, res, next)=>{
    let resPerPage = 5;
    // if(req.query["isFeature"] !== undefined){
    //     resPerPage = 5;
    // }
    let buildQuery = () => {
        return new APIFeatures(Product.find(), req.query).search().filter()
    }
    
    const filteredProductsCount = await buildQuery().query.countDocuments({})
    const totalProductsCount = await Product.countDocuments({});
    let productsCount = totalProductsCount;

    if(filteredProductsCount !== totalProductsCount) {
        productsCount = filteredProductsCount;
    }
    
    const products = await buildQuery().paginate(resPerPage).query;

    res.status(200).json({
        success : true,
        count: productsCount,
        resPerPage,
        products
    })
})

//Get Products By Rating - /api/v1/productsByrating
exports.productByRating = catchAsyncError(async (req, res, next)=>{
    
    const products = await Product.find().sort({ ratings: 'desc', numOfReviews: 'desc' }).limit(5)
    
    res.status(200).json({
        success : true,
        products
    })
})


//Get Single Product - api/v1/product/:id
exports.getSingleProduct = catchAsyncError(async(req, res, next) => {
    const product = await Product.findById(req.params.id).populate('reviews.user','name email');

    if(!product) {
        return next(new ErrorHandler('Product not found', 400));
    }

    res.status(201).json({
        success: true,
        product
    })
})

// get admin products  - api/v1/admin/products
exports.getAdminProducts = catchAsyncError(async (req, res, next) =>{
    const products = await Product.find();
    res.status(200).send({
        success: true,
        products
    })
});