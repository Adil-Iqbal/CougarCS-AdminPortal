import { httpStatusCodes } from './http-status-codes';

const {
  HTTP_400_BAD_REQUEST,
  HTTP_403_FORBIDDEN,
  HTTP_500_INTERNAL_SERVER_ERROR,
} = httpStatusCodes;

const ACCESS_DENIED = 'Access Denied';

class APIError {
  code: number;

  message?: string;

  constructor(code: number, message?: string) {
    this.code = code;
    this.message = message;
  }

  static badRequest(message?: string) {
    return new APIError(HTTP_400_BAD_REQUEST, message);
  }

  static forbidden() {
    return new APIError(HTTP_403_FORBIDDEN, ACCESS_DENIED);
  }

  static internal(message?: string) {
    return new APIError(HTTP_500_INTERNAL_SERVER_ERROR, message);
  }
}

export default APIError;
