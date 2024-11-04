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
        const message ='Thank you for signing up for AKORINGBADE The Album listening party. You have secured a seat at Album Listening in Dami’s room. You’d get a follow up email days to the event. Thank you for supporting Akoringbade';
    
        await sendEmail({
            to: newUser.email,
            subject: 'Thanks for signing up for the newsletter 🚀',
            message,
        });

        return newUser;
    }
    

}