const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema(
    {
        user_id: { type: String, required: true },
        email: { type: String, required: true },
        username: { type: String },
    },
    {
        timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
    }
);

module.exports = mongoose.model('Template', templateSchema);