const uniqueValidator = require('mongoose-unique-validator');
// itemdefinition-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const itemdefinition = new Schema({
    number: {
      type: String,
      required: true,
      max: 25
    },
    name: {
      type: String,
      required: true,
      max: 50
    },
    type: {
      type: String,
      required: true,
      enum: [
        'Unknown',
        'Tray',
        'Box',
        'Interior',
        'Container',
        'LoadCarrier',
        'Crate',
        'Pallet',
        'Lockingplate',
        'Lid',
        'Bulk',
        'Tote',
        'Other',
      ],
      default: 'Unknown'
    },
    code: {
      type: String,
      required: true,
      unique: true,
      max: 6
    },
    image: { type: Buffer }
  }, {
      timestamps: true
    });
  itemdefinition.plugin(uniqueValidator);
  return mongooseClient.model('itemdefinition', itemdefinition);
};
