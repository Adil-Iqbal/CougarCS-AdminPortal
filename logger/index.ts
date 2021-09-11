import winston from 'winston';
import WinstonCloudwatch from 'winston-cloudwatch';
import crypto from 'crypto';

const startTime = new Date().toISOString();

const cloudWatchTransport = new WinstonCloudwatch({
  name: 'cougarcs-admin-portal',
  logGroupName: 'admin-portal',
  logStreamName() {
    const date = new Date().toISOString().split('T')[0];
    return `prod-${date}-${crypto
      .createHash('md5')
      .update(startTime)
      .digest('hex')}`;
  },
});

const consoleTransport = new winston.transports.Console({ level: 'info' });

winston.loggers.add('prod-logger', {
  transports: [
    cloudWatchTransport,
    consoleTransport
  ]
});

export default winston.loggers.get('prod-logger');