import { ERROR_FORBIDDEN, ERROR_INTERNAL, ERROR_INVALID_REQUEST, ERROR_NOT_FOUND, ERROR_UNAUTHORIZED } from "../constants/errors";

export class ErrorHandler {
    static getError(statusCode: number): Error {
        switch (statusCode) {
            case 400:
                return new Error(ERROR_INVALID_REQUEST);
            case 401:
                return new Error(ERROR_UNAUTHORIZED);
            case 403:
                return new Error(ERROR_FORBIDDEN);
            case 404:
                return new Error(ERROR_NOT_FOUND);
            case 500:
                return new Error(ERROR_INTERNAL);
            default:
                return new Error('Unknown Error');
        }
    }
}