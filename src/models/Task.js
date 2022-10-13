const {model, Schema} = require('mongoose');

const TaskSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    description: {
        type: String,
        required: [true, 'La descripcion es obligatoria']
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isDone: {
        type: Boolean,
        default: false
    },
    userId: {
        type: Schema.Types.ObjectId, ref: 'Users'
    },
    categories: [
        { type: Schema.Types.ObjectId, ref: 'Categories' }
    ]
});

module.exports = model('Tasks', TaskSchema);
