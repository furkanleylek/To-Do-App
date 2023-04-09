import { SignJWT } from 'jose';
import { getJwtSecretKey } from '@/utils/auth';

export async function jwtToken(email, name) {
    const token = await new SignJWT({
        name: name,
        email: email
    }).setProtectedHeader({
        alg: 'HS256'
    }).setIssuedAt()
        .setExpirationTime('10y')
        .sign(getJwtSecretKey())
    return token
}

