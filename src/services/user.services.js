import { UserInfo } from "../models/index.js";
import bcrypt from 'bcrypt'


export const createUser = async (body) => {
    
    const isNewUser = await UserInfo.findOne({ "email": `${body.email}` });
    if (isNewUser) {
        return 0;
    }

    const hashedPassword = await bcrypt.hash(body.password, 16);
    const user = await UserInfo({
        name: body.name,
        email: body.email,
        password: hashedPassword
    })
    const responce = await user.save();
    return responce;

}

export const userLogin = async (body) => {

    const data = await UserInfo.findOne({ email: body.email });

    const isMatch = await bcrypt.compare(body.password, data.password);

    if (isMatch) return data;
    else return -1;
}

export const getUser = async () => {
    const data = await UserInfo.find();
    return data;
}


export const resetPassword = async (body) => {

    try {
        const user = await UserInfo.findOne({ email: body.email });
        if (!user) return false;
        const isMatch = await bcrypt.compare(body.password, user.password);

        if (isMatch) {
            const newPassword = await bcrypt.hash(body.newPassword, 16);

            console.log(body._id);

            await UserInfo.findByIdAndUpdate(user._id, { password: newPassword });

            return true;
        }
        return false;

    }
    catch (error) {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
    }


}

export const deleteUser = async (body) => {
    try {
        const result = await UserInfo.findOneAndDelete({ email: body.email });
        return result;
    }
    catch (error) {
        next(error);
    }
}
