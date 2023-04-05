const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

async function dbConnect() {

    if (!MONGODB_URI) {
        throw new Error(
            'define MONGODB_URI'
        )
    }
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB database connection established successfully!');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        // process.exit(1);
    }

}

export default dbConnect