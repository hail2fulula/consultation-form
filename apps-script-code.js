function doPost(e) {
  var data = JSON.parse(e.postData.contents);

  var TOKEN = "8768818918:AAF6SYsiyua_R5HWz9NqGrPApzsmFkVkLYM";
  var CHAT_ID = "-5199160729";

  var text = "📋 *Новая заявка!*\n\n"
    + "👤 *Имя:* " + data.firstName + " " + data.lastName + "\n"
    + "📧 *Email:* " + data.email + "\n"
    + "📱 *Телефон:* +1 " + data.phone + "\n"
    + "💰 *Сумма потерь:* " + data.lossAmount + "\n"
    + "📝 *Описание:*\n" + data.description;

  var url = "https://api.telegram.org/bot" + TOKEN + "/sendMessage";

  UrlFetchApp.fetch(url, {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify({
      chat_id: CHAT_ID,
      text: text,
      parse_mode: "Markdown"
    })
  });

  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}
