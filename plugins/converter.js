const axios = require("axios");
const fs = require("fs-extra");
const util = require("util");
const {
  StickerTypes
} = require("wa-sticker-formatter");
const fetch = require("node-fetch");
const {
  fancytext,
  smdBuffer,
  getBuffer,
  listall,
  prefix,
  smd,
  TelegraPh,
  Config
} = require("../lib");
async function generateSticker(_0x43a996, _0x5c979b, _0x116cae = {
  pack: Config.packname,
  author: Config.author
}, _0x5b1252 = true) {
  try {
    const {
      Sticker: _0x92981e,
      createSticker: _0x1a1a97,
      StickerTypes: _0x5f17c1
    } = require("wa-sticker-formatter");
    let _0x54c67c = new _0x92981e(_0x5c979b, {
      ..._0x116cae
    });
    return await _0x43a996.bot.sendMessage(_0x43a996.chat, {
      sticker: await _0x54c67c.toBuffer()
    }, {
      quoted: _0x43a996,
      messageId: _0x43a996.bot.messageId()
    });
  } catch (_0x32ee71) {
    if (_0x5b1252) {
      await _0x43a996.error(_0x32ee71 + "\n\nfileName: generateSticker->s.js\n");
    }
  }
}
let mtypes = ["imageMessage", "videoMessage", "stickerMessage"];
smd({
  cmdname: "sticker",
  alias: ["s"],
  info: "Makes sticker of replied image/video.",
  type: "sticker",
  filename: __filename,
  use: "<reply to any image/video.>"
}, async _0x5f0a63 => {
  try {
    let _0x4a2c9b = mtypes.includes(_0x5f0a63.mtype) ? _0x5f0a63 : _0x5f0a63.reply_message;
    if (_0x4a2c9b && mtypes.includes(_0x4a2c9b?.mtype || "need_Media")) {
      let _0x313fc1 = await _0x4a2c9b.download();
      let _0x37d0ee = {
        pack: Config.packname,
        author: Config.author,
        type: StickerTypes.FULL,
        quality: 10
      };
      await generateSticker(_0x5f0a63, _0x313fc1, _0x37d0ee);
      return _0x313fc1 = false;
    } else {
      return _0x5f0a63.reply("*_Uhh Dear, Reply to image/video!!_*");
    }
  } catch (_0xb1d121) {
    return await _0x5f0a63.error(_0xb1d121 + "\n\ncmdName: sticker\n");
  }
});
smd({
  cmdname: "take",
  info: "Makes sticker of replied image/video.",
  type: "sticker",
  filename: __filename,
  use: "<reply to sticker.>"
}, async (_0x471740, _0x3febcd) => {
  try {
    let _0xad98fb = _0x471740.reply_message;
    if (!_0xad98fb || _0xad98fb?.mtype != "stickerMessage") {
      return await _0x471740.reply("*Uhh Please, Reply to sticker*");
    }
    let _0x44d3dd = _0x3febcd.split("|");
    let _0x47c982 = _0x44d3dd[0]?.trim() !== "" ? _0x44d3dd[0] : _0x471740.pushName;
    let _0x20f704 = _0x44d3dd[1] && _0x44d3dd[1] !== "" ? _0x44d3dd[1] : "DEMONIC™-CJ-V3";
    let _0x3ab776 = await _0xad98fb.download();
    let _0x3d0871 = {
      pack: _0x47c982,
      author: _0x20f704,
      type: StickerTypes.FULL,
      quality: 10
    };
    await generateSticker(_0x471740, _0x3ab776, _0x3d0871);
    return _0x3ab776 = false;
  } catch (_0x2529d4) {
    return await _0x471740.error(_0x2529d4 + "\n\ncmdName: take\n");
  }
});