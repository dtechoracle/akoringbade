import { IUser } from './../types/interfaces/user.inter';
import User from '../model/user.model';
import sendEmail from '../utils/sendEmail';


export default class WaitlistService{

    static async getAll(): Promise<IUser[]> {
        const users = await User.find()
        return users;
    }

    static async findUserByEmail(email: string): Promise<IUser | null> {
        const data =  await User.findOne({ email })
  
        return data
    }

    static async addUser(userData: { email: string }): Promise<IUser | null> {
        const { email } = userData;
        const newUser = await User.create({ email });
        const message ='Good day to my jolly people, how una Dey today? Congratulations once again as you have successfully secured a free seat for the AKORINGBADE listening party. 
This one na owambe things ooo and we go Jaiye till dawn for Dami’s room. 
Below are the details of the event. 

Date : Friday, November 15th, 2024.
Venue :  TRib3 Lagos 
288B, Ajose Adeogun Street, Victoria Island, Lagos, Nigeria.
Time : 9pm.

NB: Once you kak better native attire enter the location, my ladies and gentlemen una go enter yakata with no palava. 
Free entry sure for you🫶🏽🫶🏽
See you there in your African attires 
WE CELEBRATE TOGETHER ON FRIDAY';
    
        await sendEmail({
            to: newUser.email,
            subject: 'Akoringbade's listening party,
            message,
        });

        return newUser;
    }
    

}
