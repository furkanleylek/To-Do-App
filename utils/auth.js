import { jwtVerify } from "jose";

export function getJwtSecretKey() {
    const JWT_SECRET_KEY = "23oawduasdjasdkop234jasufpksfafasofıha"

    if (!JWT_SECRET_KEY) {
        throw new Error("JWT Secret key is not matched");
    }

    return new TextEncoder().encode(JWT_SECRET_KEY);
}

export async function verifyJwtToken(token) {
    try {
        const { payload } = await jwtVerify(token, getJwtSecretKey());

        return payload;
    } catch (error) {
        console.log(error)
        return null;
    }
} 
