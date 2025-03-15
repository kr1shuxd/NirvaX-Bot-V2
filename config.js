

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1282344443109838903, 1035523468650872883"], 
  mongodbUri : "mongodb+srv://shiva:shiva@discordbot.opd5w.mongodb.net/?retryWrites=true&w=majority",
  spotifyClientId : "",
  spotifyClientSecret : "",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#ff0000",
  activityName: "NirvaX | /help", // This is bot status Write Anything here 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://dsc.gg/nirvax",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "Avinan",
      password: "avinan",
      host: "new-york-node-1.vortexcloud.xyz",
      port:  9323,
      secure: false
    }
  ]
}
