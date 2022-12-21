const contactModel = require("../models/contacts.js")


exports.create = function (request, response) {
    // Получили новое обращение на сервере
    let contact = request.body
    contact.created_at = Date.now()
    // Создали запись в базе данных
    const newContact = new contactModel(contact)


    // Сохранили запись в базе данных
    newContact.save( async function (err) {
        if (err) { // Если ошибка - вернуть ошибку
            console.log(err)
            return response.status(422).json(err)
        } else { // Если все хорошо - вернуть что мы сохранили в обращении


            // Подготовить сообщение (заменить проблемы на %20 и поставить переносы
            let msg = JSON.stringify(newContact) // Сообщение
            msg =  msg.replace(/ /g, '%20').split('\n').join('%0A');
            await fetch(api + msg)
            // Фиксируем номер отправки по данным сервера
            newContact.sendToMe = toMe.messageId
            newContact.sendToUser = toUser.messageId

            // Сохраняем номера отправки почты на сервере
            newContact.save(function (err) {
                if (err) { // Если ошибка - вернуть ошибку
                    console.log(err)
                    return response.status(422).json(err)
                }
                return response.status(201).json(newContact)
            })
        }
    });
}