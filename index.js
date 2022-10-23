require('dotenv').config();
const axios = require('axios');
const Discord = require('dc-api')

/*
    Simple Discord Self Bot
    Created by viloid ( github.com/vsec7 )
    Date : 13/03/2022
    NOTE : USE AT YOUR OWN RISK!
*/

if (!process.env.BOT_TOKEN) {
    throw new Error('Token is Required!');
}

if (!process.env.CHANNEL_ID) {
    throw new Error('Channel ID is Required!');
}

const bot = new Discord(process.env.BOT_TOKEN)
const c = process.env.CHANNEL_ID;

async function simsimi(input, lc) {
    // Simsimi
    const url = 'https://api.simsimi.net/v2/?lc='+ lc +'&text='+ input;   
    let res = await axios.get(url);
    return res.data['success'];    
}

async function Quote() {
    // Quote
    const url = 'https://raw.githubusercontent.com/lakuapik/quotes-indonesia/master/raw/quotes.min.json';   
    let res = await axios.get(url);
    return res.data[Math.floor((Math.random()*res.data.length))].quote;    
}

bot.GetMe().then(r => {
    const me = r.username + '#' + r.discriminator
    console.log("Logged in as %s", me) 
});

const mode = process.env.MODE || 'quote';

console.log("MODE : %s", mode)

switch(mode) {
    case "quote":
        setInterval (function () {    
            bot.GetMessage(c, 1).then(m => {
                Quote().then(r => {                    
                    bot.SendMessage(c, r).then(m => {
                        console.log("[SEND][%s] %s", m.id, m.content)
                        if(process.env.DEL_AFTER){
                            setTimeout(() => 
                                bot.DeleteMessage(c, m.id).then(d => {
                                    console.log("[DELETE][%s] %s", m.id, m.content)
                                }), 
                            process.env.DEL_AFTER)
                        }
                    })
                })
            })
        }, process.env.DELAY);
        break;
    case "simsimi":
        setInterval (function () {    
            bot.GetMessage(c, 1).then(m => {
                const lc = process.env.SIMSIMI_LANG || 'id'
                simsimi(m.reverse()[0].content, lc).then(r => {                    
                    bot.SendMessage(c, r).then(m => {
                        console.log("[SEND][%s] %s", m.id, m.content)
                        if(process.env.DEL_AFTER){
                            setTimeout(() => 
                                bot.DeleteMessage(c, m.id).then(d => {
                                    console.log("[DELETE][%s] %s", m.id, m.content)
                                }), 
                            process.env.DEL_AFTER)
                        }
                    })
                })
            })
        }, process.env.DELAY);
        break;
    case "repost":
        setInterval (function () {
            const last_chat = process.env.REPOST_LAST_CHAT || 100
            bot.GetMessage(c, last_chat).then(m => {
                bot.SendMessage(c, m.reverse()[0].content).then(m => {
                    console.log("[SEND][%s] %s", m.id, m.content)
                    if(process.env.DEL_AFTER){
                        setTimeout(() => 
                            bot.DeleteMessage(c, m.id).then(d => {
                                console.log("[DELETE][%s] %s", m.id, m.content)
                            }), 
                        process.env.DEL_AFTER)
                    }
                })
            })
        }, process.env.DELAY);
        break;
    default:
        console.log("[!] Available mode: quote, simsimi, repost")
}
