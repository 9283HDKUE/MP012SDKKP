///Connexion à Discord.js
const Discord = require('discord.js');
const client = new Discord.Client();

///Le préfixe
var prefix = '.';

///Connexion du bot
client.login(process.env.TOKEN)

///Avertissement en marche
client.on("ready", () => {
  console.log("SKY: Je suis prêt")
  client.user.setGame(`.skyh | SkyBOT`);
});
  
///La version du BOT
client.on('message', message => {

  if(message.content === prefix + "skyversion"){
    var version_embed = new Discord.RichEmbed()
    .setThumbnail(client.user.avatarURL)
    .addField(":gear: Version", `Ma version est actuellement: 1.1.0`)
    .setColor("#0404B4")
    message.channel.sendMessage(version_embed)
   }

///Commande .skycommandes
   if(message.content === prefix + "skyh"){
    var helpok_embed = new Discord.RichEmbed()
    .addField(":white_check_mark: Succès", `La liste des commandes est envoyée par message privé !`)
    .setColor("#00FF00")
    message.channel.sendMessage(helpok_embed)
     var help_embed = new Discord.RichEmbed()
    .setColor("#0174DF")
    .setTitle("Les commandes de Sky")
    .setThumbnail(client.user.avatarURL)
    .setDescription("Voici les commandes disponibles:")
    .addField(".skyh", "Affiche les commandes")
    .addField(".skyinfo", "Affiche les informations sur Sky")
    .addField(".skyversion", "Voir la version de Sky")
    .addField(".skyadd", "Pour ajouter Sky sur ton serveur Discord")
    .addField(".skymaj", "Voir les mises à jour effectuées sur Sky")
    .addField(".myavatar", "Demander le lien de son avatar")
    .addField(".skyping", "Voir le temps de latence entre Sky et le serveur")
    .addField(".skydon", "Faire un don pour Sky")
    .addField(".say", "Faire dire quelque chose à Sky")
    .addField(".bvn", "Permet de souhaiter la bienvenue à un utilisateur")
    .addField(".skyservers", "Savoir le nombre de serveur dans lequel est Sky")
    .addField(".skydiscord", "Obtenir le lien du serveur Discord de Sky")
    .addField(".infodiscord", "Voir les informations du serveur Discord")
    .addField(".statistiques", "Voir les statistiques de ton compte")
    .addField(".systsondage", "Permet d'activer le système de sondage")
    .addField(".sondage", "Permet de crée des sondages **(il faut d'abord exécuter la commande juste au-dessus pour pouvoir crée des sondages)**")
    .addField("Modération - .kick", "Kick l'utilisateur séléctionné")
    .addField("Modération - .ban", "Banne l'utilisateur séléctionné")
    .addField("Modération - .clear", "Supprime un nombre de messages")
    .setFooter("Fiche commande - SkyBOT")
    message.author.send(help_embed);
  }

 ///Commande .skyinfo
  if(message.content === prefix + "skyinfo") {
    var info_embed = new Discord.RichEmbed()
    .setColor("#04B404")
    .setTitle("Informations sur Sky")
    .addField(":robot: Mon nom :", `${client.user.tag}`, true)
    .addField(":robot: Discriminateur:", `#${client.user.discriminator}`)
    .addField(":robot: Mon ID:", `${client.user.id}`)
    .addField(":robot: Mon créateur:", "Runyard#2305")
    message.channel.sendMessage(info_embed)
    console.log(`SKY: L'utilisateur ${message.author.username} a demander les informations du BOT et du serveur actuel`)

  }

  ///Commande .skymaj
  if(message.content === prefix + "skymaj"){
    var helpok_embed = new Discord.RichEmbed()
    .addField(":white_check_mark: Succès", `La fiche **MAJ** est envoyée par message privé !`)
    .setColor("#00FF00")
    message.channel.sendMessage(helpok_embed)
    var help_embed = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .setTitle("Les mises à jour de Sky")
    .setDescription("Voici les MAJ effectuées jusqu'à maintenant:")
    .addField("MAJ 09.06.2018", "Mise en place de l'embed dans tous les commandes, changement des îcones de la commande **.sondage**, ajout des commandes **.say** et **.bvn**, ajout également des messages d'erreur en cas de problème")
    .addField("MAJ 07.06.2018", "Ajout de la commande .systsondage et .sondage (il faut d'abord exécuter la commande .systsondage), suppression de la commande .systbienvenue, le système de bienvenue sera de retour prochainement")
    .addField("MAJ 06.06.2018 (2)", "Amélioration du design des commandes et automatisation totale de la commande .systbienvenue et du système bienvenue")
    .addField("MAJ 06.06.2018 (1)", "Ajout des commandes: .myavatar, skyprefix, .skydon, .systbienvenue, amélioration complète de tous les commandes, retour de la commande .clear, ajout d'un système de bienvenue, update version: 1.1.0")
    .addField("MAJ 05.06.2018", "Ajout des commandes: .infodiscord, .skyping, .skydiscord, retour de la commande .skyadd changement de la commande .commandes par .skyh")
    .addField("MAJ 04.06.2018", "Ajout des commandes pour la modération: .kick, .clear mais également .skymaj et skyadd")
    .addField("MAJ 03.06.2018", "Ajout d'une commande pour la modération: .ban")
    .addField("MAJ 02.06.2018", "Ajout des commandes: .skyversion et .statistiques")
    .addField("MAJ 01.06.2018", "Changement du préfixe * en .")
    .setFooter("Fiche MAJ - SkyBOT")
    message.author.send(help_embed);
    console.log("SKY: Un utilisateur a demander la fiche de MAJ")
  }
  

  ///Commande .kick
    if(message.content.startsWith(prefix + "kick")) {

    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.author.send(":negative_squared_cross_mark: Vous n'avez pas la permission d'éxecuter cette commande. (commande éxecutée: .kick)");
    if(message.mentions.users.size === 0) {
      return message.channel.send(":negative_squared_cross_mark: Vous n'avez pas mentionner l'utilisateur à kick !").then(msg => msg.delete(10000));
    }
    
    var kick = message.guild.member(message.mentions.users.first());
    if(!kick) {
      return message.channel.send(":negative_squared_cross_mark: L'utilisateur n'existe pas.")
    }

    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
      return message.channel.send(":negative_squared_cross_mark: Je n'ai pas la permission pour exclure. Merci de l'activer.");

    }

    kick.kick().then(member => {
      var kick_embed = new Discord.RichEmbed()
      .addField(":door:  Exclusion", `L'utilisateur ${member.user.username} a été kick par ${message.author.username}.`)
      .setColor("#DF0101")
      message.channel.sendMessage(kick_embed)

    });

  }

  ///Commande .ban
  if(message.content.startsWith(prefix + "ban")) {

    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.author.send(":negative_squared_cross_mark: Vous n'avez pas la permission d'éxecuter cette commande. (commande éxecutée: .ban)");
    if(message.mentions.users.size === 0) {
      return message.channel.send(":negative_squared_cross_mark: Vous n'avez pas mentionner l'utilisateur à bannir !").then(msg => msg.delete(10000));
    }
    
    var ban = message.guild.member(message.mentions.users.first());
    if(!ban) {
      return message.channel.send(":negative_squared_cross_mark: L'utilisateur n'existe pas.")
    }

    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
      return message.channel.send(":negative_squared_cross_mark: Je n'ai pas la permission pour exclure. Merci de l'activer.");

    }

    ban.ban().then(member => {
      var ban_embed = new Discord.RichEmbed()
      .addField(":lock: Bannissement", `L'utilisateur ${member.user.username} a été banni par ${message.author.username}.`)
      .setColor("#DF0101")
      message.channel.sendMessage(ban_embed)

    });

  }

  ///Commande .clear
  if(message.content.startsWith(prefix + "clear")) {
    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.author.send(":negative_squared_cross_mark: Vous n'avez pas la permission d'éxecuter cette commande. (commande éxecutée .clear)");
    let args = message.content.split(" ").slice(1);
    
    if(!args[0]) return message.channel.send(":negative_squared_cross_mark: Merci de préciser un nombre de messages à supprimer.")
    message.channel.bulkDelete(args[0]).then(() => {
      
      var clearno_embed = new Discord.RichEmbed()
      .addField(":cyclone: Succès", `${args[0]} messages supprimés du salon`)
      .setColor("#00FF00")
      message.channel.sendMessage(clearno_embed).then(msg => msg.delete(5000));

});

}
  
  ///Commande .statistiques
if(!message.content.startsWith(prefix)) return;
  var args = message.content.substring(prefix.length).split(" ");
   
  switch (args[0].toLowerCase()) {
      case "statistiques":
  
      var userCreateDate = message.author.createdAt.toString().split(" ");
      var msgauthor = message.author.id;
  
      var stats_embed = new Discord.RichEmbed ()
      .setColor("#FF0000")
      .setTitle(`Statistiques de l'utilisateur: ${message.author.username}`)
      .addField(`ID:`, msgauthor, true)
      .addField("Date de création du compte:", userCreateDate[1] + ' ' + userCreateDate[2] + ' ' + userCreateDate[3])
      .setThumbnail(message.author.avatarURL)
      var statsok_embed = new Discord.RichEmbed()
      .addField(":white_check_mark: Succès", "Les statistiques de ton compte ont été envoyés par message privé.")
      .setColor("#00FF00")
      message.channel.sendMessage(statsok_embed)
      message.author.send({embed: stats_embed});
      break;
  }

  ///Commande .maintenance
  if(message.content === prefix + "maintenance") {
    let args = message.content.split(" ").slice(1);
    var embed = new Discord.RichEmbed()
    .setColor("#FF0000")
    .setTitle(":warning: ALERTE MAINTENANCE")
    .addField("Vous serez informez dès que la maintenance prendra fin.", "Pour savoir les nouveautées ajoutées, exécutez la commande **.skymaj** juste après la fin de la maintenance !")
    .setTimestamp()
    message.guild.channels.find("name", "🛃maintenances").sendEmbed(embed)
  }
  
  ///Commande .maintenancefin
  if(message.content === prefix + "maintenancefin") {
    let args = message.content.split(" ").slice(1);
    var embed = new Discord.RichEmbed()
    .setColor("#04B404")
    .setTitle(":white_check_mark: MAINTENANCE TERMINÉE")
    .addField("La maintenance est terminée.", "Exécutez la commande **.skymaj** pour savoir les nouveautées apportées lors cette maintenance !")
    .setTimestamp()
    message.guild.channels.find("name", "🛃maintenances").sendEmbed(embed)
  }
  
  
  ///Commande .infodiscord
  if(message.content === prefix + "infodiscord") {
       var embed = new Discord.RichEmbed()
      .setDescription(":information_source: Information du serveur Discord")
      .addField("Nom du serveur:", message.guild.name)
      .addField("Créateur du serveur:", message.guild.owner)
      .addField("Crée le:", message.guild.createdAt)
      .addField("Tu as rejoin le serveur le:", message.member.joinedAt)
      .addField("Nombre d'utilisateurs dans le serveur:", message.guild.memberCount)
      .setColor("0x0000FF")
    message.channel.sendEmbed(embed)

    }

  ///Commande .skyping
  if(message.content === prefix + "skyping"){
    var ping_embed = new Discord.RichEmbed()
    .addField(":satellite_orbital: Ping", 'Temps de latence avec le serveur: `' + `${message.createdTimestamp - Date.now()}` + ' ms`')
    .setColor("#0404B4")
    message.channel.sendMessage(ping_embed)
  }

 
   ///Commande .systsondage
   if (message.content === '.systsondage'){
    if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.author.send(":negative_squared_cross_mark: Vous n'avez pas la permission d'éxecuter cette commande. (commande éxecutée: .systsondage)");
    var systbvn_embed = new Discord.RichEmbed()
    .addField(":white_check_mark: Succès", "Le salon **📊sondages** a été crée et le système a été activé.")
    .setColor("#00FF00")
    message.channel.guild.createChannel("📊sondages");
    message.channel.sendMessage(systbvn_embed).then(msg => msg.delete(5000))

   }

   ///Commande .say
    if (message.content.startsWith(prefix + "say")) {
      if(message.content === '.say') return message.channel.sendMessage(":x: **Erreur** ! Merci d'ajouter un message.").then(msg => msg.delete(7000))
      message.delete()
          let args = message.content.split(" ").slice(1);
          let thingtoEcho = args.join(" ")
          var sayembed = new Discord.RichEmbed()
                .addField(message.author.username + " dit:", thingtoEcho)
                .setColor("#0B3B39")
                message.channel.sendMessage(sayembed)

    }


    ///Commande bvn
    if (message.content.startsWith(prefix + "bvn")) {
      if(message.content === '.bvn') return message.channel.sendMessage(":x: **Erreur** ! Merci de mentionner un utilisateur pour souhaiter la bienvenue.").then(msg => msg.delete(7000))
      message.delete()
      let args = message.content.split(" ").slice(1);
      let thingtoEcho = args.join(" ")
      var bvnembed = new Discord.RichEmbed()
            .setTitle(":trident: BIENVENUE")
            .addField(message.author.username + " souhaite la bienvenue à:", thingtoEcho)
            .setFooter(message.guild.name)
            .setColor("#0A0A2A")
            message.channel.sendMessage(bvnembed)

}

  
  ///Commande .skydon
  if(message.content === prefix + "skydon"){
    var skydon_embed = new Discord.RichEmbed()
    .addField(":gift_heart: Don pour Sky", "Si tu souhaites me faire un don (même des petits), clique ici: https://paypal.me/skybotdiscord ! En me fesant un don, tu as directement le rang: **Sky Donator**, stylé non ? ")
    .setColor("#FFFFFF")
    message.channel.sendMessage(skydon_embed)
  }
  
  ///Commande .skyadd
  if(message.content === prefix + "skyadd"){
    var skyadd_embed = new Discord.RichEmbed()
    .addField(":globe_with_meridians: Ajouter Sky", "Heureux que tu me veux sur ton serveur Discord :robot: ! Clique sur ce lien: https://discordapp.com/oauth2/authorize?client_id=450323683840491530&scope=bot&permissions=1878522951")
    .setColor("#0404B4")
    message.channel.sendMessage(skyadd_embed)
  }
  
   ///Commande .skydiscord
  if(message.content === prefix + "skydiscord"){
    var skydiscord_embed = new Discord.RichEmbed()
    .addField(":thought_balloon: Serveur Discord de Sky", 'Heureux que tu souhaites rejoindre mon serveur Discord :robot: ! Tu seras au courant des **maintenances** et autres. Clique sur ce lien: https://discord.gg/YuX9yWD')
    .setColor("#0404B4")
    message.channel.sendMessage(skydiscord_embed)
  }
  
  ///Commande .skyservers
  if(message.content === prefix + "skyservers"){
    var statsok_embed = new Discord.RichEmbed()
      .addField(":file_cabinet: Serveurs", `Pfiou, je suis actuellement en marche dans ${client.guilds.size} serveurs !`)
      .setColor("#FFFFFF")
      message.channel.sendMessage(statsok_embed)
   }
              

  ///Commande .myavatar
    if (message.content === '.myavatar'){
      var OKMyavatar_embed = new Discord.RichEmbed()
      .addField(":white_check_mark: Succès", "Le lien de ton avatar a été envoyé par message privé !")
      .setColor("#00FF00")
      message.channel.sendMessage(OKMyavatar_embed);
      message.author.send('Voici le lien de ton avatar :arrow_down_small:')
      message.author.send(message.author.avatarURL)
    }

    ///Commande .sondage
    if (message.content.startsWith(prefix + "sondage")) {
      if(message.content === '.sondage') return message.channel.sendMessage(":x: **Erreur** ! Merci d'ajouter la question.").then(msg => msg.delete(7000))
      if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.author.send(":negative_squared_cross_mark: Vous n'avez pas la permission d'éxecuter cette commande. (commande éxecutée: .sondage)");
          let args = message.content.split(" ").slice(1);
          let thingtoEcho = args.join(" ")
          var sondageok_embed = new Discord.RichEmbed()
          .addField(":white_check_mark: Succès", 'Le sondage a été crée.')
          .setColor("#0404B4")
          message.channel.sendMessage(sondageok_embed).then(msg => msg.delete(5000))
          message.guild.channels.find("name", "📊sondages").sendMessage("@everyone **Allez ! Votez juste en-dessous** :small_red_triangle_down:")
          var sondageembed = new Discord.RichEmbed()
                .setTitle("📊 Un sondage est lancé:")
                .addField(thingtoEcho, "Répondre avec ✅ ou ❌")
                .setColor("#00FFFF")
                .setTimestamp()
                message.guild.channels.find("name", "📊sondages").sendEmbed(sondageembed)
               .then(function (message) {
                 message.react("✅")
                 message.react("❌")
               }).catch(function() {

               })

          
}});
