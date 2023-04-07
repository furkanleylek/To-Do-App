import dbConnect from '@/utils/dbConnect';
import User from '@/schemas/user';
import { NextResponse } from 'next/server';
import { setCookie } from 'cookies-next'

const handler = async (req, res) => {
    await dbConnect()

    const { method } = req

    if (method === "POST") {
        try {
            const userExists = await User.findOne({ email: req.body.email })

            // check for login
            if (!userExists) {
                return res.status(401).json({
                    error: true,
                    message: 'This email is not registered',
                    errorCode: 'EMAIL_IS_NOT_REGISTERED'
                });

            }
            if (req.body.password !== userExists.password) {
                console.log("req.body.password", req.body.password)
                console.log("userExists.passsword", userExists.password)
                return res.status(401).json({
                    error: true,
                    message: 'Email or password is not correct .',
                    errorCode: 'EMAIL_OR_PASSWORD_WRONG'
                });
            }
            if (req.body.email === userExists.email && req.body.password === userExists.password) {
                res.status(200).json({
                    token: userExists.user_id
                })
            }

            return NextResponse.json({ success: false })
        } catch (err) {
            console.log(err)
        }
    }

}

export default handler