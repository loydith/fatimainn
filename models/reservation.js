module.exports = function (sequelize, DataTypes) {
        var Reservation = sequelize.define("Reservation", {
            name: {
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
            check_in: {
                type: "TIMESTAMP",
                allowNull: false,
                validate: {
                    len: [1]
                }
            },
            check_out: {
                type: "TIMESTAMP",
                allowNull: false,
                validate: {
                    len: [1]
                }
            },
            
            single_eco: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1]
                }
            },
            single_sup: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1]
                }
            },
            doble_sup: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1]
                }
            },
            twin_eco: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1]
                }
            },
            twin_sup: {
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
            guests_adult: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1]
                }
            },
            guests_child: {
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
        return Reservation;
    };
    