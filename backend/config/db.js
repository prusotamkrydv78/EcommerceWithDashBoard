import mongoose from 'mongoose'

const connectDB = async ()=>{
    try {
       const connect = await mongoose.connect(
         "mongodb://localhost:27017/FullStackDev"
       );
       console.log(`DataBase is connected sussceefuly ${connect.connection.host}`)
    } catch (error) {
        console.log('error at connection' + error);
    }
}
export default connectDB