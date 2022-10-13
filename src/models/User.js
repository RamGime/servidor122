const {model,Schema} = require('mongoose');


const UserSchema = Schema({
    name:{
        type:String,
        required:[true,'El nombre es obligatorio']
    },
    email:{
        type:String,
        required:[true,'El correo es obligatorio'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'La contraseña es obligatoria']
    },
    IsActive:{
        type:Boolean,
        default:true
    },
    role:{
        type:Array
    }

}, {
    versionKey: false,
    timestamps: true
});


UserSchema.methods.toJSON = function() {
    const { password, _id, ...user } = this.toObject();
    user.uid = _id;

    return user;
}


module.exports = model('Users', UserSchema);