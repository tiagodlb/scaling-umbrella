import { ApplicationError } from "../protocol";

export function duplicatedEmailError(): ApplicationError {
    return {
        name: 'DuplicatedEmailError',
        message: 'There is already an user with given email',
    };
}
