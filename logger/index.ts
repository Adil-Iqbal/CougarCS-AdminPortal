import winston from 'winston';
import WinstonCloudwatch from 'winston-cloudwatch';
import crypto from 'crypto';

const startTime = new Date().toISOString();

const cloudWatchTransport = new WinstonCloudwatch({
    name: "cougarcs-admin-portal",
    logGroupName: 'admin-portal',
    logStreamName: function() {
      let date = new Date().toISOString().split('T')[0];
      return 'admin-portal-' + date + '-' + crypto.createHash('md5')
        .update(startTime)
        .digest('hex');
    }
  });

  const consoleTransport = new winston.transports.Console({ level: 'info' });

