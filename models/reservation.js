module.exports = function (sequelize, DataTypes) {
    var Reservation = sequelize.define("Reservation", {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        room_type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        room_qty: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        cr_qty: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        message: {
            type: DataTypes.STRING(1234),
            allowNull: false,
            validate: {
                len: [1]
            }
        },
    });
    // associate users with associate - if user is deleted, delete their associate too
    // User.associate = function (models) {
    //     User.hasMany(models.associate, {
    //         onDelete: "cascade"
    //     });
    // };

    return Reservation;
};
