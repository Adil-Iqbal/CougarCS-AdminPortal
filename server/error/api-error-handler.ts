import express from 'express';
import APIError from './api-error';
import { httpStatusCodes } from './http-status-codes';
import createLogger from '../../logger';

const { HTTP_500_INTERNAL_SERVER_ERROR } = httpStatusCodes;

const logger = createLogger(__filename);

const GENERIC_ERROR_MESSAGE = 'Something went wrong.';

function APIErrorHandler(
  err: any,
  req: express.Request,
  res: express.Response
) {
  if (err instanceof APIError) {
    logger.error(
      `API Error [${err.code}] ${err.message || GENERIC_ERROR_MESSAGE}`
    );
    res.status(err.code).json({ message: err.message });
    return;
  }

  logger.error(`${err}`);
  res
    .status(HTTP_500_INTERNAL_SERVER_ERROR)
    .json({ message: GENERIC_ERROR_MESSAGE });
}

export default APIErrorHandler;
