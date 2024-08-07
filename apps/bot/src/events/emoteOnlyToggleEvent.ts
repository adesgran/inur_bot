import { Bot } from '@twurple/easy-bot';
import { MessageQueue } from '../modules/queue';

type EmoteOnlyToggleParams = {
    broadcasterName: string,
    enabled: boolean
}

export const handleEmoteOnlyToggleEvent = (bot:Bot, messageQueue:MessageQueue) => {
    bot.onEmoteOnlyToggle(({broadcasterName, enabled}:EmoteOnlyToggleParams) => {
        console.log(`[${broadcasterName}] Emote only set to : ${enabled}`);
        if (enabled)
        {
            messageQueue.say(broadcasterName, "CHEH, vous pouvez plus parler Kappa");
        }
        else
        {
            messageQueue.say(broadcasterName, "C'est bon, vous êtes libres mes petits Axolotls <3");
        }
    });
};