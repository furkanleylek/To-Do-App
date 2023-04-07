import dbConnect from '@/utils/dbConnect';
import User from '@/schemas/user';
import { setCookie } from 'cookies-next'
import { NextResponse } from "next/server";

const handler = async (req, res) => {
    await dbConnect()

    const { method } = req

    if (method === "POST") {
        try {
            const userExists = await User.findOne({ email: req.body.email })
            // check for register
            if (userExists) {
                return res.status(409).json({
                    error: true,
                    message: 'This email is already in use',
                    errorCode: 'EMAIL_ALREADY_IN_USE'
                });
            } else {
                const newUser = await User.create(req.body)
                setCookie('token', req.body.user_id)
                res.status(200).json({
                    newUser
                })
            }

        } catch (err) {
            console.log(err)
        }
    }
}

export default handler