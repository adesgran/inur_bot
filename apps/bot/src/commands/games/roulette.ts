import { MessageQueue } from '../../modules/queue';
import { BotCommandContext } from '@twurple/easy-bot/lib';

export const rouletteCommandName: string = 'roulette';

export const rouletteHandler: (params: string[], context: BotCommandContext, messageQueue: MessageQueue) => Promise<void> = async (params: string[], context: BotCommandContext, messageQueue: MessageQueue) => {
    await messageQueue.reply(context.broadcasterName, `Sorry ${context.userName}, this command is not working for the moment (Cooldown 30s)`, context.msg);
};

export const rouletteOptions: { globalCooldown?: number } = {
    globalCooldown: 30
};
