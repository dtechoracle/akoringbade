import { Router } from 'express';
import { addUsersToWaitlist, getWaitlistUsers } from '../controller/waitlist.controller';

const router = Router();

// Route for adding a user to the waitlist
router.post('/adduser', addUsersToWaitlist);

// Route for getting all users in the waitlist
router.get('/getusers', getWaitlistUsers);

export default router;
