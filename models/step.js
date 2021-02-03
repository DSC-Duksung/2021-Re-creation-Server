module.exports = (sequelize, DataTypes) => {
    const Step = sequelize.define('Step', {
        step: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        contents: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    }, {
        charset: 'utf8mb4', // 한글+이모티콘
        collate: 'utf8mb4_general_ci',
    });

    Step.associate = (db) => {
        
    };

    return Step;
}