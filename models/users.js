module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });
    // associate users with associate - if user is deleted, delete their associate too
    // User.associate = function (models) {
    //     User.hasMany(models.associate, {
    //         onDelete: "cascade"
    //     });
    // };

    return User;
};
