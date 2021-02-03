module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        title: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
    }, {
        charset: 'utf8mb4', // 한글+이모티콘
        collate: 'utf8mb4_general_ci',
    });

    Category.associate = (db) => {
        db.Category.belongsTo(db.User);
    };

    return Category;
}