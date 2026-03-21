function doPost(e) {
  var data = e.parameter;

  var TOKEN = "8768818918:AAF6SYsiyua_R5HWz9NqGrPApzsmFkVkLYM";
  var CHAT_ID = "-5199160729";

  var now = new Date();
  var dateTime = Utilities.formatDate(now, "America/Toronto", "yyyy-MM-dd HH:mm:ss");

  var text = "📋 New Lead Came In!\n\n"
    + "🏷 Campaign: Canada ENG\n"
    + "📅 Date/Time Created: " + dateTime + "\n"
    + "⚠️ Type of Scam: " + data.scamType + "\n"
    + "💰 Amount Lost: " + data.lossAmount + "\n"
    + "🕐 When Scam Occur: " + data.whenScam + "\n"
    + "💳 Transferred Money With: " + data.paymentMethod + "\n"
    + "🌍 Country: " + data.country + "\n"
    + "📝 Client's Comment: " + data.description + "\n"
    + "👤 Full Name: " + data.firstName + " " + data.lastName + "\n"
    + "📱 Phone Number: +1" + data.phone + "\n"
    + "📧 Email: " + data.email;

  var url = "https://api.telegram.org/bot" + TOKEN + "/sendMessage";

  UrlFetchApp.fetch(url, {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify({
      chat_id: CHAT_ID,
      text: text
    })
  });

  return HtmlService.createHtmlOutput("<p>OK</p>");
}
