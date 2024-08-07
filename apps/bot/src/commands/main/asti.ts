import { MessageQueue } from '../../modules/queue';
import { BotCommandContext } from '@twurple/easy-bot/lib';

export const astiCommandName: string = 'asti';

export const astiHandler: (params: string[], context: BotCommandContext, messageQueue: MessageQueue) => Promise<void> = async (params: string[], context: BotCommandContext, messageQueue: MessageQueue) => {
    const msgList: string[] = [
        "La meilleure !",
        "PTDR c'est qui ?",
        "Vive l'imperatrice Asti !",
        "<3 <3",
        "Meilleure E-Girl du coin",
        "Aimbot sur pied !.. Enfin presque",
        "C'est celle qui stream là",
        "AKA Asticota"
    ];
    const message = msgList[Math.floor(Math.random() * msgList.length)];
    await messageQueue.say(context.broadcasterName, message);
};

export const astiOptions: { aliases?: string[] } = {
    aliases: ['asticota', 'bebousti', 'bousti'],
};
