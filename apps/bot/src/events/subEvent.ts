import { Bot } from '@twurple/easy-bot';
import { MessageQueue } from '../modules/queue';

type SubEventsParams = {
    broadcasterName: string,
    userName: string
}

export const handleSubEvent = (bot:Bot, messageQueue:MessageQueue) => {
    bot.onSub(({broadcasterName, userName}:SubEventsParams) => {
        console.log(`[${broadcasterName}] ${userName} just subscribed!`);
        messageQueue.say(broadcasterName, `Merci pour ton sub, ${userName}! <3`);
    });
};
