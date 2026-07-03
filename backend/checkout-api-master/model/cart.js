import mongoose from "mongoose";

const schema = mongoose.Schema;

const cartSchema = new schema({
    id: {
        type: Number,
        required: true
    },
    userId: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    products: [
        {
            id: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            total: {
                type: Number,
                required: true
            },
            discountPercentage: {
                type: Number,
                default: 0
            },
            discountedTotal: {
                type: Number,
                required: true
            },
            thumbnail: {
                type: String,
                default: ""
            }
        }
    ],
    total: {
        type: Number,
        required: true
    },
    discountedTotal: {
        type: Number,
        required: true
    },
    totalProducts: {
        type: Number,
        required: true
    },
    totalQuantity: {
        type: Number,
        required: true
    }
});

export default mongoose.model("cart", cartSchema);