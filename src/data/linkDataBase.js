const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// установка схемы
const userScheme = new Schema({
  title: String,
  url: String,
});
// определяем модель User
const User = mongoose.model("User", userScheme);
// создаем объект модели User
const user = new User({ name: "Bill", age: 41 });

async function main() {
  // подключемся к базе данных
  await mongoose.connect("mongodb://127.0.0.1:27017/MyLinkDatabase");

  // сохраняем модель user в базу данных
  await user.save();
  console.log("Сохранен объект", user);

  // отключаемся от базы данных
  await mongoose.disconnect();
}
// запускаем подключение и взаимодействие с базой данных
main().catch(console.log);
