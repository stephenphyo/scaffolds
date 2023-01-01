const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema(
    {
        prop: {type: String, required: true},
    },
    {
        timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
    }
);

module.exports = mongoose.model('Template', templateSchema);