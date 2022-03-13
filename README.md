# Discord SelfBot

Simple Discord Self Bot

Created By viloid (github.com/vsec7)

*** NOTE : USE AT YOUR OWN RISK! ***

## • Installation

```bash
git clone https://github.com/vsec7/Discord-SelfBot.git
cd Discord-SelfBot
npm install
cp .env.example .env
```

## • Edit Configurations *.env* file

```env
BOT_TOKEN=                      # Discord SelfBot Token *Required
CHANNEL_ID=                     # channel id *Required
MODE=                           # mode: quote, simsimi, repost *Leave blank Default: quote
DELAY=10000                     # Delay per send massage *millisecond
DEL_AFTER=                      # Delete after send *Leave blank if you dont use it *millisecond
SIMSIMI_LANG=                   # SimSimi Language : id, en *Leave blank Default: id
REPOST_LAST_CHAT=50             # Repost from last ?n chat in channel          
```
## • How to get Discord SelfBot Token?

```
javascript:var i = document.createElement('iframe');i.onload = function(){var localStorage = i.contentWindow.localStorage;prompt('DC Token By @github.com/vsec7', localStorage.getItem('token').replace(/["]+/g, ''));};document.body.appendChild(i);
```

Paste in your url bar when open discord web

word **javascript** may removed by browser , you can type it manual.

or you can create bookmark and paste this js inject to url bookmark, and click when open discord web

## • How to Run?
```bash
npm start
or
node index.js
```
## • Features
- Send Quote message
- Send Response simsimi
- Send Repost message from history 
- Auto Delete message

## • Donation

SOL Address : viloid.sol

BSC Address : 0xd3de361b186cc2Fc0C77764E30103F104a6d6D07
