import { StatusCodes } from 'http-status-codes';

export interface HttpStatusCodes {
  HTTP_100_CONTINUE: number;
  HTTP_102_PROCESSING: number;
  HTTP_200_OK: number;
  HTTP_201_CREATED: number;
  HTTP_202_ACCEPTED: number;
  HTTP_203_NON_AUTHORITATIVE_INFORMATION: number;
  HTTP_204_NO_CONTENT: number;
  HTTP_205_RESET_CONTENT: number;
  HTTP_206_PARTIAL_CONTENT: number;
  HTTP_207_MULTI_STATUS: number;
  HTTP_300_MULTIPLE_CHOICES: number;
  HTTP_301_MOVED_PERMANENTLY: number;
  HTTP_302_MOVED_TEMPORARILY: number;
  HTTP_303_SEE_OTHER: number;
  HTTP_304_NOT_MODIFIED: number;
  HTTP_308_PERMANENT_REDIRECT: number;
  HTTP_400_BAD_REQUEST: number;
  HTTP_402_PAYMENT_REQUIRED: number;
  HTTP_403_FORBIDDEN: number;
  HTTP_404_NOT_FOUND: number;
  HTTP_405_METHOD_NOT_ALLOWED: number;
  HTTP_406_NOT_ACCEPTABLE: number;
  HTTP_407_PROXY_AUTHENTICATION_REQUIRED: number;
  HTTP_408_REQUEST_TIMEOUT: number;
  HTTP_409_CONFLICT: number;
  HTTP_410_GONE: number;
  HTTP_411_LENGTH_REQUIRED: number;
  HTTP_412_PRECONDITION_FAILED: number;
  HTTP_413_REQUEST_TOO_LONG: number;
  HTTP_414_REQUEST_URI_TOO_LONG: number;
  HTTP_416_REQUESTED_RANGE_NOT_SATISFIABLE: number;
  HTTP_417_EXPECTATION_FAILED: number;
  HTTP_418_IM_A_TEAPOT: number;
  HTTP_419_INSUFFICIENT_SPACE_ON_RESOURCE: number;
  HTTP_420_METHOD_FAILURE: number;
  HTTP_423_LOCKED: number;
  HTTP_424_FAILED_DEPENDENCY: number;
  HTTP_428_PRECONDITION_REQUIRED: number;
  HTTP_431_REQUEST_HEADER_FIELDS_TOO_LARGE: number;
  HTTP_500_INTERNAL_SERVER_ERROR: number;
  HTTP_501_NOT_IMPLEMENTED: number;
  HTTP_502_BAD_GATEWAY: number;
  HTTP_504_GATEWAY_TIMEOUT: number;
  HTTP_505_HTTP_VERSION_NOT_SUPPORTED: number;
  HTTP_507_INSUFFICIENT_STORAGE: number;
  HTTP_511_NETWORK_AUTHENTICATION_REQUIRED: number;
}

export const httpStatusCodes: { [index: string]: number } | HttpStatusCodes =
  {};

Object.entries(StatusCodes).forEach((pair) => {
  const [key, value] = pair;
  if (typeof value === 'number')
    httpStatusCodes[`HTTP_${value}_${key}`] = value;
});
