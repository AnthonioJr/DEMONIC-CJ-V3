const fs = require("fs");
const Config = require("../config");
const { smd } = require("../lib");

// Define the runtime function (or import it if it's from another file)
function runtime(seconds) {
  const days = Math.floor(seconds / (3600 * 24));
  const hours = Math.floor((seconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  return `${days}d ${hours}h ${minutes}m ${secs}s`;
}

// Command definition for 'alive'
smd(
  {
    pattern: "alive", // Command trigger
    react: "😈", // Reaction when the command is run
    desc: "Check bot's status, speed, and latency with channel link", // Command description
    category: "misc", // Command category
    filename: __filename, // Filename reference
  },
  async (message, client) => {
    const start = Date.now();
    
    // Perform an action (no intermediate reply message)
    await new Promise((resolve) => setTimeout(resolve, 100)); // Small delay to simulate a task

    const latency = Date.now() - start;
    const channelLink = "https://whatsapp.com/channel/0029VajOKquG3R3pOUajb71j"; // Replace with your actual channel link

    // Final message with latency, speed, and channel link
    const finalMessage = `
😈 *DEMONIC-CJ-V3 is Alive!*

*Latency:* ${latency}ms
*Speed:* Fast as always🚀

*Channel Link:* ${channelLink}

*=== |☘️| Powered by CEEJAY |☘️| ===*
    `;

    // Send the final message directly (no initial message)
    await message.reply(finalMessage);
  }
);


// About command 'abbt'
smd(
  {
    pattern: "about", // Command trigger
    react: "👇", // Reaction when the command is run
    desc: "Shows if the bot is alive and displays important information", // Command description
    category: "misc", // Command category
    filename: __filename, // Filename reference
  },
  async (message) => {
    const owner = "CEEJAY"; // Owner name
    const footer = "=== |☘️| Powered by CEEJAY |☘️| === ";
    const repoLink = "https://github.com/CJ-LAP/DEMONIC-CJ-V3"; // Repository link
    const channelLink = "https://whatsapp.com/channel/0029VajOKquG3R3pOUajb71j"; // Channel link
    const whatsappGroupLink = "https://whatsapp.com/channel/0029VajOKquG3R3pOUajb71j"; // WhatsApp Group link
    const uptime = runtime(process.uptime()); // Get bot uptime

    // Prepare the final message content
    const finalMessage = `
😈 'DEMONIC-CJ MD'

*Owner:* ${owner}

*Channel:* ${channelLink}

*Repository:* ${repoLink}

*WhatsApp Group:* ${whatsappGroupLink}

*Made With Love by CEEJAY ❤️*

*Bot Uptime:* ${uptime}

*LONG LIVE THE SMART DEMON 😈*

 ${footer}

`;

    // Send the final message
    await message.reply(finalMessage);
  }
);



smd({
    pattern: "dev",
    react: "🧠",
    desc: "displays info about the developer",
    category: "misc",   
    filename: __filename,
  },
  async (message) => {
    const age = "*18*";
    
    const occupation = "*front end web developer*";
    
    const hobby = "*coding*";
    
    const contact = "*https://wa.me/2348138621982*";
    
    const name = "*CEEJAY 🌟*";
    
    const footer = "*=== |☘️| Powered by CEEJAY |☘️| ===*";

    const messages = `
      name: ${name}
      
      age: ${age}
      
      occupation: ${occupation}
      
      hobby: ${hobby}
      
      contact: ${contact}
      

      ${footer}
    `;
    
    await message.reply(messages);
  }
);
