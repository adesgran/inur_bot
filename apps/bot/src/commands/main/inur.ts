import { MessageQueue } from '../../modules/queue';
import { BotCommandContext } from '@twurple/easy-bot/lib';

export const inurCommandName: string = 'inur';

export const inurHandler: (params: string[], context: BotCommandContext, messageQueue: MessageQueue) => Promise<void> = async (params: string[], context: BotCommandContext, messageQueue: MessageQueue) => {
    await messageQueue.say(context.broadcasterName, 'Je suis un ingénieur sans génie !');
};

export const inurOptions: { aliases?: string[] } = {
    aliases: ['inurbot', 'bot', 'inut_bot']
};
