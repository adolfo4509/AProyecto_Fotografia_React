const { Sequelize, DataTypes } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

let sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
      database: DB_NAME,
      dialect: "postgres",
      host: DB_HOST,
      port: 5432,
      username: DB_USER,
      password: DB_PASSWORD,
      pool: {
        max: 3,
        min: 1,
        idle: 10000,
      },
      dialectOptions: {
        ssl: {
          require: true,
          // Ref.: https://github.com/brianc/node-postgres/issues/2009
          rejectUnauthorized: false,
        },
        keepAlive: true,
      },
      ssl: true,
    })
    : new Sequelize(
      `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
      { logging: false, native: false }
    );
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

const {
  User,
  Rol,
  Image,

  UserDetail,
  CartUsers,
  Orders,
} = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);



// User.belongsToMany(Product, { through: "user_product" });
// Product.belongsToMany(User, { through: "user_product" });

// Product.belongsToMany(Category, { through: "category_product" });
// Category.belongsToMany(Product, { through: "category_product" });

// Orders.belongsToMany(CartUsers, { through: "CartUsers_Orders" });
// CartUsers.belongsToMany(Orders, { through: "CartUsers_Orders" });

// User.hasMany(UserDetail, {
//   foreignKey: {
//     name: "user_detail",
//   },
// });
// UserDetail.belongsTo(User, {
//   foreignKey: {
//     name: "user_detail",
//   },
// });

// Product.hasMany(Cart, {
//   foreignKey: {
//     name: "Cart_product",
//   },
// });
// Cart.belongsTo(Product, {
//   foreignKey: {
//     name: "Cart_product",
//   },
// });

// Product.hasMany(CartUsers, {
//   foreignKey: {
//     name: "CartU_product",
//   },
// });
// CartUsers.belongsTo(Product, {
//   foreignKey: {
//     name: "CartU_product",
//   },
// });

// User.hasMany(CartUsers, {
//   foreignKey: {
//     name: "Cart_Users",
//   },
// });
// CartUsers.belongsTo(User, {
//   foreignKey: {
//     name: "Cart_Users",
//   },
// });

// Type.hasMany(Product, {
//   foreignKey: {
//     name: "type_product",
//   },
// });
// Product.belongsTo(Type, {
//   foreignKey: {
//     name: "type_product",
//   },
// });

// Product.hasMany(Image, {
//   foreignKey: {
//     name: "image_product",
//   },
// });
// Image.belongsTo(Product, {
//   foreignKey: {
//     name: "image_product",
//   },
// });

Rol.hasMany(User, {
  foreignKey: {
    name: "user_rol",
  },
});
User.belongsTo(Rol, {
  foreignKey: {
    name: "user_rol",
  },
});

// Product.hasMany(Rating, {
//   foreignKey: {
//     name: "Rating_product",
//   },
// });
// Rating.belongsTo(Product, {
//   foreignKey: {
//     name: "Rating_product",
//   },
// });

// User.hasMany(Rating, {
//   foreignKey: {
//     name: "Rating_User",
//   },
// });
// Rating.belongsTo(User, {
//   foreignKey: {
//     name: "Rating_User",
//   },
// });

// Product.hasMany(View, {
//   foreignKey: {
//     name: "View_product",
//   },
// });
// View.belongsTo(Product, {
//   foreignKey: {
//     name: "View_product",
//   },
// });

// User.hasMany(View, {
//   foreignKey: {
//     name: "View_User",
//   },
// });
// View.belongsTo(User, {
//   foreignKey: {
//     name: "View_User",
//   },
// });

// User.hasMany(UserDetail, {
//   foreignKey: {
//     name: "user_detail",
//   },
// });
// UserDetail.belongsTo(User, {
//   foreignKey: {
//     name: "user_detail",
//   },
// });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
