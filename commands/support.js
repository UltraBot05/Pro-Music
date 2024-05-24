
const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "support",
  description: "Get support server link",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    try {

      const supportServerLink = "https://discord.gg/PGhBshRCep";
      const githubLink = "https://github.com/UltraBot05";
        const embed = new EmbedBuilder()
            .setColor('#b300ff')
            .setAuthor({
              name: 'Support Server',
              iconURL: 'https://cdn.discordapp.com/emojis/607710267324891160.webp?size=48&quality=lossless&name=HAPPY', 
              url: 'https://discord.gg/PGhBshRCep'
          })
            .setDescription(`➡️ **Join our Discord server for support:**\n- Discord - ${supportServerLink}\n\n➡️ **Follow us on:**\n- GitHub - ${githubLink}`)
            .setImage('https://cdn.discordapp.com/attachments/1243434531068055615/1243539750888013854/static_1.png?ex=6651d824&is=665086a4&hm=6b5aa540e7b23160d986e7ec24e5fd01ce242856c342e5a9ecc234faede5249e&')
            .setTimestamp();

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
    console.error(e); 
  }
  },
};
