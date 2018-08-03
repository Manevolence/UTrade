module.exports = function(sequelize, DataTypes){
    var user = sequelize.define("User", {

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
                len: [1]
            }
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        password: {
            type: DataTypes.STRING.BINARY,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    user.prototype.validatePassword = function(password){
        if(this.password === password){
            return true;
        }

        return false;
    }

    return user;

};