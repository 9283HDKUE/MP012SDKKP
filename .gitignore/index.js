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
  client.user.setGame(".help | " + `${client.users.size} utilisateurs`, "http://twitch.tv/bot");
});
  
///La version du BOT
client.on('message', message => {

  if(message.content === prefix + "version"){
    var version_embed = new Discord.RichEmbed()
    .setThumbnail(client.user.avatarURL)
    .addField(":gear: Version", `Ma version est actuellement: 1.2.0 BETA`)
    .setColor("#0404B4")
    message.channel.sendMessage(version_embed)
   }

///Commande .skycommandes
if(message.content === prefix + "help"){
  var helpok_embed = new Discord.RichEmbed()
  .addField(":white_check_mark: Succès", `La liste des commandes est envoyée par message privé !`)
  .setColor("#00FF00")
  message.channel.sendMessage(helpok_embed)
   var help_embed = new Discord.RichEmbed()
   .setColor("#0174DF")
   .setTitle("Les commandes de Sky")
   .setThumbnail(client.user.avatarURL)
   .setDescription("\n**________________________________________________**\n**UTILES:**\n\n**.help**\nPermet de voir la liste des commandes\n**.info**\nAffiche les informations sur Sky\n**.version**\nPermet de savoir la version de Sky\n**.add**\nPour ajouter Sky sur ton serveur Discord\n**.maj**\nVoir les mises à jour effectuées sur Sky\n**.datecrea**\nSavoir la date de création de Sky\n**.myavatar**\nDemander le lien de son avatar\n**.ping**\nVoir le temps de latence entre Sky et le serveur\n**.don**\nFaire un don pour Sky\n**.equipe**\nPermet de voir l'équipe de Sky\n**.siteweb**\nPermet d'obtenir le lien du site web de Sky\n**.say**\nFaire dire quelque chose à Sky\n**.bvn**\nPermet de souhaiter la bienvenue à un utilisateur\n**.servers**\nPermet de voir le nombre de servers ou est Sky\n**.discord**\nObtenir le lien du serveur Discord de Sky\n**.infods**\nVoir les informations du serveur Discord\n**.mystats**\nPermet d'obtenir les statistiques de son compte\n**.online**\nPermet de savoir depuis combien de temps est en ligne Sky\n**________________________________________________**\n**SYSTEMES:**\n\n**.systsondage**\nPermet d'activer le système de sondage\n**.sondage**\nPermet de crée des sondages __(il faut d'abord exécuter la commande juste au-dessus pour pouvoir crée des sondages)__\n**.systvraioufaux**\nPermet d'activer le système de Vrai ou Faux\n**.vraioufaux**\nPermet de crée des Vrai ou Faux __(il faut d'abord exécuter la commande juste au-dessus pour pouvoir crée des Vrai ou Faux)__\n\n**________________________________________________**\n**MODERATION:**\n\n**.kick**\nKick l'utilisateur séléctionné\n**.ban**\nBanne l'utilisateur séléctionné\n**.mute**\nMute l'utilisateur séléctionné d'un salon spécifique\n**.unmute**\nDémute l'utilisateur séléctionné d'un salon spécifique\n**.clear**\nSupprime un nombre de messages\n**.warn**\nPermet d'avertir un utilisateur par MP\n**________________________________________________**\n**ADMINISTRATION:**\n\n**.alerteadm**\nPermet d'envoyer des informations pour les membres\n")
   .setFooter("Fiche commande - SkyBOT")
  message.author.send(help_embed);
}

 ///Commande .skyinfo
  if(message.content === prefix + "info") {
    var info_embed = new Discord.RichEmbed()
    .setTitle("Informations sur Sky")
    .addField(":small_blue_diamond: Nom :", `${client.user.username}`, true)
    .addField(":small_blue_diamond: Discriminateur:", `#${client.user.discriminator}`)
    .addField(":small_blue_diamond: ID:", `${client.user.id}`)
    .addField(":small_blue_diamond: Créateur:", "Runyard#2305")
    .setColor("#04B404")
    message.channel.sendMessage(info_embed)
    console.log(`SKY: L'utilisateur ${message.author.username} a demander les informations du BOT et du serveur actuel`)

  }

  ///Commande .skymaj
  if(message.content === prefix + "maj"){
    var helpok_embed = new Discord.RichEmbed()
    .addField(":white_check_mark: Succès", `La fiche **MAJ** est envoyée par message privé !`)
    .setColor("#00FF00")
    message.channel.sendMessage(helpok_embed)
    var help_embed = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .setTitle("Les mises à jour de Sky")
    .setDescription("Voici les MAJ effectuées jusqu'à maintenant:")
    .addField("MAJ 24.06.2018", "Ajout de la commande **.warn**, **.online** et dernièrement, corrections de quelques problèmes techniques")
    .addField("MAJ 21.06.2018", "Ajout de la commande: **.unmute** et **.datecrea** suppression de la commande **.recru** car aucune utilité, ajout de la commande **systvraioufaux** pour pouvoir activer le système de vraioufaux, et dernièrement ajout de la commande **.vraioufaux** pour pouvoir crée des Vrai ou Faux.")
    .addField("MAJ 17.06.2018", "Amélioration de la commande **.mute**, ajout des commandes: **.equipe**, **.siteweb** et **.recru**.")
    .addField("MAJ 14.06.2018", "Ajout de la commande **.mute**, optimisation de **Sky**")
    .addField("MAJ 10.06.2018", "Ajout de la commande **.alerteadm**, amélioration des commandes **.infods** et **.info**")
    .addField("MAJ 09.06.2018 (2)", "Modification du nom de quasiment toutes les commmandes, enlèvement du mot **Sky** des commandes, optimisation de Sky. Désormais la nouvelle commande pour voir la liste des commandes est **.help**.")
    .addField("MAJ 09.06.2018 (1)", "Mise en place de l'embed dans tous les commandes, changement des îcones de la commande **.sondage**, ajout des commandes **.say** et **.bvn**, ajout également des messages d'erreur en cas de problème")
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
      case "mystats":
  
      var userCreateDate = message.author.createdAt.toString().split(" ");
      var msgauthor = message.author.id;
  
      var stats_embed = new Discord.RichEmbed ()
      .setColor("#FF0000")
      .addField("Statistiques de l'utilisateur:", `${message.author.username}`)
      .addField(`ID:`, msgauthor, true)
      .addField("Ton discriminateur:", message.author.discriminator)
      .addField("Date de création du compte:", userCreateDate[1] + ' ' + userCreateDate[2] + ' ' + userCreateDate[3] + ' ')
      .addField("Ton dernier message:", message.author.lastMessage)
      .addField("Es-tu un bot ?", message.author.bot)
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
    .addField("Vous serez informez dès que la maintenance prendra fin.", "Pour savoir les nouveautés ajoutés, exécutez la commande **.maj** juste après la fin de la maintenance !")
    .setTimestamp()
    message.guild.channels.find("name", "🛃maintenances").sendEmbed(embed)
  }
  
  ///Commande .maintenancefin
  if(message.content === prefix + "maintenancefin") {
    let args = message.content.split(" ").slice(1);
    var embed = new Discord.RichEmbed()
    .setColor("#04B404")
    .setTitle(":white_check_mark: MAINTENANCE TERMINÉE")
    .addField("La maintenance est terminée.", "Exécutez la commande **.maj** pour savoir les nouveautés apportés lors cette maintenance !")
    .setTimestamp()
    message.guild.channels.find("name", "🛃maintenances").sendEmbed(embed)
  }
  
   ///Commande .nouveautés
  if(message.content === prefix + "nouveautés") {
    let args = message.content.split(" ").slice(1);
    var embed = new Discord.RichEmbed()
    .setColor("#B45F04")
    .setTitle("📯 DU NOUVEAU SUR SKY")
    .addField("Des nouveautés ont été ajoutés sur **Sky** !", "Exécutez la commande **.maj** pour savoir les nouveautés !")
    .setTimestamp()
    message.guild.channels.find("name", "📯nouveautés").sendEmbed(embed)
  }
  
  
  ///Commande .infodiscord
  if(message.content === prefix + "infods") {
       var embed = new Discord.RichEmbed()
      .setDescription(":information_source: Information du serveur Discord")
      .setThumbnail(message.guild.iconURL)
      .addField("Nom du serveur:", message.guild.name)
      .addField("Créateur du serveur:", message.guild.owner)
      .addField("Région du serveur:", message.guild.region)
      .addField("Crée le:", message.guild.createdAt)
      .addField("Tu as rejoins le:", message.member.joinedAt)
      .addField("Salon AFK:", message.guild.afkChannel)
      .addField("Nombre de membres:", message.guild.memberCount)
      .addField("Nombre de salons et catégories:", message.guild.channels.size)

      .setColor("0x0000FF")
    message.channel.sendEmbed(embed)

    }

  ///Commande .skyping
  if(message.content === prefix + "ping"){
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

      ///Commande .systsondage
    if (message.content === '.systvraioufaux'){
      if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.author.send(":negative_squared_cross_mark: Vous n'avez pas la permission d'éxecuter cette commande. (commande éxecutée: .systvraioufaux)");
      var systbvn_embed = new Discord.RichEmbed()
      .addField(":white_check_mark: Succès", "Le salon **❓vraioufaux** a été crée et le système a été activé.")
      .setColor("#00FF00")
      message.channel.guild.createChannel("❓vraioufaux");
      message.channel.sendMessage(systbvn_embed).then(msg => msg.delete(5000))
  
     }
  
     ///Commande .say
     if (message.content.startsWith(prefix + "say")) {
      if(message.content === '.say') return message.channel.sendMessage(":x: **Erreur** ! Merci d'ajouter un message.").then(msg => msg.delete(7000))
      message.delete()
          let args = message.content.split(" ").slice(1);
          let thingtoEcho = args.join(" ")
          var sayembed = new Discord.RichEmbed()
                .setDescription(thingtoEcho)
                .setColor(0x0B3B39)
                .setFooter("By " + message.author.username);
                message.channel.sendMessage(sayembed);

     }


     ///Commande .alerteadm
      if (message.content.startsWith(prefix + "alerteadm")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.author.send(":negative_squared_cross_mark: Vous n'avez pas la permission d'éxecuter cette commande. (commande éxecutée: .alerteadm)");
        if(message.content === '.alerteadm') return message.channel.sendMessage(":x: **Erreur** ! Merci d'ajouter un message.").then(msg => msg.delete(7000))
        message.channel.sendMessage("@everyone :loudspeaker: **INFORMATION POUR LES MEMBRES**")
        message.delete()
            let args = message.content.split(" ").slice(1);
            let thingtoEcho = args.join(" ")
            var alerteadmembed = new Discord.RichEmbed()
                  .setTitle(":warning: MESSAGE DE L'ÉQUIPE:")
                  .setDescription(thingtoEcho)
                  .setFooter(message.guild.name)
                  .setColor("#FF4000")
                  message.channel.sendMessage(alerteadmembed)
  
      }
  
       ///Commande Mute
       if(message.content.startsWith(prefix + "mute")) {
        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.author.send(":negative_squared_cross_mark: Vous n'avez pas la permission d'exécuter cette commande (commande exécutée: .mute)!");
 
        if(message.mentions.users.size === 0) {
            return message.channel.send(':x: **OOPS** Vous devez mentionner un utilisateur à mute !');
        }
 
        var mute = message.guild.member(message.mentions.users.first());
        if(!mute) {
            return message.channel.send(":x: **OOPS** Je n'ai pas trouvé l'utilisateur.");
        }
 
        if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.channel.send("Je n'ai pas la permission ! Merci de le mettre..");
        message.channel.overwritePermissions(mute, { SEND_MESSAGES: false}).then(member => {
          var muteok = new Discord.RichEmbed()
          .setTitle(":mute:  Mute")
          .setDescription(`L'utilisateur ${mute.user.username} a été mute de ce salon par ${message.author.username}.`)
          .setColor("#DF0101")
            message.channel.send(muteok)
        })
    }

    ///Commande UnMute
    if(message.content.startsWith(prefix + "unmute")) {
      if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.author.send(":negative_squared_cross_mark: Vous n'avez pas la permission d'exécuter cette commande (commande exécutée: .unmute)!");

      if(message.mentions.users.size === 0) {
          return message.channel.send(':x: **OOPS** Vous devez mentionner un utilisateur à mute !');
      }

      var mute = message.guild.member(message.mentions.users.first());
      if(!mute) {
          return message.channel.send(":x: **OOPS** Je n'ai pas trouvé l'utilisateur.");
      }

      if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.channel.send("Je n'ai pas la permission ! Merci de le mettre..");
      message.channel.overwritePermissions(mute, { SEND_MESSAGES: true}).then(member => {
        var muteoff = new Discord.RichEmbed()
        .setTitle(":loud_sound: Démute")
        .setDescription(`L'utilisateur ${mute.user.username} a été démute de ce salon par ${message.author.username}`)
        .setColor("#04B404")
          message.channel.send(muteoff)
      })
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
    if(message.content === prefix + "don"){
      var skydon_embed = new Discord.RichEmbed()
      .addField(":gift_heart: Don pour Sky", "Si tu souhaites me faire un don (même des petits), clique ici: https://hebergnity.com/manager/financer?cible=O7RK7DPR ! En me fesant un don, tu as directement le rang: **Sky Donator**, stylé non ? ")
      .setColor("#FFFFFF")
      message.channel.sendMessage(skydon_embed)
    }
    
    ///Commande .add
    if(message.content === prefix + "add"){
      var skyadd_embed = new Discord.RichEmbed()
      .addField(":globe_with_meridians: Ajouter Sky", "Heureux que tu me veux sur ton serveur Discord :robot: ! Clique sur ce lien: https://discordapp.com/oauth2/authorize?client_id=450323683840491530&scope=bot&permissions=2146958551")
      .setColor("#0404B4")
      message.channel.sendMessage(skyadd_embed)
    }
    
     ///Commande .discord
    if(message.content === prefix + "discord"){
      var skydiscord_embed = new Discord.RichEmbed()
      .addField(":thought_balloon: Serveur Discord de Sky", 'Heureux que tu souhaites rejoindre mon serveur Discord :robot: ! Tu seras au courant des **maintenances** et autres. Clique sur ce lien: https://discord.gg/YuX9yWD')
      .setColor("#0404B4")
      message.channel.sendMessage(skydiscord_embed)
    }
  
  ///Commande .equipe
    if(message.content === prefix + "equipe"){
      var skydiscord_embed = new Discord.RichEmbed()
      .setTitle(":necktie: Équipe de Sky")
      .addField("Runyard (Runyard#2305)", "Fondateur et Développeur")
      .addField("Swarwerth (Swarwerth#2943)", "Administrateur")
      .setColor("#0404B4")
      message.channel.sendMessage(skydiscord_embed)
    }

    ///Commande .datecrea
    if(message.content === prefix + "datecrea"){
      var datecrea_embed = new Discord.RichEmbed()
      .setTitle(":calendar_spiral: Date de création de Sky")
      .addField("Sky a été crée le:", "Jeudi 31 mai à **14h34** (heure de Paris)")
      .setColor("#0404B4")
      message.channel.sendMessage(datecrea_embed)
    }
  
  ///Commande .siteweb
    if(message.content === prefix + "siteweb"){
      var skydiscord_embed = new Discord.RichEmbed()
      .setTitle(":bookmark_tabs: Site web de Sky")
      .addField("Site web en cours de création...", "Il sera disponible prochainement")
      .setColor("#0404B4")
      message.channel.sendMessage(skydiscord_embed)
    }

    if (message.content.startsWith(prefix + "warn")){
 
if (message.channel.type === "dm") return;
 
var mentionned = message.mentions.users.first();
 
if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.author.send(":negative_squared_cross_mark: Vous n'avez pas la permission d'éxecuter cette commande. (commande éxecutée: .warn)");
 
if(message.mentions.users.size === 0) {
 
  return message.channel.send(":x: **ERREUR** Merci de mentionner l'utilisateur à avertir");
 
}else{
 
    const args = message.content.split(' ').slice(1);
 
    const mentioned = message.mentions.users.first();
 
    if (message.member.hasPermission('KICK_MEMBERS')){
 
      if (message.mentions.users.size != 0) {
 
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {
 
          if (args.slice(1).length != 0) {
            message.delete()
 
            var warned_embed = new Discord.RichEmbed()
            .setTitle(":warning: AVERTISSEMENT")
            .setColor("#DF0101")
            .addField('**'+mentionned.tag+' a été averti**', message.guild.name)
            message.channel.sendMessage(warned_embed)

            var warnedprivate_embed = new Discord.RichEmbed()
           .setTitle(":warning: TU AS REÇUS UN AVERTISSEMENT")
           .setColor("#DF0101")
           .addField(`Depuis le serveur **${message.guild.name}**`, `Donné par **${message.author.username}**\n\n**Raison:** ` + args.slice(1).join(' '))
           message.mentions.users.first().send(warnedprivate_embed)
          

          } else {
 
            message.channel.send(":x: **ERREUR** Merci de respecter: "+prefix+"warn **user** **raison**");
 
          }
 
        } else {
 
          message.channel.send(":x: **ERREUR** Merci de respecter: "+prefix+"warn **user** **raison**");
 
        }
 
      } else {
 
        message.channel.send(":x: **ERREUR** Merci de respecter: "+prefix+"warn **user** **raison**");
 
      }
 
    } else {
 
      message.channel.send("**:x: **ERREUR** Vous n'avez pas la permission `Bannir membre` ou bien `Exclure membre` dans ce serveur**");
 
    }
 
  }
 
}

///Commande .online
if (message.content === '.online'){
  message.delete();
  const sicon = client.user.displayAvatarURL
  
            var online_embed = new Discord.RichEmbed()
            
                .setTitle(":clock9: TOUJOURS EN LIGNE")
                .setThumbnail(client.user.avatarURL)
                .addField("Je suis là depuis", (Math.round(client.uptime / (1000 * 60 * 60))) + ' heures ' + (Math.round(client.uptime / (1000 * 60)) % 60) + ' minutes et ' + (Math.round(client.uptime / 1000) % 60) + ' secondes')
                .setColor("#389aea")
                .setFooter("Sky")
                message.channel.send(online_embed)
        }
    
    ///Commande .servers
    if(message.content === prefix + "servers"){
      var statsok_embed = new Discord.RichEmbed()
        .addField(":file_cabinet: Serveurs", `Pfiou, je suis actuellement en marche dans ${client.guilds.size} serveurs avec ${client.users.size} utilisateurs !`)
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
      if (message.content.startsWith(prefix + "vraioufaux")) {
        if(message.content === '.vraioufaux') return message.channel.sendMessage(":x: **Erreur** ! Merci d'ajouter la question.").then(msg => msg.delete(7000))
        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.author.send(":negative_squared_cross_mark: Vous n'avez pas la permission d'éxecuter cette commande. (commande éxecutée: .vraioufaux)");
            let args = message.content.split(" ").slice(1);
            let thingtoEcho = args.join(" ")
            var vraioufaux_embed = new Discord.RichEmbed()
            .addField(":white_check_mark: Succès", 'Le vraioufaux a été crée.')
            .setColor("#0404B4")
            message.channel.sendMessage(vraioufaux_embed).then(msg => msg.delete(5000))
            message.guild.channels.find("name", "❓vraioufaux").sendMessage("@everyone **Allez ! Est-ce vrai ou bien faux ?** :small_red_triangle_down:")
            var vraioufauxokembed = new Discord.RichEmbed()
                  .setTitle("❓ VRAI OU FAUX:")
                  .addField(thingtoEcho, "Répondre avec ✅ ou ❌")
                  .setColor("#0A2A29")
                  .setTimestamp()
                  message.guild.channels.find("name", "❓vraioufaux").sendEmbed(vraioufauxokembed)
                 .then(function (message) {
                   message.react("✅")
                   message.react("❌")
                 }).catch(function() {
  
                 })

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
                  .setTitle("📊 SONDAGE:")
                  .addField(thingtoEcho, "Répondre avec 👍 ou 👎")
                  .setColor("#00FFFF")
                  .setTimestamp()
                  message.guild.channels.find("name", "📊sondages").sendEmbed(sondageembed)
                 .then(function (message) {
                   message.react("👍")
                   message.react("👎")
                 }).catch(function() {
  
                 })

                }
          
});
