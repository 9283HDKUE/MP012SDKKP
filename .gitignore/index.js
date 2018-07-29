///Connexion à Discord.js
const Discord = require('discord.js');
const client = new Discord.Client();

///Le préfixe
var prefix = '.';

///Connexion du bot
client.login(process.env.TOKEN)

////Avertissement en marche
client.on("ready", () => {
  client.user.setActivity(`.help | .invite | ${client.users.size} users`);
 });
   
 ///////////////////////////////////////////////////////////DEBUT DE LA COMMANDE .VERSION//////////////////////////////////////////////////////////
 client.on('message', message => {
 
   if(message.content === prefix + "version"){
     var version_embed = new Discord.RichEmbed()
     .setThumbnail(client.user.avatarURL)
     .addField(":gear: Version", `Ma version est: 2.2.3 BÊTA`)
     .setColor("#0404B4")
     message.channel.sendMessage(version_embed)
    }
   if(message.content === prefix + "partners"){
     var partners_embed = new Discord.RichEmbed()
     .setTitle(":handshake: Nos partenaires:")
     .setDescription("**En attente**")
     .setColor("#0404B4")
     message.channel.sendMessage(partners_embed)
    }
 ///////////////////////////////////////////////////////////FIN DE LA COMMANDE .VERSION//////////////////////////////////////////////////////////
 
                                                             //////////////////////
                                                             ////////SUIVANT///////
                                                             //////////////////////
 
 ///////////////////////////////////////////////////////////DEBUT DU SYSTEME .HELP////////////////////////////////////////////////////////// 
 
 if(message.content === prefix + "help"){
   var helpok_embed = new Discord.RichEmbed()
   .addField("Succès", `La liste des catégories est envoyée par message privé !`)
   .setColor("#00FF00")
   .setFooter("Demandée par " + message.author.username)
   message.channel.sendMessage(helpok_embed)
   var help_embed = new Discord.RichEmbed()
   .setColor("#0174DF")
   .setTitle("Liste des catégories")
   .addField(":hammer: | Permet de voir la liste des commandes **utiles**", "**.utiles**")
   .addField(":gear: | Permet de voir la liste des commandes automatisées", "**.auto**")
   .addField(":tada: | Permet de voir la liste des commandes fun", "**.fun**")
   .addField(":musical_note: | Permet de voir la liste des commandes music", "**.music**")
   .addField(":passport_control: | Permet de voir la liste des commandes de modération", "**.mod**")
   .addField(":necktie: | Permet de voir la liste des commandes administrateur", "**.adm**")
  message.author.send(help_embed);
 }
 
 if(message.content === prefix + "utiles"){
   var helpokutiles_embed = new Discord.RichEmbed()
   .addField("Succès", `La liste des commandes **utiles** est envoyée par message privé !`)
   .setColor("#00FF00")
   .setFooter("Demandée par " + message.author.username)
   message.channel.sendMessage(helpokutiles_embed)
    var helputiles_embed = new Discord.RichEmbed()
    .setColor("#0174DF")
    .setTitle("Commandes Utiles")
    .setDescription("\n**________________________________________________**\n**:hammer: UTILES:**\n\n**.partners**\nVoir les grands partenaires de Sky\n**.info**\nAffiche les informations sur Sky\n**.version**\nPermet de savoir la version de Sky\n**.invite**\nPour ajouter Sky sur ton serveur Discord\n**.maj**\nVoir les mises à jour effectuées sur Sky\n**.datecrea**\nSavoir la date de création de Sky\n**.myavatar**\nDemander le lien de son avatar\n**.ping**\nVoir le temps de latence entre Sky et le serveur\n**.don**\nFaire un don pour Sky\n**.equipe**\nPermet de voir l'équipe de Sky\n**.siteweb**\nPermet d'obtenir le lien du site web de Sky\n**.servers**\nPermet de voir le nombre de servers ou est Sky\n**.discord**\nObtenir le lien du serveur Discord de Sky\n**.infods**\nVoir les informations du serveur Discord\n**.mystats**\nObtenir les statistiques de son compte\n**.uptime**\nPermet de savoir le derrnier redémarrage\n**.creainvite**\nPermet de crée un lien d'invitation permanent pour un serveur")
    .setFooter("Commandes Utiles")
   message.author.send(helputiles_embed);
 }
   
   if(message.content === prefix + "fun"){
 var helpokfun_embed = new Discord.RichEmbed()
.addField("Succès", `La liste des commandes **fun** est envoyée par message privé !`)
.setColor("#00FF00")
.setFooter("Demandée par " + message.author.username)
message.channel.sendMessage(helpokfun_embed)
var help1_embed = new Discord.RichEmbed()
.setColor("#0174DF")
.setTitle("Commandes Fun")
.setDescription("\n**________________________________________________**\n**:tada: FUN:**\n\n**.calin**\nPermet de faire un câlin à un utilisateur\n**.bisou**\nPermet de faire un bisou à un utilisateur\n**.tue**\nPermet de tuer un utilisateur\n**.clap**\nPermet d'applaudir un utilisateur\n**.bvn**\nPermet de souhaiter la bienvenue à un utilisateur\n**.gifle**\nPermet de donner un gros gifle à un utilisateur\n**.poing**\nPermet de donner un gros coup de poing à un utilisateur\n**.say**\nFaire dire quelque chose à Sky\n**.fumer**\nPermet de fumer une cigarette\n**.bonbon**\nPermet de manger des bonbons\n**.question**\nPermet de poser une question à Sky\n**.flip**\nPermet de jouer à **pile** ou **face**\n**.pizza**\nPermet de commander une pizza")
.setFooter("Commandes Fun")
message.author.send(help1_embed);
}
   
    if(message.content === prefix + "music"){
 var helpokmusic_embed = new Discord.RichEmbed()
.addField("Succès", `La liste des commandes **music** est envoyée par message privé !`)
.setColor("#00FF00")
.setFooter("Demandée par " + message.author.username)
message.channel.sendMessage(helpokmusic_embed)
var helpmusic_embed = new Discord.RichEmbed()
.setColor("#0174DF")
.setTitle("Commandes Music")
.setDescription("\n**________________________________________________**\n**:musical_note: MUSIC:**\n\n**.play**\nPermet de démarrer une musique\n**.skip**\nPermet de passer à la musique suivante\n**.stop**\nPermet d'arrêter la musique en cours et déconnecte le bot du salon")
.setFooter("⚠ | Cette fonctionnalité est en cours de développement, elle sera disponible prochainement.")
message.author.send(helpmusic_embed);
}
 
   if(message.content === prefix + "mod"){
     var helpokmod_embed = new Discord.RichEmbed()
   .addField("Succès", `La liste des commandes **modération** est envoyée par message privé !`)
   .setColor("#00FF00")
   .setFooter("Demandée par " + message.author.username)
   message.channel.sendMessage(helpokmod_embed)
   var helpmod_embed = new Discord.RichEmbed()
 .setColor("#0174DF")
 .setTitle("Commandes Modération")
 .setDescription("\n**________________________________________________**\n**:passport_control: MODERATION:**\n\n**.kick**\nKick l'utilisateur séléctionné\n**.ban**\nBanne l'utilisateur séléctionné\n**.mute**\nMute l'utilisateur séléctionné d'un salon spécifique\n**.unmute**\nDémute l'utilisateur séléctionné d'un salon spécifique\n**.clear**\nSupprime un nombre de messages\n**.warn**\nPermet d'avertir un utilisateur par MP")
 .setFooter("Commandes Modération")
 message.author.send(helpmod_embed);
   }
 
   if(message.content === prefix + "auto"){
     var helpokauto_embed = new Discord.RichEmbed()
   .addField("Succès", `La liste des commandes **systèmes automatiques** est envoyée par message privé !`)
   .setColor("#00FF00")
   .setFooter("Demandée par " + message.author.username)
   message.channel.sendMessage(helpokauto_embed)
   var helpauto_embed = new Discord.RichEmbed()
 .setColor("#0174DF")
 .setTitle("Commandes Automatisées")
 .setDescription("\n**________________________________________________**\n**:gear: SYSTEMES AUTOMATIQUES:**\n\n**.systsondage**\nPermet d'activer le système de sondage\n**.sondage**\nPermet de crée des sondages __(il faut d'abord exécuter la commande juste au-dessus pour pouvoir crée des sondages)__\n**.systvraioufaux**\nPermet d'activer le système de Vrai ou Faux\n**.vraioufaux**\nPermet de crée des Vrai ou Faux __(il faut d'abord exécuter la commande juste au-dessus pour pouvoir crée des Vrai ou Faux)__\n")
 .setFooter("Commandes Automatisées")
 message.author.send(helpauto_embed);
 }
 
  if(message.content === prefix + "adm"){
   var helpokadm_embed = new Discord.RichEmbed()
   .addField("Succès", `La liste des commandes **administration** est envoyée par message privé !`)
   .setColor("#00FF00")
   .setFooter("Demandée par " + message.author.username)
   message.channel.sendMessage(helpokadm_embed)
 var helpadm_embed = new Discord.RichEmbed()
 .setColor("#0174DF")
 .setTitle("Commandes Administration")
 .setDescription("\n**________________________________________________**\n**:necktie: ADMINISTRATION:**\n\n**.alerteadm**\nPermet d'envoyer des informations pour les membres\n")
 .setFooter("Commandes Administration")
 message.author.send(helpadm_embed);
 }
 ///////////////////////////////////////////////////////////FIN DE LA COMMANDE .HELP//////////////////////////////////////////////////////////
                                                             //////////////////////
                                                             ////////SUIVANT///////
                                                             //////////////////////
 
 ///////////////////////////////////////////////////////////DEBUT DE LA COMMANDE .SKYINFO//////////////////////////////////////////////////////////
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
 ///////////////////////////////////////////////////////////FIN DE LA COMMANDE .SKYINFO//////////////////////////////////////////////////////////
 
                                                             //////////////////////
                                                             ////////SUIVANT///////
                                                             //////////////////////
 
 ///////////////////////////////////////////////////////////DEBUT DE LA COMMANDE .MAJ//////////////////////////////////////////////////////////
   if(message.content === prefix + "maj"){
 var helpok_embed = new Discord.RichEmbed()
 .addField("Succès", `La fiche **MAJ** est envoyée par message privé !`)
 .setColor("#00FF00")
 .setFooter("Demandée par " + message.author.username)
 message.channel.sendMessage(helpok_embed)
 var help_embed = new Discord.RichEmbed()
 .setColor("#FFFFFF")
 .setTitle("Les mises à jour de Sky")
 .setDescription("Voici les MAJ effectuées jusqu'à maintenant:")
 .addField("MAJ 29.07.2018 (2)", "Ajout d'une commande fun: **.bonbon**")
 .addField("MAJ 29.07.2018 (1)", "Ajout d'une commande utile: **.creainvite**, amélioration de la stabilité de Sky")
 .addField("MAJ 26.07.2018", "Ajout de plusieurs gif dans la commande **.fumer** et **.poing** d'autres gif arriveront dans la commande **.gifle**, modification des textes dans les commandes, amélioration de la stabilité de **Sky**")
 .addField("MAJ 20.07.2018", "Ajout d'une nouvelle commande fun: **.pizza**, ajout de plusieurs gif aux commandes: **.calin**, **.tue** et **.clap**. Nous ferons de même dans la prochaine MAJ pour les commandes: **.bisou**, **.fumer**, **.poing** et **.gifle**, correction de quelques bugs et amélioration de la stabilité de Sky.")
 .addField("MAJ 19.07.2018", "Ajout d'une commande fun: **.flip**")
 .addField("MAJ 18.07.2018", "Ajout d'une commande fun: **.clap**, amélioration de la commande **.clear**, ajout de la catégorie **musique**")
 .addField("MAJ 16.07.2018", "Ajout d'une commande fun: **.poing**, amélioration de la fluidité de **Sky**")
 .addField("MAJ 14.07.2018", "Ajout d'une commande fun: **.fumer**, changement du nom de la commande **.online** par **.uptime** et amélioration de la stabilité de Sky")
 .addField("MAJ 10.07.2018 (2)", "Amélioration des commandes **.tue**, **.bisou**, **.calin** et ajout d'une nouvelle commande fun: **.gifle**")
 .addField("MAJ 10.07.2018 (1)", "Ajout de la commande **.question**")
 .addField("MAJ 08.07.2018", "Amélioration totale de la commande **.help**, amélioration de la stabilité de Sky et dernièrement ajout d'un message d'erreur au cas où **Sky** ne trouve pas le salon approprié des commandes **.sondage** et **.vraioufaux**. ")
 .addField("MAJ 02.07.2018", "Amélioration de l'apparence de quelques commandes. Amélioration de la stabilité.")
 .addField("MAJ 30.06.2018", "Ajout de la commande **.partners**, amélioration de la stabilité.")
 .addField("MAJ 25.06.2018", "Amélioration de la vitesse de réponse de Sky, modification du nom de la commande .**add** en **.invite** puis ajout des commandes: **.calin**, **.tue** et **.bisou**")
 .addField("MAJ 24.06.2018", "Ajout de la commande **.warn**, **.online** et dernièrement, corrections de quelques problèmes techniques")
 .addField("MAJ 21.06.2018", "Ajout de la commande: **.unmute** et **.datecrea** suppression de la commande **.recru** car aucune utilité, ajout de la commande **systvraioufaux** pour pouvoir activer le système de vraioufaux, et dernièrement ajout de la commande **.vraioufaux** pour pouvoir crée des Vrai ou Faux.")
 .addField("...", "autres")
 .setFooter("Fiche MAJ - SkyBOT")
 message.author.send(help_embed);
}
 
 ///////////////////////////////////////////////////////////FIN DE LA COMMANDE .MAJ//////////////////////////////////////////////////////////
   
                                                             //////////////////////
                                                             ////////SUIVANT///////
                                                             //////////////////////
 
 ///////////////////////////////////////////////////////////DEBUT DE LA COMMANDE .KICK//////////////////////////////////////////////////////////
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
 ///////////////////////////////////////////////////////////FIN DE LA COMMANDE .KICK//////////////////////////////////////////////////////////
 
                                                             //////////////////////
                                                             ////////SUIVANT///////
                                                             //////////////////////
 
 ///////////////////////////////////////////////////////////DEBUT DE LA COMMANDE .BAN//////////////////////////////////////////////////////////
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
 
 ///////////////////////////////////////////////////////////FIN DE LA COMMANDE .BAN//////////////////////////////////////////////////////////
                                                                   
                                                             //////////////////////
                                                             ////////SUIVANT///////
                                                             //////////////////////
 
 ///////////////////////////////////////////////////////////DEBUT DE LA COMMANDE .CLEAR//////////////////////////////////////////////////////////
   if(message.content.startsWith(prefix + "clear")) {
     if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.author.send(":negative_squared_cross_mark: Vous n'avez pas la permission d'éxecuter cette commande. (commande éxecutée .clear)");
     
        let args = message.content.split(" ").slice(1);

        if(!args[0]) return message.channel.send("**ERREUR** | Merci de préciser un nombre de message à supprimer.")
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`**OK** | ${args[0]} messages supprimés du salon !`).then(msg => msg.delete(5000))
        });
}
 ///////////////////////////////////////////////////////////FIN DE LA COMMANDE .CLEAR//////////////////////////////////////////////////////////
   
                                                             //////////////////////
                                                             ////////SUIVANT///////
                                                             //////////////////////
 
 ///////////////////////////////////////////////////////////DEBUT DE LA COMMANDE .MYSTATS//////////////////////////////////////////////////////////
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
       .addField("Succès", "Les statistiques de ton compte ont été envoyés par message privé.")
       .setColor("#00FF00")
       .setFooter("Pour " + message.author.username)
       message.channel.sendMessage(statsok_embed)
       message.author.send({embed: stats_embed});
       break;
   }
 
 ///////////////////////////////////////////////////////////FIN DE LA COMMANDE .MYSTATS//////////////////////////////////////////////////////////
   
                                                             //////////////////////
                                                             ////////SUIVANT///////
                                                             //////////////////////
 
 /////////////////////////////////////////////////////DEBUT DE LA COMMANDE .MAINTENANCE (OWNER)//////////////////////////////////////////////////////////
   if(message.content === prefix + "maintenance") {
     if (message.author.id === '382053369059082240') {
     let args = message.content.split(" ").slice(1);
     var embed = new Discord.RichEmbed()
     .setColor("#FF0000")
     .setTitle(":warning: ALERTE MAINTENANCE")
     .addField("Vous serez informez dès que la maintenance prendra fin.", "Pour savoir les nouveautés ajoutés, exécutez la commande **.maj** juste après la fin de la maintenance !")
     .setTimestamp()
     message.guild.channels.find("name", "🛃maintenances").sendEmbed(embed)
   }
 
 }
 ///////////////////////////////////////////////////////////FIN DE LA COMMANDE .MAINTENANCE (OWNER)//////////////////////////////////////////////////////////
   
                                                             //////////////////////
                                                             ////////SUIVANT///////
                                                             //////////////////////
 
 ///////////////////////////////////////////////////////////DEBUT DE LA COMMANDE .MAINTENANCEFIN (OWNER)//////////////////////////////////////////////////////////
   if(message.content === prefix + "maintenancefin") {
     if (message.author.id === '382053369059082240') {
     let args = message.content.split(" ").slice(1);
     var embed = new Discord.RichEmbed()
     .setColor("#04B404")
     .setTitle(":white_check_mark: MAINTENANCE TERMINÉE")
     .addField("La maintenance est terminée.", "Exécutez la commande **.maj** pour savoir les nouveautés apportés lors cette maintenance !")
     .setTimestamp()
     message.guild.channels.find("name", "🛃maintenances").sendEmbed(embed)
   }
 
 }
 ///////////////////////////////////////////////////////////FIN DE LA COMMANDE .MAINTENANCE FIN (OWNER)//////////////////////////////////////////////////////////
   
                                                             //////////////////////
                                                             ////////SUIVANT///////
                                                             //////////////////////
 
 ///////////////////////////////////////////////////////////DEBUT DE LA COMMANDE .NOUVEAUTES (OWNER)//////////////////////////////////////////////////////////
   if(message.content === prefix + "nouveautés") {
     if (message.author.id === '382053369059082240') {
     let args = message.content.split(" ").slice(1);
     var embed = new Discord.RichEmbed()
     .setColor("#B45F04")
     .setTitle("📯 DU NOUVEAU SUR SKY")
     .addField("Des nouveautés ont été ajoutés sur **Sky** !", "Exécutez la commande **.maj** pour savoir les nouveautés !")
     .setTimestamp()
     message.guild.channels.find("name", "📯nouveautés").sendEmbed(embed)
   }
   
 }
 ///////////////////////////////////////////////////////////FIN DE LA COMMANDE .NOUVEAUTES (OWNER)//////////////////////////////////////////////////////////
   
                                                             //////////////////////
                                                             ////////SUIVANT///////
                                                             //////////////////////
 
 ///////////////////////////////////////////////////////////DEBUT DE LA COMMANDE .INFODS//////////////////////////////////////////////////////////
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
    .addField("Nombre d'utilisateurs:", message.guild.memberCount)
    .addField("Nombre de bots:", message.guild.members.filter(members => members.user.bot).size)
    .addField("Nombre de salons et catégories:", message.guild.channels.size)
    .setColor("0x0000FF")
  message.channel.sendEmbed(embed)

  }
 ///////////////////////////////////////////////////////////FIN DE LA COMMANDE .INFODS//////////////////////////////////////////////////////////
   
                                                             //////////////////////
                                                             ////////SUIVANT///////
                                                             //////////////////////
 
 ///////////////////////////////////////////////////////////DEBUT DE LA COMMANDE .PING//////////////////////////////////////////////////////////
   if(message.content === prefix + "ping"){
     var ping_embed = new Discord.RichEmbed()
     .addField(":satellite_orbital: Ping", 'Temps de latence avec le serveur: `' + `${message.createdTimestamp - Date.now()}` + ' ms`')
     .setColor("#0404B4")
     message.channel.sendMessage(ping_embed)
   }
 ///////////////////////////////////////////////////////////FIN DE LA COMMANDE .PING//////////////////////////////////////////////////////////
   
                                                             //////////////////////
                                                             ////////SUIVANT///////
                                                             //////////////////////
 
 ///////////////////////////////////////////////////////////DEBUT DE LA COMMANDE .SYSTSONDAGE//////////////////////////////////////////////////////////
     if (message.content === '.systsondage'){
       if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.author.send(":negative_squared_cross_mark: Vous n'avez pas la permission d'éxecuter cette commande. (commande éxecutée: .systsondage)");
       var systbvn_embed = new Discord.RichEmbed()
       .addField("Succès", "Le salon **📊sondages** a été crée et le système a été activé.")
       .setColor("#00FF00")
       message.channel.guild.createChannel("📊sondages");
       message.channel.sendMessage(systbvn_embed)
   
      }
 ///////////////////////////////////////////////////////////FIN DE LA COMMANDE .SYSTSONDAGE//////////////////////////////////////////////////////////
   
                                                             //////////////////////
                                                             ////////SUIVANT///////
                                                             //////////////////////
 
 ///////////////////////////////////////////////////////////DEBUT DE LA COMMANDE .SYSTVRAIOUFAUX//////////////////////////////////////////////////////////
     if (message.content === '.systvraioufaux'){
       if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.author.send(":negative_squared_cross_mark: Vous n'avez pas la permission d'éxecuter cette commande. (commande éxecutée: .systvraioufaux)");
       var systbvn_embed = new Discord.RichEmbed()
       .addField("Succès", "Le salon **❓vraioufaux** a été crée et le système a été activé.")
       .setColor("#00FF00")
       message.channel.guild.createChannel("❓vraioufaux");
       message.channel.sendMessage(systbvn_embed)
   
      }
 ///////////////////////////////////////////////////////////FIN DE LA COMMANDE .SYSTVRAIOUFAUX//////////////////////////////////////////////////////////
   
                                                             //////////////////////
                                                             ////////SUIVANT///////
                                                             //////////////////////
 
 ///////////////////////////////////////////////////////////DEBUT DE LA COMMANDE .SAY//////////////////////////////////////////////////////////
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
   
   if (message.content.startsWith(prefix + "admspeak")) {
   if (message.author.id === '382053369059082240') {
       message.delete()
           let args = message.content.split(" ").slice(1);
           let thingtoEcho = args.join(" ")
           message.channel.send(thingtoEcho)
 
      }
     
   }
 ///////////////////////////////////////////////////////////FIN DE LA COMMANDE .SAY//////////////////////////////////////////////////////////
   
                                                             //////////////////////
                                                             ////////SUIVANT///////
                                                             //////////////////////
 
 ///////////////////////////////////////////////////////////DEBUT DE LA COMMANDE .ALERTEADM//////////////////////////////////////////////////////////
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
 ///////////////////////////////////////////////////////////FIN DE LA COMMANDE .ALERTEADM//////////////////////////////////////////////////////////
   
                                                             //////////////////////
                                                             ////////SUIVANT///////
                                                             //////////////////////
 
 ///////////////////////////////////////////////////////////DEBUT DE LA COMMANDE .MUTE//////////////////////////////////////////////////////////
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
 ///////////////////////////////////////////////////////////FIN DE LA COMMANDE .MUTE//////////////////////////////////////////////////////////
   
                                                             //////////////////////
                                                             ////////SUIVANT///////
                                                             //////////////////////
 
 ///////////////////////////////////////////////////////////DEBUT DE LA COMMANDE .UNMUTE//////////////////////////////////////////////////////////
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
 ///////////////////////////////////////////////////////////FIN DE LA COMMANDE .UNMUTE//////////////////////////////////////////////////////////
   
                                                             //////////////////////
                                                             ////////SUIVANT///////
                                                             //////////////////////
 
 ///////////////////////////////////////////////////////////DEBUT DE LA COMMANDE .BVN//////////////////////////////////////////////////////////
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
 ///////////////////////////////////////////////////////////FIN DE LA COMMANDE .BVN//////////////////////////////////////////////////////////
   
                                                             //////////////////////
                                                             ////////SUIVANT///////
                                                             //////////////////////
 
 ///////////////////////////////////////////////////////////DEBUT DE LA COMMANDE .DON//////////////////////////////////////////////////////////
     if(message.content === prefix + "don"){
       var skydon_embed = new Discord.RichEmbed()
       .addField(":gift_heart: Don pour Sky", "Clique ici: https://hebergnity.com/manager/financer?cible=O7RK7DPR ! Avec le don, tu as directement le rang: **Donator** ! ")
       .setColor("#FFFFFF")
       message.channel.sendMessage(skydon_embed)
     }
 ///////////////////////////////////////////////////////////FIN DE LA COMMANDE .DON//////////////////////////////////////////////////////////
   
                                                             //////////////////////
                                                             ////////SUIVANT///////
                                                             //////////////////////
 
 ///////////////////////////////////////////////////////////DEBUT DE LA COMMANDE .ADD//////////////////////////////////////////////////////////
     if(message.content === prefix + "invite"){
       var skyadd_embed = new Discord.RichEmbed()
       .addField(":globe_with_meridians: Add", "Un seul lien: https://discordapp.com/oauth2/authorize?client_id=450323683840491530&scope=bot&permissions=2146958551")
       .setColor("#0404B4")
       message.channel.sendMessage(skyadd_embed)
     }
 ///////////////////////////////////////////////////////////FIN DE LA COMMANDE .ADD//////////////////////////////////////////////////////////
   
                                                             //////////////////////
                                                             ////////SUIVANT///////
                                                             //////////////////////
 
 ///////////////////////////////////////////////////////////DEBUT DE LA COMMANDE .DISCORD//////////////////////////////////////////////////////////
     if(message.content === prefix + "discord"){
       var skydiscord_embed = new Discord.RichEmbed()
       .addField(":thought_balloon: Serveur Discord", 'Rejoins les autres utilisateurs: https://discord.gg/YuX9yWD ')
       .setColor("#0404B4")
       message.channel.sendMessage(skydiscord_embed)
     }
 ///////////////////////////////////////////////////////////FIN DE LA COMMANDE .DISCORD//////////////////////////////////////////////////////////
   
                                                             //////////////////////
                                                             ////////SUIVANT///////
                                                             //////////////////////
 
 ///////////////////////////////////////////////////////////DEBUT DE LA COMMANDE .EQUIPE//////////////////////////////////////////////////////////
     if(message.content === prefix + "equipe"){
       var skydiscord_embed = new Discord.RichEmbed()
       .setTitle(":necktie: Équipe de Sky")
       .addField("Runyard (Runyard#2305)", "Fondateur et Développeur")
       .addField("Swarwerth (Swarwerth#2943)", "Administrateur")
       .addField("Sumonil (Sumonil#5612)", "Modérateur - Serveur Discord")
       .addField("SkyPro (SkyPro#9607)", "Modérateur - Serveur Discord")
       .setColor("#0404B4")
       message.channel.sendMessage(skydiscord_embed)
     }
 ///////////////////////////////////////////////////////////FIN DE LA COMMANDE .EQUIPE//////////////////////////////////////////////////////////
   
                                                             //////////////////////
                                                             ////////SUIVANT///////
                                                             //////////////////////
 
 ///////////////////////////////////////////////////////////DEBUT DE LA COMMANDE .DATECREA//////////////////////////////////////////////////////////
     if(message.content === prefix + "datecrea"){
       var datecrea_embed = new Discord.RichEmbed()
       .setTitle(":calendar_spiral: Date de création de Sky")
       .addField("Sky a été crée le:", "Jeudi 31 mai à **14h34** (heure de Paris)")
       .setColor("#0404B4")
       message.channel.sendMessage(datecrea_embed)
     }
 ///////////////////////////////////////////////////////////FIN DE LA COMMANDE .DATECREA//////////////////////////////////////////////////////////
   
                                                             //////////////////////
                                                             ////////SUIVANT///////
                                                             //////////////////////
 
 ///////////////////////////////////////////////////////////DEBUT DE LA COMMANDE .SITEWEB//////////////////////////////////////////////////////////
     if(message.content === prefix + "siteweb"){
       var skydiscord_embed = new Discord.RichEmbed()
       .setTitle(":bookmark_tabs: Site web de Sky")
       .addField("**EN COURS - 3%**", "Disponible prochainement")
       .setColor("#0404B4")
       message.channel.sendMessage(skydiscord_embed)
     }
 ///////////////////////////////////////////////////////////FIN DE LA COMMANDE .SITEWEB//////////////////////////////////////////////////////////
   
                                                             //////////////////////
                                                             ////////SUIVANT///////
                                                             //////////////////////
 
 ///////////////////////////////////////////////////////////DEBUT DE LA COMMANDE .WARN//////////////////////////////////////////////////////////
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
             .setColor("#DF0101")
             .setDescription(':warning: **| Un membre a été averti**', message.guild.name)
             message.channel.sendMessage(warned_embed)
 
             var warnedprivate_embed = new Discord.RichEmbed()
            .setTitle(":warning: AVERTISSEMENT REÇU")
            .setColor("#DF0101")
            .addField(`Depuis le serveur **${message.guild.name}**`, ` \n\nRaison: ` + args.slice(1).join(' '))
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
 ///////////////////////////////////////////////////////////FIN DE LA COMMANDE .WARN//////////////////////////////////////////////////////////
   
                                                             //////////////////////
                                                             ////////SUIVANT///////
                                                             //////////////////////
 
 ///////////////////////////////////////////////////////////DEBUT DE LA COMMANDE .ONLINE//////////////////////////////////////////////////////////
 if (message.content === '.uptime'){
   message.delete();
   const sicon = client.user.displayAvatarURL
   
             var online_embed = new Discord.RichEmbed()
             
                 .setTitle(":clock9: TOUJOURS EN LIGNE")
                 .setThumbnail(client.user.avatarURL)
                 .addField("En ligne depuis:", (Math.round(client.uptime / (1000 * 60 * 60))) + ' heure(s) ' + (Math.round(client.uptime / (1000 * 60)) % 60) + ' minute(s) et ' + (Math.round(client.uptime / 1000) % 60) + ' seconde(s)')
                 .setColor("#389aea")
                 .setFooter("Sky")
                 message.channel.send(online_embed)
         }
 ///////////////////////////////////////////////////////////FIN DE LA COMMANDE .ONLINE//////////////////////////////////////////////////////////
   
                                                             //////////////////////
                                                             ////////SUIVANT///////
                                                             //////////////////////
 
 ///////////////////////////////////////////////////////////DEBUT DE LA COMMANDE .SERVERS//////////////////////////////////////////////////////////
     ///Commande .servers
     if(message.content === prefix + "servers"){
       var statsok_embed = new Discord.RichEmbed()
         .addField(":file_cabinet: Serveurs", `Je suis actuellement en service dans ${client.guilds.size} serveurs avec ${client.users.size} utilisateurs !`)
         .setColor("#FFFFFF")
         message.channel.sendMessage(statsok_embed)
      }   
 ///////////////////////////////////////////////////////////FIN DE LA COMMANDE .SERVERS//////////////////////////////////////////////////////////
   
                                                             //////////////////////
                                                             ////////SUIVANT///////
                                                             //////////////////////
   
 ///////////////////////////////////////////////////////////DEBUT DE LA COMMANDE .CALIN//////////////////////////////////////////////////////////
 if (message.content.startsWith(prefix + "calin")) {
  let replies = ["https://media.giphy.com/media/EvYHHSntaIl5m/giphy.gif", "https://media.giphy.com/media/llmZp6fCVb4ju/giphy.gif", "https://media.giphy.com/media/u0bQN6bxXweHe/giphy.gif", "https://media.giphy.com/media/u0bQN6bxXweHe/giphy.gif", "https://media.giphy.com/media/QbkL9WuorOlgI/giphy.gif", "https://media.giphy.com/media/JzsG0EmHY9eKc/giphy.gif", "https://media.giphy.com/media/l378uBCYt1vfaj2aA/giphy.gif", "https://media.giphy.com/media/yidUzriaAGJbsxt58k/giphy.gif", "https://media.giphy.com/media/2GnS81AihShS8/giphy.gif", "https://media.giphy.com/media/3otPozEs14AOGrdcOI/giphy.gif", "https://media.giphy.com/media/l0MYLJKRmFCZbJyo0/giphy.gif", "https://media.giphy.com/media/l4FGnPMWYC3JWhFWo/giphy.gif", "https://media.giphy.com/media/l46Cot6SYZsicMsp2/giphy.gif"];
  let result = Math.floor((Math.random() * replies.length));
if(message.content === '.calin') return message.channel.sendMessage(":x: **Erreur** ! Merci de mentionner un utilisateur pour lui faire un câlin.").then(msg => msg.delete(7000))
message.delete()
let args = message.content.split(" ").slice(1);
let thingtoEcho = args.join(" ")
var calinembed = new Discord.RichEmbed()
      .addField(message.author.username + " fait un câlin à", thingtoEcho)
      .setFooter("Que c'est beau !")
      .setImage(replies[result])
      .setColor("#8A0868")
      message.channel.sendMessage(calinembed)
    }
///////////////////////////////////////////////////////////FIN DE LA COMMANDE .CALIN//////////////////////////////////////////////////////////

                                                          //////////////////////
                                                          ////////SUIVANT///////
                                                          //////////////////////

///////////////////////////////////////////////////////////DEBUT DE LA COMMANDE .CLAP//////////////////////////////////////////////////////////
if (message.content.startsWith(prefix + "clap")) {
  let replies = ["https://media.giphy.com/media/P0RWkdsRpK7ss/giphy.gif", "https://media.giphy.com/media/l0IyjvPvBs0oYEwZW/giphy.gif", "https://media.giphy.com/media/26FxCOdhlvEQXbeH6/giphy.gif", "https://media.giphy.com/media/wmEFhlivchtxS/giphy.gif", "https://media.giphy.com/media/qnOBmH70CGSVa/giphy.gif", "https://media.giphy.com/media/ivQ6Otsxv8y5O/giphy.gif", "https://media.giphy.com/media/xT8qBeUb4UX9WgII92/giphy.gif", "https://media.giphy.com/media/l3fQhNcLYy3xZo8tG/giphy.gif", "https://media.giphy.com/media/Vm1fTgm9E3wrK/giphy.gif", "https://media.giphy.com/media/26DOoDwdNGKAg6UKI/giphy.gif", "https://media.giphy.com/media/26gsspfbt1HfVQ9va/giphy.gif", "https://media.giphy.com/media/1gevXIZve3nqM/giphy.gif", "https://media.giphy.com/media/26FxCOdhlvEQXbeH6/giphy.gif"];
  let result = Math.floor((Math.random() * replies.length));
if(message.content === '.clap') return message.channel.sendMessage(":x: **Erreur** ! Merci de mentionner un utilisateur pour l'applaudir.").then(msg => msg.delete(7000))
message.delete()
let args = message.content.split(" ").slice(1);
let thingtoEcho = args.join(" ")
var clapembed = new Discord.RichEmbed()
      .addField(message.author.username + " est entrain d'applaudir", thingtoEcho)
      .setImage(replies[result])
      .setColor("#8A0868")
      message.channel.sendMessage(clapembed)
    }
///////////////////////////////////////////////////////////FIN DE LA COMMANDE .CLAP//////////////////////////////////////////////////////////

                                                          //////////////////////
                                                          ////////SUIVANT///////
                                                          //////////////////////
///////////////////////////////////////////////////////////DEBUT DE LA COMMANDE .TUE//////////////////////////////////////////////////////////
if (message.content.startsWith(prefix + "tue")) {
  let replies = ["https://media.giphy.com/media/1ludrxHRnUmT6/giphy.gif", "https://media.giphy.com/media/kHSPEiBbJB2Pm/giphy.gif", "https://media.giphy.com/media/13qoCXtHFqsVC8/giphy.gif", "https://media.giphy.com/media/QHYHhShm1sjVS/giphy.gif", "https://media.giphy.com/media/CiZB6WIjaoXYc/giphy.gif", "https://media.giphy.com/media/26uTrZhmJaBGQD5ok/giphy.gif"];
  let result = Math.floor((Math.random() * replies.length));
if(message.content === '.tue') return message.channel.sendMessage(":x: **Erreur** ! Merci de mentionner un utilisateur pour le tuer.").then(msg => msg.delete(7000))
message.delete()
let args = message.content.split(" ").slice(1);
let thingtoEcho = args.join(" ")
var tueembed = new Discord.RichEmbed()
      .addField(message.author.username + " tue", thingtoEcho)
      .setFooter("R.I.P")
      .setImage(replies[result])
      .setColor("#000000")
      message.channel.sendMessage(tueembed)

}
 //////////////////////////////////////////////////FIN DE LA COMMANDE .TUE//////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////DEBUT DE LA COMMANDE .BONBON//////////////////////////////////////////////////////////
if (message.content.startsWith(prefix + "bonbon")) {
message.delete()
var candyembed = new Discord.RichEmbed()
      .addField(` ${message.author.username} est entrain de manger des bonbons ! 🍬`)
      .setFooter("Mmmmm ! C'est trop bon, encore encore ! Attention, mange pas trop de bonbon, tu vas grossir après...")
      .setImage("https://media.giphy.com/media/vjvx6YjG3ADo4/giphy.gif")
      .setColor("#B404AE")
      message.channel.sendMessage(candyembed)

}
 //////////////////////////////////////////////////FIN DE LA COMMANDE .BONBON//////////////////////////////////////////////////////////
  
                                                         //////////////////////
                                                         ////////SUIVANT///////
                                                         //////////////////////

///////////////////////////////////////////////////////////DEBUT DE LA COMMANDE .FUMER//////////////////////////////////////////////////////////
if (message.content.startsWith(prefix + "fumer")) {
  let replies = ["https://media.giphy.com/media/dZBa6EQnbnsHe/giphy.gif", "https://media.giphy.com/media/9dhgKatYHfEuA/giphy.gif", "https://media.giphy.com/media/26gJAaPZKuQutL1mg/giphy.gif", "https://media.giphy.com/media/9daj9smgZ362Q/giphy.gif", "https://media.giphy.com/media/JrsSbPzICaRKU/giphy.gif", "https://media.giphy.com/media/KpAPQVW9lWnWU/giphy.gif", "https://media.giphy.com/media/TJufnSz934AnK/giphy.gif", "https://media.giphy.com/media/14qIliCMe87BwA/giphy.gif", "https://media.giphy.com/media/a0SwTAKWzj0Oc/giphy.gif", "https://media.giphy.com/media/31o9GlUYA8Odi/giphy.gif", "https://media.giphy.com/media/Ejw31fJJkDfQ4/giphy.gif", "https://media.giphy.com/media/tgphOt7wYGIM0/giphy.gif"];
  let result = Math.floor((Math.random() * replies.length));
  message.delete()
  var fumerembed = new Discord.RichEmbed()
      .addField(message.author.username + " est entrain de fumer une cigarette !", "Ow, cette fumée !")
      .setFooter("Attention: Sky vous déconseille de fumer. Fumer nuit gravement à votre santé et à celle de votre entourage.")
      .setImage(replies[result])
      .setColor("#FF0000")
      message.channel.sendMessage(fumerembed)
  
  }
  //////////////////////////////////////////////////FIN DE LA COMMANDE .FUMER//////////////////////////////////////////////////////////
  
                                                             //////////////////////
                                                             ////////SUIVANT///////
                                                             //////////////////////
 
 ///////////////////////////////////////////////////////////DEBUT DE LA COMMANDE .BISOU//////////////////////////////////////////////////////////
 if (message.content.startsWith(prefix + "bisou")) {
   if(message.content === '.bisou') return message.channel.sendMessage(":x: **Erreur** ! Merci de mentionner un utilisateur pour lui faire un bisou.").then(msg => msg.delete(7000))
   message.delete()
   let args = message.content.split(" ").slice(1);
   let thingtoEcho = args.join(" ")
   var bisousembed = new Discord.RichEmbed()
         .addField(message.author.username + " fait un bisous à", thingtoEcho)
         .setFooter("Ouais, c'est beau mais bientôt ils vont s'exciter...")
         .setImage("https://media.giphy.com/media/5GdhgaBpA3oCA/giphy.gif")
         .setColor("#8A0868")
         message.channel.sendMessage(bisousembed)
 
 }
 //////////////////////////////////////////////////FIN DE LA COMMANDE .BISOU//////////////////////////////////////////////////////////
   
   
                                                             //////////////////////
                                                             ////////SUIVANT///////
                                                             //////////////////////
 
 ///////////////////////////////////////////////////////////DEBUT DE LA COMMANDE .POING//////////////////////////////////////////////////////////
 if (message.content.startsWith(prefix + "poing")) {
   if(message.content === '.poing') return message.channel.sendMessage(":x: **Erreur** ! Merci de mentionner un utilisateur pour lui donner un coup de poing.").then(msg => msg.delete(7000))
  let replies = ["https://media.giphy.com/media/xUNemWOzznJDZpRDZm/giphy.gif", "https://media.giphy.com/media/3o6Zt2wf1yKWucbkqY/giphy.gif", "https://media.giphy.com/media/EYD7OzuuTfRVC/giphy.gif", "https://media.giphy.com/media/BOm1dvdWh3vRS/giphy.gif", "https://media.giphy.com/media/HJ0fBL6B1ZJYY/giphy.gif", "https://media.giphy.com/media/l0IyhZ1ZPnuTsNy0w/giphy.gif", "https://media.giphy.com/media/l0Iyey3m9aNlZs5i0/giphy.gif", "https://media.giphy.com/media/GoN89WuFFqb2U/giphy.gif", "https://media.giphy.com/media/xT9KVGie0lvAr1gjNC/giphy.gif", "https://media.giphy.com/media/3oEhn4mIrTuCf0bn1u/giphy.gif"];
  let result = Math.floor((Math.random() * replies.length));
   message.delete()
   let args = message.content.split(" ").slice(1);
   let thingtoEcho = args.join(" ")
   var poingembed = new Discord.RichEmbed()
         .addField(message.author.username + " donne un gros coup de poing à", thingtoEcho)
         .setFooter("Oula ! ")
         .setImage(replies[result])
         .setColor("#FF0000")
         message.channel.sendMessage(poingembed)
 
 }
 //////////////////////////////////////////////////FIN DE LA COMMANDE .POING//////////////////////////////////////////////////////////
   
                                                             //////////////////////
                                                             ////////SUIVANT///////
                                                             //////////////////////

///////////////////////////////////////////////////////////DEBUT DE LA COMMANDE .GIFLE//////////////////////////////////////////////////////////
if (message.content.startsWith(prefix + "gifle")) {
  if(message.content === '.gifle') return message.channel.sendMessage(":x: **Erreur** ! Merci de mentionner un utilisateur pour lui donner un gros gifle.").then(msg => msg.delete(7000))
  message.delete()
  let args = message.content.split(" ").slice(1);
  let thingtoEcho = args.join(" ")
  var gifleembed = new Discord.RichEmbed()
        .addField(message.author.username + " donne un gros gifle à", thingtoEcho)
        .setFooter("Aie...")
        .setImage("https://media.giphy.com/media/3oEduOWVxygmeDIKPu/giphy.gif")
        .setColor("#FF0000")
        message.channel.sendMessage(gifleembed)

}
//////////////////////////////////////////////////FIN DE LA COMMANDE .GIFLE//////////////////////////////////////////////////////////
  
                                                            //////////////////////
                                                            ////////SUIVANT///////
                                                            //////////////////////
 
 ///////////////////////////////////////////////////////////DEBUT DE LA COMMANDE .MYAVATAR//////////////////////////////////////////////////////////
       if (message.content === '.myavatar'){
         var OKMyavatar_embed = new Discord.RichEmbed()
         .addField("Succès", "Le lien de ton avatar a été envoyé par message privé !")
         .setColor("#00FF00")
         .setFooter("Demandé par " + message.author.username)
         message.channel.sendMessage(OKMyavatar_embed);
         message.author.send('Voici le lien de ton avatar :arrow_down_small:')
         message.author.send(message.author.avatarURL)
       }
 ///////////////////////////////////////////////////////////FIN DE LA COMMANDE .MYAVATAR//////////////////////////////////////////////////////////
   
                                                             //////////////////////
                                                             ////////SUIVANT///////
                                                             //////////////////////
 
 if (message.content.startsWith(prefix + "vraioufaux")) {
         if(message.content === '.vraioufaux') return message.channel.sendMessage(":x: **Erreur** ! Merci d'ajouter la question.").then(msg => msg.delete(7000))
         if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.author.send(":negative_squared_cross_mark: Vous n'avez pas la permission d'éxecuter cette commande. (commande éxecutée: .vraioufaux)");
             let args = message.content.split(" ").slice(1);
             let thingtoEcho = args.join(" ")
             var xo2 = message.guild.channels.find('name', '❓vraioufaux')
             if (!xo2) return message.channel.sendMessage("Oops, le salon ❓vraioufaux est introuvable ! Merci d'éxecuter **.systvraioufaux** !")
             var vraioufaux_embed = new Discord.RichEmbed()
             .addField("Succès", 'Le vraioufaux a été crée.')
             .setColor("#0404B4")
             message.channel.sendMessage(vraioufaux_embed).then(msg => msg.delete(5000))
             message.guild.channels.find("name", "❓vraioufaux").sendMessage("@everyone **Allez ! Est-ce vrai ou bien faux ?** :small_red_triangle_down:")
             var vraioufauxokembed = new Discord.RichEmbed()
                   .setTitle("❓ VRAI OU FAUX:")
                   .addField(thingtoEcho, "Répondre avec ✅ ou ❌")
                   .setColor("#0A2A29")
                   .setThumbnail("https://img1.lght.pics/2DZU.png")
                   .setTimestamp()
                   message.guild.channels.find("name", "❓vraioufaux").sendEmbed(vraioufauxokembed)
                  .then(function (message) {
                    message.react("✅")
                    message.react("❌")
                  }).catch(function() {
   
                  })
 
                 }
 ///////////////////////////////////////////////////////////FIN DE LA COMMANDE .VRAIOUFAUX//////////////////////////////////////////////////////////
   
                                                             //////////////////////
                                                             ////////SUIVANT///////
                                                             //////////////////////
 
 ///////////////////////////////////////////////////////////DEBUT DE LA COMMANDE .SONDAGE//////////////////////////////////////////////////////////
       if (message.content.startsWith(prefix + "sondage")) {
         if(message.content === '.sondage') return message.channel.sendMessage(":x: **Erreur** ! Merci d'ajouter la question.").then(msg => msg.delete(7000))
         if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.author.send(":negative_squared_cross_mark: Vous n'avez pas la permission d'éxecuter cette commande. (commande éxecutée: .sondage)");
             let args = message.content.split(" ").slice(1);
             let thingtoEcho = args.join(" ")
             var xo2 = message.guild.channels.find('name', '📊sondages')
             if (!xo2) return message.channel.sendMessage("Oops, le salon 📊sondages est introuvable ! Merci d'éxecuter **.systsondage** !")
             var sondageok_embed = new Discord.RichEmbed()
             .addField("Succès", 'Le sondage a été crée.')
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
 ///////////////////////////////////////////////////////////FIN DE LA COMMANDE .SONDAGE//////////////////////////////////////////////////////////
   
                                                        //////////////////////////////
                                                        ////////FIN DE LA FICHE///////
                                                        //////////////////////////////

 ///////////////////////////////////////////////////////////DEBUT DE LA COMMANDE .QUESTION//////////////////////////////////////////////////////////
                                                        if (message.content.startsWith (prefix + "question")){
                                                          ballMessage = message.content.slice (9);
                                                          number = 9;
                                                          var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
                                                          switch (random) {
                                                            case 1: message.channel.send ("Non"); break;
                                                            case 2: message.channel.send ("Oui"); break;
                                                            case 3: message.channel.send ("Peut-être"); break;
                                                            case 4: message.channel.send ("Vraiment pas !"); break;
                                                            case 5: message.channel.send ("Vraiment !"); break;
                                                            case 6: message.channel.send ("Peut-être pas"); break;
                                                            case 7: message.channel.send ("Absolument"); break;
                                                            case 8: message.channel.send ("Absolument pas"); break;
                                                            case 9: message.channel.send ("Sans doute"); break;
                                                        }}
///////////////////////////////////////////////////////////FIN DE LA COMMANDE .QUESTION//////////////////////////////////////////////////////////

if(message == `${prefix}flip`) {
  message.channel.send(`:money_with_wings: | Résultat: **${Math.floor(Math.random() * 2) == 0 ? "pile" : "face"}** !`);
}
   
   if(message == `${prefix}pizza`) {
const ahkEmbed = new Discord.RichEmbed()
        .setTitle(`Bienvenue chez: SkyPizza's :pizza: !`)
        .addField("Merci de choisir une pizza:", "Pizza disponible: `.pepperoni`, `.fromage`, et `.ananas`")
        .setColor(`RANDOM`)
        .setFooter("La première entreprise qui livre des pizzas instantanément !")
    message.channel.send(ahkEmbed)
    }

    if(message == `${prefix}pepperoni`) {
      const ahkkEmbed = new Discord.RichEmbed()
          .setTitle(`Voici ta pepperoni ! Bon appétit !`)
          .setColor(`RANDOM`)
          .setFooter(`Pizza livrée par SkyPizza's 🍕`)
          .setImage(`http://www.pngmart.com/files/1/Pepperoni-Pizza.png`)
      message.channel.send(ahkkEmbed)
      }

      if(message == `${prefix}fromage`) {
        const ahkkkEmbed = new Discord.RichEmbed()
            .setTitle(`Voici ta pizza fromage ! Bon appétit !`)
            .setColor(`RANDOM`)
            .setFooter(`Pizza livrée par SkyPizza's 🍕`)
            .setImage(`http://www.pngmart.com/files/1/Cheese-Pizza.png`)
        message.channel.send(ahkkkEmbed)
        }

        if(message == `${prefix}ananas`) {
                      const ahkkkkEmbed = new Discord.RichEmbed()
                          .setTitle(`Voici ta pizza à l'ananas ! Bonne appétit !`)
                          .setColor(`RANDOM`)
                          .setFooter(`Pizza livrée par SkyPizza's 🍕`)
                          .setImage(`https://www.cicis.com/media/1140/pizza_adven_hampineapple.png`)
                      message.channel.send(ahkkkkEmbed)
                  }
   
   if (message.content.startsWith(prefix + "creainvite")) {
  if (!message.member.hasPermission("CREATE_INSTANT_INVITE")) return;
  message.channel.createInvite({maxAge: 0}).then(invite => {
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`Voici le lien d'invitation permanent pour le serveur ${message.guild.name}: ${invite}`);
    message.channel.send(embed);
  });
}

   
 });
