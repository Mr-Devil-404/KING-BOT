module.exports.config = {
    name: "admin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`
--------------------------------------------
𝐍𝐚𝐦𝐞       : ᎷᎪᎻᎪᎠᏆ ᎻᎪՏᎪΝ
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : ᎬХ ᎷᎪᎻᎪᎠᏆ
𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧   : 𝐈𝐬𝐥𝐚𝐦
𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: ՏႮΝᎪᎷᏀϴΝᎫ
𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: ՏႮᎪᎠᏆ ᎪᎡᎪᏴᏆᎪ
𝐆𝐞𝐧𝐝𝐞𝐫.   : 𝐌𝐚𝐥𝐞
𝐀𝐠𝐞           : 24+
𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : Ꮇ𝐢𝐧𝐠𝐥𝐞
𝐖𝐨𝐫𝐤        : ᎡᏆᎠᎬᎡ
𝐆𝐦𝐚𝐢𝐥       : ᏢᎡᏆΝᏟᎬᏞᏆᏦᎻϴΝ14@ᏀᎷᎪᏆᏞ.ᏟϴᎷ
𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: wa.me/+966578146776
𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦  : t.me/ᎷᎡᎠᎬᏙᏆᏞᎬХ
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/ex.mahadi.270169`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://graph.facebook.com/100009597441249/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
