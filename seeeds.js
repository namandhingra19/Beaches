import mongoose from "mongoose";

const booksSchema=new mongoose.Schema({
    title:{
        type:String,
    },
    cover:{
        type:String,
    },
    category:[
        {type:String}
    ],
    description:{
        type:String,
    }
})

const categorySchema=new moongoose.Schema({
    title:{
        type:String
    },
    books:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Books"
        }
    ]
})

mongoose.models={};
const Books= mongoose.model('booksdata',booksSchema)
export const BooksCategory=mongoose.model('booksCategory',categorySchema)

export default Books;