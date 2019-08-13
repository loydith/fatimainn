module.exports = function (sequelize, DataTypes) {
        var Reservation = sequelize.define("Reservation", {
            full_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            phone: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            check_in: {
                type: "TIMESTAMP",
                allowNull: false,
            },
            check_out: {
                type: "TIMESTAMP",
                allowNull: false,
            },
            room_type: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            guests_adult: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            guests_child: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            room_qty: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            cr_qty: {
                type: DataTypes.STRING,
            },
            message: {
                type: DataTypes.STRING(1234),
            },
        });
        return Reservation;
    };
    