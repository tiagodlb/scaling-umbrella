import { ApplicationError } from '../protocol';

export function invalidDataError(details: string[]): ApplicationInvalidDataError {
    return {
        name: 'InvalidDataError',
        message: 'Invalid Data',
        details,
    }
}

type ApplicationInvalidDataError = ApplicationError & {
    details: string[];
}