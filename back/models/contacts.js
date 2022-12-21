// Подключиение модуля работы с базой
const mongoose = require("mongoose");

// Настройка полей (схемы)
const contactSchema = new mongoose.Schema({
    phone: String,
});

module.exports = mongoose.model("contacts", contactSchema);