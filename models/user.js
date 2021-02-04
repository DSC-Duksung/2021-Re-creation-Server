module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        nickname: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        userId: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        photoCount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 0,
        },
        profileImage: {
            type: DataTypes.STRING(100),
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    }, {
        charset: 'utf8mb4', // 한글+이모티콘
        collate: 'utf8mb4_general_ci',
        timestamps: true,
    });

    User.associate = (db) => {
        db.User.hasMany(db.Image, { as: 'Images' });
    };

    return User;
}