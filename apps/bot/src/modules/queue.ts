import { Bot } from '@twurple/easy-bot';
import { ChatMessage } from '@twurple/chat';

export interface QueueItem {
    type: 'say' | 'reply';
    channel: string;
    message: string;
    msg: ChatMessage | null;
}

export class MessageQueue {
    private queue: QueueItem[] = [];
    private bot: Bot | null = null;

    setBot(bot: Bot): void {
        this.bot = bot;
    }

    say(channel: string, message: string): void {
        if (!channel) {
            console.error('Channel is undefined when trying to say:', message);
            return;
        }
        if (!channel.startsWith('#')) {
            channel = `#${channel}`;
        }
        this.queue.push({ type: 'say', channel, message, msg:null });
        this.processQueue();
    }

    reply(channel: string, message: string, msg: ChatMessage): void {
        if (!channel) {
            console.error('Channel is undefined when trying to reply:', message);
            return;
        }
        if (!channel.startsWith('#')) {
            channel = `#${channel}`;
        }
        this.queue.push({ type: 'reply', channel, message, msg });
        this.processQueue();
    }

    private async processQueue(): Promise<void> {
        if (this.queue.length > 0 && this.bot) {
            const { type, channel, message, msg } = this.queue.shift() as QueueItem;
            console.log(`Processing message: ${message} in channel ${channel}`);
            try {
                if (type === 'say') {
                    await this.bot.say(channel, message);
                } else if (type === 'reply' && msg) {
                    await this.bot.reply(channel, `${message}`, msg);
                }
                console.log(`Message sent: ${message}`);
            } catch (error) {
                console.error(`Failed to send message: ${message}`, error);
            }
            setTimeout(() => this.processQueue(), 100);
        }
    }
}
