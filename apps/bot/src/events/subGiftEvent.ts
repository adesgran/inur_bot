import { Bot } from '@twurple/easy-bot';
import { MessageQueue } from '../modules/queue';

type SubGiftEventParams = {
    gifterName: string | null;
    broadcasterName: string | null;
};

export const handleSubGiftEvent = (bot: Bot, messageQueue: MessageQueue) => {
    bot.onSubGift(({ gifterName, broadcasterName }: SubGiftEventParams) => {
        if (!gifterName || !broadcasterName) {
            console.error('Received sub gift event with null values:', { gifterName, broadcasterName });
            return;
        }

        console.log(`[${broadcasterName}] ${gifterName} just gifted subs!`);
        if (gifterName.toLowerCase() === "kefiine") {
            messageQueue.say(broadcasterName, `RANGE TA CB KEFIINE ! <3`);
        } else {
            messageQueue.say(broadcasterName, `Merci pour le sub offert, ${gifterName}! <3`);
        }
    });
};
