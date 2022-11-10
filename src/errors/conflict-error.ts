import { ApplicationError } from '../protocol';

export function conflictError(message: string): ApplicationError {
    return {
        name: 'ConflictError',
        message
    }
}