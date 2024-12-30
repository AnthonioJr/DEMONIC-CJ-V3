/* #=========================================
#
#
#                                     
#        𝘿𝙀𝙈𝙊𝙉𝙄𝘾-𝘾𝙅 𝙑𝙀𝙍𝙎𝙄𝙊𝙉 𝙏𝙃𝙍𝙀𝙀
#
#       𝗠𝗨𝗟𝗧𝗜-𝗣𝗨𝗥𝗣𝗢𝗦𝗘 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗕𝗢𝗧    #      
#=============================================#
   ʟɪʙʀᴀʀʏ: ʙᴀɪʟᴇʏs  
   ᴄʀᴇᴀᴛᴏʀ: 𝙲𝙴𝙴𝙹𝙰𝚈
   ᴡʜᴀᴛsᴀᴘᴘ: +2348138621982
   ᴘᴏʀғᴏʟɪᴏ: https://CJ.us.kg
   ғᴏʟʟᴏᴡ ᴍᴇ ᴏɴ ɢɪᴛʜᴜʙ ғᴏʀ ᴍᴏʀᴇ: github.com/CHINEDU-LAP 
   ᴡᴀ ᴄʜᴀɴɴᴇʟ sᴜᴘᴘᴏʀᴛ: https://whatsapp.com/channel/0029VajOKquG3R3pOUajb71j
   ᴛɢ: @Demonic_CJ_Tech

   Description: DEMONIC-CJ-V3, a powerful multi-functional WhatsApp bot for all your needs.

#=============================================#
     IF CLONED, ADD CREDIT 🗿
     ᴄʀᴇᴅɪᴛ: sᴜʜᴀɪʟ sɪʀ
     #=============================================#
     */


const {
  smd,
  fetchJson,
  astroJson,
  fancytext,
  yt,
  getBuffer,
  smdBuffer,
  prefix,
  Config,
} = require("../lib");
const { search, download } = require("aptoide-scraper");
const googleTTS = require("google-tts-api");
const yts = require("secktor-pack");
const fs = require("fs-extra");
const axios = require("axios");
const fetch = require("node-fetch");
const path = require("path");
var videotime = 2000;
const { cmd } = require("../lib/plugins");

smd({
  pattern: "song",
  react: "🎵",
  alias: ["music"],
  desc: "Downloads audio from YouTube.",
  category: "downloader",
  filename: __filename,
  use: "<search text>"
}, async (message, query) => {
  try {
    if (!query) {
      return await message.reply("*Give me a song title or keyword*");
    }

    // Search for the video
    const searchResults = await yts(query);
    const video = searchResults.all[0];
    if (!video) {
      return await message.reply("*No results found for your search.*");
    }

    // Send video details to confirm the download
    const thumbnailBuffer = await smdBuffer(video.thumbnail);
    await message.bot.sendMessage(message.jid, {
      image: thumbnailBuffer,
      caption: `\n*𝑫𝑬𝑴𝑶𝑵𝑰𝑪-𝑪𝑱-𝑽3 𝑴𝑼𝑺𝑰𝑪 𝑫𝑶𝑾𝑵𝑳𝑶𝑨𝑫𝑬𝑹*\n\n` +
               `᪣ *Title:* ${video.title}\n` +
               `᪣ *Link:* ${video.url}\n` +
               `᪣ *Duration:* ${video.timestamp}\n` +
               `᪣ *Views:* ${video.views}\n` +
               `᪣ *Uploaded:* ${video.ago}\n` +
               `᪣ *Author:* ${video.author.name}\n\n╭────────────────྿  
│ *𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙲𝙹 𝚃𝙴𝙲𝙷*
╰─────────────────྿`
    });

    // Directly use the Ironman API link for audio download
    const audioUrl = `https://ironman.koyeb.app/ironman/dl/yta?url=${encodeURIComponent(video.url)}`;

    // Send the audio file directly
    await message.bot.sendMessage(message.jid, {
      audio: { url: audioUrl },
      fileName: `${video.title}.mp3`,
      mimetype: "audio/mpeg"
    }, { quoted: message });

  } catch (error) {
    console.error("Caught Error:", error);
    return message.reply("*Error occurred. Please try again later!*");
  }
});


smd({
  pattern: "Video",
  react: "📹",
  alias: ["video"],
  desc: "Downloads video from YouTube.",
  category: "downloader",
  filename: __filename,
  use: "<search text>"
}, async (message, query) => {
  try {
    if (!query) {
      return await message.reply("*Please provide a video title or keyword*");
    }

    // Search for the video
    const searchResults = await yts(query);
    const video = searchResults.all[0];
    if (!video) {
      return await message.reply("*No results found for your search.*");
    }

    // Send video details to confirm the download
    const thumbnailBuffer = await smdBuffer(video.thumbnail);
    await message.bot.sendMessage(message.jid, {
      image: thumbnailBuffer,
      caption: `\n*𝑫𝑬𝑴𝑶𝑵𝑰𝑪-𝑪𝑱-𝑽3 𝑽𝑬𝑫𝑰𝑶 𝑫𝑶𝑾𝑵𝑳𝑶𝑨𝑫𝑬𝑹*\n\n` +
               `᪣ *Title:* ${video.title}\n` +
               `᪣ *Link:* ${video.url}\n` +
               `᪣ *Duration:* ${video.timestamp}\n` +
               `᪣ *Views:* ${video.views}\n` +
               `᪣ *Uploaded:* ${video.ago}\n` +
               `᪣ *Author:* ${video.author.name}\n\n╭────────────────྿  
│ *𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙲𝙹 𝚃𝙴𝙲𝙷*
╰─────────────────྿`
    });

    // Use the Ironman API endpoint for video download
    const videoUrl = `https://ironman.koyeb.app/ironman/dl/ytv?url=${encodeURIComponent(video.url)}`;

    // Send the video file directly
    await message.bot.sendMessage(message.jid, {
      video: { url: videoUrl },
      fileName: `${video.title}.mp4`,
      mimetype: "video/mp4"
    }, { quoted: message });

  } catch (error) {
    console.error("Caught Error:", error);
    return message.reply("*Error occurred. Please try again later!*");
  }
});


smd({
   pattern: "tts",
   desc: "text to speech.",
   category: "ai",
   filename: __filename,
   use: "<Hii,this is DEMONIC-CJ-V3>"
 }, async (message, text) => {
   try {
     let replyText = message.reply_text ? message.reply_text : text;
     if (!replyText) {
       return message.reply("*ᴜsᴇ: .tts haki solos all");
     }
     try {
       let language = text ? text.split(" ")[0].toLowerCase() : "en";
       const audioUrl = googleTTS.getAudioUrl(replyText, {
         lang: language,
         slow: true,
         host: "https://translate.google.com"
       });
       await message.bot.sendMessage(message.jid, {
         audio: { url: audioUrl },
         mimetype: "audio/mpeg",
         ptt: true,
         fileName: "DEMONIC-CJ-V3-Md-tts.m4a"
       }, { quoted: message });
     } catch (error) {
       const fallbackUrl = googleTTS.getAudioUrl(replyText, {
         lang: "en",
         slow: true,
         host: "https://translate.google.com"
       });
       await message.bot.sendMessage(message.jid, {
         audio: { url: fallbackUrl },
         mimetype: "audio/mpeg",
         ptt: true,
         fileName: "DEMONIC-CJ-V3-Md-tts.m4a"
       }, { quoted: message });
     }
   } catch (error) {
     return message.error(error + "\n\ncommand: tts", error, false);
   }
 });
 
 
 



smd(
  {
    pattern: "wastalk",
    desc: "Get information about a WhatsApp channel.",
    category: "stalker",
    filename: __filename,
    use: "<channel_url>",
  },
  async (m, channelUrl) => {
    try {
      if (!channelUrl) {
        return await m.send("*_Please provide a WhatsApp channel URL!_*");
      }

      const apiUrl = `https://api.giftedtech.my.id/api/stalk/wachannel?url=${encodeURIComponent(
        channelUrl
      )}&apikey=gifted`;
      
      const response = await axios.get(apiUrl);

      if (response.status !== 200 || !response.data.success) {
        return await m.send(
          `*_Error: ${response.status} ${response.statusText}_*`
        );
      }

      const data = response.data.result;

      if (!data) {
        return await m.send("*_No channel information found!_*");
      }

      const {
        img,
        title,
        followers,
        description,
      } = data;

      const caption = `
*WhatsApp Channel Information*

> *Channel Name:* ${title}
> *Followers:* ${followers}
> *Description:* ${description}
`;

      await m.bot.sendFromUrl(
        m.from,
        img,
        caption,
        m,
        {},
        "image"
      );
    } catch (e) {
      await m.error(`${e}\n\ncommand: wachannelstalk`, e);
    }
  }
);





 smd({
  pattern: "instagram2",
  alias: ["insta", "ig"],
  desc: "Download media from Instagram.",
  category: "downloader",
  filename: __filename,
  use: "<url>",
}, async (m, providedUrl = "") => {
  try {
    const url = providedUrl.trim(); // Trim any leading/trailing whitespace
    if (!url) {
      return await m.send("*_Please provide an Instagram URL!_*");
    }

    const apiUrl = `https://api.neoxr.eu/api/insta?url=${encodeURIComponent(url)}&apikey=mcandy`;
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      return await m.send(`*_Error: ${response.status} ${response.statusText}_*`);
    }

    const data = await response.json();
    
    if (!data.status || data.status !== 200) {
      return await m.send(`*_Error: ${data.status} - ${data.message || "Unknown error"}_*`);
    }

    const mediaData = data.data;  // Assuming the API response contains media data in 'data'
    
    if (!mediaData) {
      return await m.send("*_No media found!_*");
    }

    const { thumbnail, url: mediaUrl, watermark } = mediaData; // Adjust keys based on API response structure
    const caption = `*Watermark:* ${watermark ? watermark : "No watermark"}\n\n_Note: This media may have a watermark._`;

    await m.bot.sendFromUrl(m.from, thumbnail, caption, m, {}, "image");
    await m.bot.sendFromUrl(m.from, mediaUrl, "", m, {}, "video");
  } catch (e) {
    await m.error(`${e}\n\ncommand: instagram2`, e);
  }
});



smd({
  pattern: "fb", // Command name remains 'tyu'
  alias: ["fbdl"],
  desc: "Downloads video from a Facebook link.",
  category: "downloader",
  filename: __filename,
  use: "<Facebook video URL>"
}, async (_0x2c2023, _0x4ec99f) => {
  try {
    if (!_0x4ec99f) {
      return await _0x2c2023.reply("*_Provide a Facebook video URL_*");
    }

    const videoUrl = _0x4ec99f; // Facebook video URL

    // Call the Facebook downloader API
    const apiUrl = `https://api.giftedtech.my.id/api/download/facebook?url=${videoUrl}&apikey=gifted`;

    const response = await axios.get(apiUrl);
    const data = response.data;

    console.log("API Response:", data); // Log the API response for debugging

    if (data.success && data.download_url) {
      const videoDownloadUrl = data.download_url; // Extract the video URL from the 'download_url' response

      // Download the video file
      const videoResponse = await axios({
        url: videoDownloadUrl,
        method: 'GET',
        responseType: 'stream'
      });

      // Create a temporary file path for the video
      const tempFilePath = path.join(__dirname, `${Date.now()}.mp4`);
      const writer = fs.createWriteStream(tempFilePath);

      // Pipe the video stream to the file
      videoResponse.data.pipe(writer);

      // Handle completion of file writing
      await new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
      });

      console.log(`Video saved to ${tempFilePath}`);

      // Send the video file to the user in normal quality
      await _0x2c2023.bot.sendMessage(_0x2c2023.jid, {
        video: { url: tempFilePath },
        caption: 'Here is your downloaded video',
        fileName: `${Date.now()}.mp4`,
        mimetype: "video/mp4"
      }, { quoted: _0x2c2023 });

      // Optionally, delete the temporary file after sending
      fs.unlinkSync(tempFilePath);
      
    } else {
      console.log("Error: Could not retrieve the video download URL, API response:", data);
      await _0x2c2023.reply("*_Error: Could not retrieve the video download URL. Please try again later!_*");
    }
  } catch (_0x86b411) {
    console.error("Caught Error:", _0x86b411); // Log any caught errors
    return _0x2c2023.error(_0x86b411 + "\n\ncommand: tyu", _0x86b411, "*_Error occurred while processing the command!!_*");
  }
});



smd({
  pattern: "gitclone",
  react: "⌛",
  desc: "Downloads git files.",
  category: "downloader",
  filename: __filename,
  use: "<add sticker url.>"
}, async (_0x1ae8f8, _0x1c586e) => {
  try {
    let _0x59e849 = _0x1c586e ? _0x1c586e : _0x1ae8f8.reply_message ? _0x1ae8f8.reply_message.text : "";
    if (!_0x1c586e) {
      await _0x1ae8f8.react("❌");
      return await _0x1ae8f8.reply("*ɢɪᴠᴇ ᴍʏ ʀᴇᴘᴏsɪᴛᴏʀʏ ᴜʀʟ*");
    }
    const _0x5906ab = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
    if (!_0x5906ab.test(_0x1c586e)) {
      await _0x1ae8f8.react("❌");
      return await _0x1ae8f8.reply("*ɴᴏᴛ ᴀ ᴠᴀʟɪᴅ ʀᴇᴘᴏsɪᴛᴏʀʏ*");
    }
    let [_0x3b1b37, _0x2f1dcc, _0x83a6d7] = _0x1c586e.match(_0x5906ab) || [];
    _0x83a6d7 = _0x83a6d7.replace(/.git$/, "");
    let _0x3e5a6d = "https://api.github.com/repos/" + _0x2f1dcc + "/" + _0x83a6d7 + "/zipball";
    let _0x2cb6ba = (await fetch(_0x3e5a6d, { method: "HEAD" })).headers.get("content-disposition").match(/attachment; filename=(.*)/)[1];
    await _0x1ae8f8.bot.sendMessage(_0x1ae8f8.jid, {
      document: {
        url: _0x3e5a6d
      },
      fileName: _0x2cb6ba,
      mimetype: "application/zip"
    });

    // Change reaction to the verified emoji after the file is sent
    await _0x1ae8f8.react("✅");

  } catch (_0x982fee) {
    await _0x1ae8f8.react("❌");
    return _0x1ae8f8.error(_0x982fee + "\n\ncommand: gitclone", _0x982fee, "*_File not found!!!_*");
  }
});

smd({
  pattern: "wikimedia",
  desc: "Downloads wikimedia images.",
  category: "downloader",
  filename: __filename,
  use: "<text|search.>"
}, async (_0x47fb55, _0x5614e8) => {
  try {
    if (!_0x5614e8) {
      return await _0x47fb55.send("*_Please Give me search query!_*");
    }
    let {
      wikimedia: _0x168a95
    } = require("../lib");
    let _0x6c377e = (await _0x168a95(_0x5614e8)) || [];
    if (!_0x6c377e || !_0x6c377e[0]) {
      return await _0x47fb55.send("*_No Results Found!_*");
    }
    let _0xc4fe0 = _0x47fb55.iscreator && _0x5614e8.split("|")[1] === "all" ? _0x6c377e.length : _0x6c377e.length > 5 ? 5 : _0x6c377e.length;
    for (let _0xfe1387 = 0; _0xfe1387 < _0xc4fe0; _0xfe1387++) {
      try {
        _0x47fb55.bot.sendFromUrl(_0x47fb55.from, _0x6c377e[_0xfe1387].image, "Title: " + _0x6c377e[_0xfe1387].title + "\n*Source:* " + _0x6c377e[_0xfe1387].source, _0x47fb55, {}, "image");
      } catch {}
    }
  } catch (_0x289d8e) {
    await _0x47fb55.error(_0x289d8e + "\n\ncommand: insta", _0x289d8e);
  }
});

smd({
  pattern: "tiktokdl2",
  alias: ["tt", "ttdl"],
  desc: "Downloads TikTok Videos via URL.",
  category: "downloader",
  filename: __filename,
  use: "<add TikTok URL>"
}, async (message, url) => {
  try {
    // Set media type based on input (optional)
    const mediaType = url.toLowerCase().includes("doc") ? "document" 
                    : url.toLowerCase().includes("mp3") ? "audio" 
                    : "video";

    if (!url) {
      return await message.reply(`*Please provide a TikTok video URL*\n*_Example: ${prefix}tiktok https://vm.tiktok.com/ZMMuSoaoq/_*`);
    }

    const tiktokUrl = url.split(" ")[0];
    if (!/tiktok/.test(tiktokUrl)) {
      return await message.reply("*Please provide a valid TikTok video URL!*");
    }

    let videoUrl;
    try {
      // Fetch video data from the specified API endpoint
      const response = await smdJson(`https://api.giftedtech.my.id/api/download/tiktokdlv2?apikey=gifted&url=${tiktokUrl}`);
      
      // Check if the response contains the video URL
      videoUrl = response?.result?.video?.noWatermark || response?.result?.video?.withWatermark || false;
    } catch (error) {
      return await message.reply("Error while retrieving video data. Please try again later.");
    }

    if (videoUrl) {
      // Send the video file with a caption
      return await message.send(videoUrl, { caption: Config.caption }, mediaType, message);
    } else {
      return await message.reply("Error: Could not retrieve the video URL.");
    }
  } catch (error) {
    return message.error(`An error occurred: ${error}\n\ncommand: tiktok`, error);
  }
});