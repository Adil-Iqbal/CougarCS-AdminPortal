import { Application } from 'express';
import APIError from '../error/api-error';

// @ts-expect-error
const forbiddenRoute: Application = (res, req, next) =>
  next(APIError.forbidden());

export default forbiddenRoute;
