const config = {
    production: {
        secret: process.env.secret,
        MONGO_URI: process.env.MONGO_URI,
        port: process.env.PORT
    },
    development: {
        secret: 'I_AME_GERER',
        // MONGO_URI: 'mongodb+srv://root:p3ssw0rd@cluster0.xhd6d.mongodb.net/music-db',
        MONGO_URI: 'mongodb://localhost/music-db',
        port: 3000
    }
};

export const getConfig = env => config[env] || config.development;