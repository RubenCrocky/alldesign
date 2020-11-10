const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
            .setTitle('Babbelhoek Community')
            .setDescription("Babbel hier of speel samen wat game's.")
            .setColor("#0099ff")
            .addField("Bot naam", client.user.username)
            .setTimestamp()
            .setFooter('Gezelligheid is onze prioriteit');

        return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "info"
}