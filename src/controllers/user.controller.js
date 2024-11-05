import * as UserServices from '../services/user.services.js'
import HttpStatus from 'http-status-codes'

export const createUser = async (req, res, next) => {
    try {
   
        const data = await UserServices.createUser(req.body);
        if (data === 0) res.status(HttpStatus.BAD_REQUEST).send({
            success: "false",
            message: "Email already in use, try sign-in",
        });
        res.status(HttpStatus.OK).json({
            message: "User created successfully...",
            data: data
        });
    }
    catch (error) {
        next(error);
    }
}

export const getUser = async (req, res, next) => {
    try {
        const data = await UserServices.getUser(req.body);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'All users fetched successfully'
        });
    }
    catch (error) {
        next(error);
    }
}

export const userLogin = async (req, res, next) => {

    try {
        const data = await UserServices.userLogin(req.body);

        if (data == -1) res.send({ msessage: "invalid credentials" });
        res.status(HttpStatus.OK).json({
            message: `Login Successful, Welcome ${data.name}`,
            code: HttpStatus.OK,
            data: data,
        });

    }
    catch (error) {
        next(error);
    }
}

export const resetPassword = async (req, res, next) => {
    const isUpdated = await UserServices.resetPassword(req.body);

    if (isUpdated) res.status(HttpStatus.OK).json({
        message: "password updated successfully..."
    })
    else res.status(HttpStatus.UNAUTHORIZED).json({
        message: "not able to update password : Invalid credentials..."
    })
}

export const deleteUser = async (req, res, next) => {
    const isDeleted = await UserServices.deleteUser(req.body);
    if (isDeleted) res.status(HttpStatus.OK).json({
        message: `User with email - ${req.body.email} is deleted successfully.`
    })
    else res.send({
        message: `No user found with this mail - ${req.body.email}`
    })
}