
//packages
const express = require("express");
const app = express();
const Database = require("@replit/database")
const db = new Database() 
const random = require('random')
const fs = require('fs')
const jsonfile = require('jsonfile')
//variable declaration
const whitelist = '933867923733377024'
const celebrant ='888631299936497754'
const peer = '933869502200946689'
var stats = [866631964722987018];
if (fs.existsSync('stats.json')) {
  stats = jsonfile.readFileSync('stats.json');
}
;
let currency = "<:guerdon:932493820866744392>"
let KapreResponse = ["Do not use my name in vain! Do you wish to bargin? Tell me!", 'You wish to strike a bargain?', 'Yes, Indeed. I care not for what you say. Do you wish to strike a bargain, or not. If so tell me you wish to bargain.' ]
let KapreBargin = ["Give me your soul and I'll give you a discount on my wares", "Bring me a druden curio and I will give you a discount code for https://covenaunt.com","I do not wish to bargain right now. Ask me another time.", 'Are you mad enough to gamble with me? I do not wager lightly' ]
let KapreBanter = ["What you haveth said matters not to me. I cannot find my Cigar!", "Have you sailed beyond the Chthonic Shores? There are horrors beyond even my comprehension.", 'I have found peace within the deep. The Abyssal Hymns can be quite lovely once you get past the idea that it is composed of sirens mimicking the groins and screams of your loved ones...','Have you heard the tale of the Precocious Godlings - the twins Ede' ]
let loreResponse = "Please tell me which topic you'd like to learn about - Fey, Incantations, or Auberon"
let feyLore = ['Visually the fey resemble humans, yet they are tall in structure (average adult males are well over 2.5 meters tall) with glensing blue skin that pulses with the golden hues of ichor that pulses through their veins. Their beauty standards are similar to humans admiring preferring physical prime partners, yet they find those with yellow skin to be extremely beautiful, a representation of high ichor concentration. Their hair varies from black, silver, crismon. They’re pointy ears are also a defining trait among their species.', 'The Tedraumir are a peculiar species. The humans call them fey, not to be confused with fae, as they live short lives constantly dependent on bloodletting and an obsession with blood purity. Ichor, a biological fluid found within their bloodstream and that governs a Tedramiur’s acausal potency, also serves as a parasitic force within their bodies ecosystem. Those with high ichor density are capable of performing feats of grandeur, yet their lives are like stars, bright and brief. With a political structure resembling a feudalistic patriciate, the upper class of their society impose their reign through martial force.']
let incantationsLore = "The nature of incantations is a bit convoluted, though a basic description of how the arcane operates can be compared to a symbiotic relationship in which the caster beckons action from a Emanation. Emanations are in a state of constant slumber, and barely acknowledge the inhabitants of their realms therefore the execution of an incantation is more akin to the caster suggesting that an emanation manifest an action rather than the caster performing the actions themselves. Those weak in the arcane, also referred to as acausal potency, may only muster whispers to the Emanation whereas a skill thaumaturge may cast strong and powerful ability akin to loud demands."
let auberonLore = "Awoken with no recollection of a life beyond, he found his place as a pygmy before the great gods that lorded over him, yet even with this assigned fate he aligned his morals with the spirit of ambition. He sought the most ancient of incantations and with the help of a grand curio he did the most profane - a cataclysm that would serve as a catalyst for disorder and evolution within the realm."
let KapreQuestion ='kapre, I want know about'


app.listen(3000, ()=> {
  console.log("Project is running")
})

app.get("/", (req, res) => {
  res.send("Hello World!");
})

const Discord = require("discord.js")
const client = new Discord.Client({intents: ["GUILDS","GUILD_MESSAGES"]})



//discord bot logic. Bot returns text. 
client.on("message", message => {
if(message.author !== client.user) { 
  if(message.content.toLowerCase() === ("kapre is awesome")) {
    message.channel.send("Yes, Indeed")
      }
  //Kapre's responses
  const userMention = ('<@'+ message.author +'>');
  const ipfs = ('https://ipfs.io/ipfs/QmPodNmEqMuiX2mfgx4nB6wRq2QutzeJetvY38LMdCzJxx/')
  if(message.content.toLowerCase() === ("what is velas?")) {
    message.channel.send(userMention +`${currency}Velas is the first Fastest EVM/eBPF Hybrid Chain mechanism blockchain, that allows building decentralized applications and smart contracts on its main net, and ables the scalability of the transactions, being able to validate up to 50 000+ transactions per second.`)
}
if(message.content.toLowerCase().includes("when is the mint?")) {
    message.channel.send(userMention + "February 22nd, my fren. https://i.imgur.com/eCP8TrF.gif" )
}
if(message.content.toLowerCase() === ("wagmi")) {
    message.channel.send(userMention + `${currency}Yes, indeed! Giveth thy Guerdons and Curios to the Great Kapre, merchant prince of the Chthonic Shores.https://i.imgur.com/49jwySV.jpeg` )
}
if(message.content.toLowerCase().includes("good bot")) {
    message.reply(` Yes, indeed! Giveth thy praise to the Great Kapre, Merchant Prince of the Chthonic Shores.` )
}
if(message.content.toLowerCase().startsWith("kapre") && (message.content.toLowerCase().length < 6)) {
    message.channel.send(KapreResponse[Math.floor(Math.random() * 3)])
}
if(message.content.toUpperCase() === ("I WISH TO BARGAIN"))  {
    message.channel.send(KapreBargin[Math.floor(Math.random() * 3)])
}
if(message.content.toUpperCase().includes("DRUDEN CURIO"))  {
    message.channel.send('I am not stupid! Come back with the proper item!')
}
if(message.content.toLowerCase().startsWith("kapre") && (message.content.toLowerCase().length > 25)) {
    message.channel.send(KapreBanter[Math.floor(Math.random() * 4)])
}
if(message.content.toLowerCase().includes('i want to know about')) {
    message.channel.send("Please tell me which topic you'd like to learn about - Fey, Incantations, or Auberon")
}
if(message.content.toLowerCase() === ("fey")) {
    message.channel.send(feyLore[Math.floor(Math.random() * 1)])
}
if(message.content.toLowerCase() === ("incantations")) {
    message.channel.send(incantationsLore)
}
if(message.content.toLowerCase().includes("where is your cigar")) {
    message.channel.send(userMention + `${currency}Already, smoked it...https://coolmaterial.com/wp-content/uploads/2017/07/Whats-the-Big-Deal-About-Cigars.jpg` )
}
if(message.content.toLowerCase() === ("auberon")) {
    message.channel.send(auberonLore)
}
if(message.content.toLowerCase().includes("fft")) {
    message.channel.send(userMention + `${currency}Did you just mention the best fashion community on discord`)
}
  if(message.content.toLowerCase()===("!whitelist")) {
    message.channel.send(userMention +"So you want a whitelist spot, eh?. All you need to do is reach lvl. 10 within this discord or post a picture with yer covenaunt loot. Also from time to time we will do a contest, or two.")
}if(message.content.toLowerCase().includes("!mint")) {
    message.channel.send(userMention + `${currency}You would like to learn about the mint?Here is what you need to know. `)
}
  if(message.content.toLowerCase() === ("!exordium 1")) {
    message.channel.send('https://ipfs.io/ipfs/QmVJzMMkV3APweX5iYomXbq4CZKCCEjW8xBCnbkuVSzab5/001.png')
}
    if(message.content.toLowerCase() === ("!exordium 2")) {
    message.channel.send('https://ipfs.io/ipfs/QmVJzMMkV3APweX5iYomXbq4CZKCCEjW8xBCnbkuVSzab5/002.png')
}
    if(message.content.toLowerCase() === ("!exordium 3")) {
    message.channel.send('https://ipfs.io/ipfs/QmVJzMMkV3APweX5iYomXbq4CZKCCEjW8xBCnbkuVSzab5/003.png')
}
    if(message.content.toLowerCase() === ("!exordium 4")) {
    message.channel.send('https://ipfs.io/ipfs/QmVJzMMkV3APweX5iYomXbq4CZKCCEjW8xBCnbkuVSzab5/004.png')
}
 if(message.content.toLowerCase() === ("!exordium 5")) {
    message.channel.send('https://ipfs.io/ipfs/QmVJzMMkV3APweX5iYomXbq4CZKCCEjW8xBCnbkuVSzab5/005.png')
}
   if(message.content.toLowerCase() === ("!exordium 6")) {
    message.channel.send('https://ipfs.io/ipfs/QmVJzMMkV3APweX5iYomXbq4CZKCCEjW8xBCnbkuVSzab5/6.png')
}
   if(message.content.toLowerCase() === ("!exordium 7")) {
    message.channel.send('https://ipfs.io/ipfs/QmVJzMMkV3APweX5iYomXbq4CZKCCEjW8xBCnbkuVSzab5/7.png')
}
   if(message.content.toLowerCase() === ("!exordium 8")) {
    message.channel.send('https://ipfs.io/ipfs/QmVJzMMkV3APweX5iYomXbq4CZKCCEjW8xBCnbkuVSzab5/8.png')
}
   if(message.content.toLowerCase() === ("!exordium 9")) {
    message.channel.send('https://ipfs.io/ipfs/QmVJzMMkV3APweX5iYomXbq4CZKCCEjW8xBCnbkuVSzab5/9.png')
}
}
      })

client.login(process.env.token)
