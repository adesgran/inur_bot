import { StaticAuthProvider } from '@twurple/auth';
import { Bot, SubEvent, createBotCommand } from '@twurple/easy-bot';

import { MessageQueue } from './modules/queue';
import { handleMessageEvent } from './events/messageEvent';
import { handleSubEvent } from './events/subEvent';
import { handleEmoteOnlyToggleEvent } from './events/emoteOnlyToggleEvent';
import { handleRaidEvent } from './events/raidEvent';
import { handleSubGiftEvent } from './events/subGiftEvent';
import { BotCommandContext } from '@twurple/easy-bot';


import { discordCommandName, discordHandler, discordOptions } from './commands/main/discord';
import { astiCommandName, astiHandler, astiOptions } from './commands/main/asti';
import { helpCommandName, helpHandler, helpOptions } from './commands/main/help';
import { rouletteCommandName, rouletteHandler, rouletteOptions } from './commands/games/roulette';
import { inurCommandName, inurHandler, inurOptions } from './commands/main/inur';

import dotenv from 'dotenv';

dotenv.config();

const channels = process.env.CHANNELS!.split(' ');

const clientId = process.env.BOT_CLIENT_ID!;
const accessToken = process.env.BOT_ACCESS_TOKEN!;

console.log('Client ID:', clientId);
console.log('Access Token:', accessToken ? 'Loaded' : 'Not Loaded');
console.log('Channels:', channels);

const authProvider = new StaticAuthProvider(clientId, accessToken);

const messageQueue = new MessageQueue;

interface CommandModule {
    commandName: string;
    handler: (params: string[], context: BotCommandContext, messageQueue: MessageQueue) => Promise<void>;
    options?: any;
}

(async () => {
    const commands = [
        createBotCommand(discordCommandName, async (params, context) => {
            await discordHandler(params, context, messageQueue);
        }, discordOptions),
        createBotCommand(astiCommandName, async (params, context) => {
            await astiHandler(params, context, messageQueue);
        }, astiOptions),
        createBotCommand(helpCommandName, async (params, context) => {
            await helpHandler(params, context, messageQueue);
        }, helpOptions),
        createBotCommand(rouletteCommandName, async (params, context) => {
            await rouletteHandler(params, context, messageQueue);
        }, rouletteOptions),
        createBotCommand(inurCommandName, async (params, context) => {
            await inurHandler(params, context, messageQueue);
        }, inurOptions)
    ];

    const bot = new Bot({
        authProvider,
        channels,
        commands
    });

    messageQueue.setBot(bot);

    const randomMessages = [
        "INUR !! Tape !aide pour avoir la liste de mes pouvoirs !",
        "Tu te sens seul ? Rejoins le discord ! https://discord.gg/AqcDmMxWG6",
        "Un problème avec le bot ? Envoie un message à Fillbug",
        "Je suis actuellement en refonte, je sais que la roulette te manque mais sois patient <3"
    ];

    const sendRandomMessage = () => {
        const randomMessage = randomMessages[Math.floor(Math.random() * randomMessages.length)];
        channels.forEach(channel => {
            messageQueue.say(channel, randomMessage);
        });
    };

    setInterval(sendRandomMessage, 1800000);
    handleEmoteOnlyToggleEvent(bot, messageQueue);
    handleMessageEvent(bot, messageQueue);
    handleRaidEvent(bot, messageQueue);
    handleSubEvent(bot, messageQueue);
    handleSubGiftEvent(bot, messageQueue);
})();
