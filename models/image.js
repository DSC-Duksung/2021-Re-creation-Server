module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('Image', {
        image: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    }, {
        charset: 'utf8mb4', // 한글+이모티콘
        collate: 'utf8mb4_general_ci',
        timestamps: true,
    });

    Image.associate = (db) => {
        db.Image.belongsTo(db.User);
        db.Image.belongsTo(db.Category);
    };

    return Image;
}