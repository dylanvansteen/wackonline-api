// location-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const location = new Schema({
    name: { type: String, required: true },
    number: { type: String, required: true },
    type: { type: String, required: true, enum: ['Auction', 'Customer', 'Supplier', 'Carrier'], default: 'Customer' },
    GLN: { type: String },
    telephone: { type: String },
    emailaddress: { type: String },
    addressLine: { type: String },
    postalCode: { type: String },
    city: { type: String },
    country: { type: String },
    createdOn: { type: Date, default: Date.now },
    modifiedOn: { type: Date },
    user: { type: Schema.Types.ObjectId, ref: 'user', required: true }
  },
    {
      timestamps: true
    });

  return mongooseClient.model('location', location);
};
