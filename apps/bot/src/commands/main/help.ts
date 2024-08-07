import { MessageQueue } from '../../modules/queue';
import { BotCommandContext } from '@twurple/easy-bot/lib';

export const helpCommandName: string = 'help';

export const helpHandler: (params: string[], context: BotCommandContext, messageQueue: MessageQueue) => Promise<void> = async (params: string[], context: BotCommandContext, messageQueue: MessageQueue) => {
    await messageQueue.say(context.broadcasterName, "Commandes disponible : !inur, !asti, !roulette, !discord");
};

export const helpOptions: { aliases?: string[] } = {
    aliases: ['aide'],
};
