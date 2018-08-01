// module.exports = function(sequelize, DataTypes) {
//   var Example = sequelize.define("Example", {
//     text: DataTypes.STRING,
//     description: DataTypes.TEXT
//   });
//   return Example;
// };

module.exports = function(sequelize, product){
var product = sequelize.define("product",{ 
  id: sequelize.INTEGER,
  cateogry_id: sequelize.STRING,
  product_name: sequelize.STRING,
  product_category: sequelize.STRING,
  product_condition: sequelize.STRING,
  image_url: sequelize.STRING,
  product_description: sequelize.STRING,
  product_price: sequelize.DOUBLE,
  product_location: sequelize.STRING,
  featured_product: sequelize.BOOLEAN,
  user_id: sequelize.STRING  
}); 
return product;
}
// const profile = sequelize.define('profile',{
//   id: sequelize.integer,
//   firstname: sequelize.STRING,
//   lastname: sequelize.STRING,
//   email: sequelize.STRING,
//   location: sequelize.STRING,
//   phone_nuber: sequelize.STRING
// });
