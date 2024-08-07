import { Bot } from '@twurple/easy-bot';
import { MessageQueue } from '../modules/queue';

type MessageEventParams = {
    broadcasterName: string, 
    userName: string, 
    text: string
}

export const handleMessageEvent = (bot:Bot, messageQueue:MessageQueue) => {
    bot.onMessage(({broadcasterName, userName, text}: MessageEventParams) => {
        if (text.toLowerCase().includes("babengs") || text.toLowerCase().includes("babinks"))
        {
            messageQueue.say(broadcasterName, "BABINKS");
        }
        else if (text.toLowerCase().includes("terrible"))
        {
            messageQueue.say(broadcasterName, "Terrible");
        }
    });
};
