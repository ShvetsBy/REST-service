import winston from 'winston'
// import { ERROR_OUTPUT, LOG_OUTPUT } from '../../common/'

const logger = winstone.createLogger ({
    level: 'info',
    format: winston.format.json(),
    exitOnError: true,
    transports: [
        new winston.transports.File({filename: 'logs/error.log', level: 'error'}),
        new winston.transports.File({filename: 'logs/combined.log'})
    ]
})

logger.add(new winston.transports.Console());

export { logger }