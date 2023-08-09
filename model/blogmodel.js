

module.exports = (sequelize, DataTypes) => {
    const Blogs = sequelize.define("blogs", {   //here the user is the name of the table
    
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      subtitle: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull:false
     
      },
    });
    return Blogs;
  };