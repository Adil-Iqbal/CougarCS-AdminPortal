import express from 'express';
import APIError from './api-error';
import createLogger from '../../logger';

const logger = createLogger(__filename);

function APIErrorHandler(
  err: any,
  req: express.Request,
  res: express.Response
) {
  if (err instanceof APIError) {
    logger.error(`API Error [${err.code}] ${err.message}`);
    res.status(err.code).json(err.message);
    return;
  }

  logger.error(`${err}`);
  res.status(500).json('Something went wrong.');
}

export default APIErrorHandler;
