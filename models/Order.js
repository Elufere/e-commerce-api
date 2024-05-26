const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
    {
        userId: {
            type: String, 
            required: true, 
        },
        products: [
            {
                producId: {
                    type: String
                },
                quantity: {
                    type: Number,
                    default: 1,
                },
            },
        ],
        amount: {
            type: Number,
            require: true
        },
        address: {
            type: Object,
            reuired: true,
        },
        status: {
            type: String,
            default: "pending"
        },
    },
        {timestamps: true}
);

module.exports = mongoose.model("Order", OrderSchema);