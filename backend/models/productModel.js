const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "Please enter product name"],
        trim: true,
        maxLength: [100, "Product name cannot exceed 100 characters"]
    },
    skuId: {
        type: String,
        required: [true, "Please enter SKU ID"],
        trim: true
    },
    price: {
        type: Number,
        required: true,
        default: 0.0
    },
    description: {
        type: String,
        required: [true, "Please enter product description"]
    },
    ratings: {
        type: String,
        default: 0
    },
    images: [
        {
            image: {
                type: String
            }
        }
    ],
    category: {
        type: String,
        required: [true, "Please enter product category"],
        enum: {
            values: [
                'Power Tools',
                'Hand Tools',
                'Plumbing',
                'Engines',
                'Lubricants'
            ],
            message : "Please select correct category"
        }
    },
    stock: {
        type: Number,
        required: [true, "Please enter product stock"],
        maxLength: [20, 'Product stock cannot exceed 20']
    },
    offers: {
        type: Number,
        default: 0
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    isFeature: {
        type: Boolean,
        default: false
    },
    isHot: {
        type: Boolean,
        default: false
    },
},
{
    timestamps: true
})



productSchema.set('toObject', { virtuals: true })
productSchema.set('toJSON', { virtuals: true })

productSchema.virtual('offerPrice').get(function() {
    if(this.offers !== 0){
        let offerValue = (this.price * this.offers)/100;
        return Math.round(this.price-offerValue);
    }else{
        return this.price;
    }
  });


let schema = mongoose.model('Product', productSchema)

module.exports = schema