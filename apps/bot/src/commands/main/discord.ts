import { MessageQueue } from '../../modules/queue';
import { BotCommandContext } from '@twurple/easy-bot/lib';

export const discordCommandName: string = 'discord';

export const discordHandler: (params: string[], context: BotCommandContext, messageQueue: MessageQueue) => Promise<void> = async (params: string[], context: BotCommandContext, messageQueue: MessageQueue) => {
    messageQueue.say(context.broadcasterName, "Rejoins le Discord : https://discord.gg/AqcDmMxWG6");
};

export const discordOptions: { aliases?: string[] } = {
    aliases: ['dc'],
};
