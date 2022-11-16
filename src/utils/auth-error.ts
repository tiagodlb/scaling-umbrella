import { ApplicationError } from "../protocol";

export function invalidCredentialsError(): ApplicationError {
    return {
        name: 'InvalidCredentialsError',
        message: 'email or password are incorrect'
    }
}