import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import AppError from '../utils/appError';
import WaitlistService from '../services/waitlist.service';
import ResponseHelper from '../utils/response';

/**
 * @author
 * @description Get all users
 * @route `/api/v1/waitlist/all-users`
 * @access Private
 * @type GET
 **/
export const getWaitlistUsers = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await WaitlistService.getAll();

    if(!users || users.length === 0) {
        return next(new AppError("No user found yet", ResponseHelper.RESOURCE_NOT_FOUND))
    }

    ResponseHelper.sendSuccessResponse(res, {       
        data: users,
        statusCode: ResponseHelper.OK,
    });
} catch (error) {
    console.log(error);
    return next(new AppError("An error occurred while trying to get all users. Please try again.", ResponseHelper.INTERNAL_SERVER_ERROR))
}
});


/**
 * @author
 * @description add user to waitlist
 * @route `/api/v1/waitlist/adduser`
 * @access Private
 * @type POST
 **/
export const addUsersToWaitlist = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  try {

    const { email } = req.body;

    const existingEmail = await WaitlistService.findUserByEmail(email);

    if (existingEmail) {
      return ResponseHelper.sendResponse(res, {
        statusCode: ResponseHelper.BAD_REQUEST,
        message: 'You are already on the waitlist. See you at launch!'
      });
    }

    const newUser = await WaitlistService.addUser(req.body);
    ResponseHelper.sendResponse(res, {
      statusCode: ResponseHelper.OK,
      message: 'You are added to the waitlist. See you at launch!',
      data: { newUser },
    });

  } catch (error) {
    console.error("An error occurred:", error);
    return next(new AppError("An error occurred. Please try again.", ResponseHelper.INTERNAL_SERVER_ERROR));
  }
});