const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
            .setTitle('AllDesign')
            .setDescription("Free Designs")
            .setColor("#0099ff")
            .addField("Bot naam", client.user.username)
            .setTimestamp()
            .setFooter('Kwaliteit Is ons hoofddoel');

        return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "info"
}