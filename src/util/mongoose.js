module.exports = {
    mutipleMongooseToObject: function(mongooses) {
        return mongooses.map(mongoose => mongoose.toObject());
    },
    mongooseTo0bject: function(mongoose){
        return mongoose?mongoose.toObject():mongoose;
    }
};