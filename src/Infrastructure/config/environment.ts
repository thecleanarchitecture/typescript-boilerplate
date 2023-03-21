import dotenv from 'dotenv';
import constants from '@src/Infrastructure/config/constants';

dotenv.config();

interface IEnv {
  NODE_ENV: string;
  NAME: string;
  DESCRIPTION: string;
  URL: string;
  EMAIL: string;
  SERVICE_NAME: string;
  DATABASE_DIALECT: string;
  DATABASE_URI: string;
  JWT_SECRET_KEY: string;
  PORT: string;
  HTTP_BODY_LIMIT?: string;
}

interface IDataBaseConfig {
  dialect: string;
  ulr?: string;
}

const env = process.env as unknown as IEnv;

const environment = {
  NODE_ENV: env.NODE_ENV,
  NAME: env.NAME,
  DESCRIPTION: env.DESCRIPTION,
  URL: env.URL,
  EMAIL: env.EMAIL,
  SERVICE_NAME: env.SERVICE_NAME,
  database: {
    dialect: env.DATABASE_DIALECT || constants.SUPPORTED_DATABASE.MONGO,
    url: env.DATABASE_URI || '',
  } as IDataBaseConfig,
  JWT_SECRET_KEY: env.JWT_SECRET_KEY || 'notSecureSecret',
  HTTP_BODY_LIMIT: env.HTTP_BODY_LIMIT || '2mb',
  PORT: env.PORT || 3000,
};

if (env.NODE_ENV === 'test') {
  environment.database = {
    dialect: constants.SUPPORTED_DATABASE.IN_MEMORY,
  };
}

export default environment;
