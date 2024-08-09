import { Bot } from '@twurple/easy-bot';
import { MessageQueue } from '../modules/queue';

type RaidEventParams = {
    broadcasterName: string,
    userName: string,
    viewerCount: Number
}

export const handleRaidEvent = (bot:Bot, messageQueue:MessageQueue) => {
    bot.onRaid(({broadcasterName, userName, viewerCount}: RaidEventParams) => {
        console.log(`[${broadcasterName}] ${userName}: raid avec ${viewerCount} viewers`);
        if (userName.toLowerCase() === "505karma") {
            messageQueue.say(broadcasterName, `Merci Karma pour le raid de ${viewerCount} viewers, como so vo ? <3`);
        }
        else if (userName.toLowerCase() === "lunijune") {
            messageQueue.say(broadcasterName, `Merci Luni pour le raid de ${viewerCount} viewers, comment vous allez les lunes ? <3`);        
        }
        else if (userName.toLowerCase() === "benar__") {
            messageQueue.say(broadcasterName, `MAIS NOOON !!! Merci pour le raid Benar, on se connait même pas !`);
            messageQueue.say(broadcasterName, `Comment ça va PATWON ?? <3`);        
        }
        else if (userName.toLowerCase() === "poachimpa") {
            messageQueue.say(broadcasterName, `Merci à toi petit paresseux pour le raid de ${viewerCount} viewers, comment vous allez les paresseux ? <3`);        
        }
        else if (userName.toLowerCase() === "emi_vibes") {
            messageQueue.say(broadcasterName, `Merci Emi pour le raid de ${viewerCount} viewers, comment vous allez mes bg ? <3`);        
            messageQueue.say(broadcasterName, `UwU Gang !`);        
        }
        else if (userName.toLowerCase() === "chronommia") {
            messageQueue.say(broadcasterName, `Merci Chrono pour le raid de ${viewerCount} viewers ! <3`);        
            messageQueue.say(broadcasterName, `DONNEZ-MOI UN C, DONNEZ-MOI UN H, DONNEZ-MOI UN R, DONNEZ-MOI....`); 
            messageQueue.say(broadcasterName, `J'arrête, c'est chiant Kappa`);        
        }
        else {
            messageQueue.say(broadcasterName, `Merci ${userName} pour le raid de ${viewerCount} viewers ! <3`);
        }
    });
};
