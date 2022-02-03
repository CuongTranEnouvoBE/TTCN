const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const Order=new Schema({
        user_id: {
            type:ObjectId,
            ref:'users',
            required:true
        },
        order: [{
            product_id:{type:ObjectId},
            count: {type:Number, default:1}
        }],
        status: {
            type:Boolean,
            required:true,
            default:false
        }       
    },{
        timestamps:true,
    }
)
module.exports=mongoose.model('orders',Order);