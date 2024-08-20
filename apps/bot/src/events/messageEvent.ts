import { Bot } from '@twurple/easy-bot';
import { MessageQueue } from '../modules/queue';

type MessageEventParams = {
    broadcasterName: string, 
    userName: string, 
    text: string
}

export const handleMessageEvent = (bot:Bot, messageQueue:MessageQueue) => {
    bot.onMessage(({broadcasterName, userName, text}: MessageEventParams) => {
        let rng = !(Math.floor(Math.random() * 6));
        if (text.toLowerCase().includes("babengs") || text.toLowerCase().includes("babinks"))
        {
            if (rng)
                messageQueue.say(broadcasterName, "BABINKS");
        }
        else if (text.toLowerCase().includes("terrible"))
        {
            if (rng)
                messageQueue.say(broadcasterName, "Terrible");
        }
        else if (/^(blbl)+$/.test(text) || /^(bl)+$/.test(text) && (text.match(/bl/g)!.length % 2 === 1) && text.length > 2)
        {
            messageQueue.say(broadcasterName, text);
        }
    });
};
