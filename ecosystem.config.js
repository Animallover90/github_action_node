module.exports = {
    apps: [
        {
            name: 'SERVER',
            script: './server.js',
            instances: 2,
            exec_mode: 'cluster',
            autorestart: true,
            env: {
                NODE_ENV: 'dev',
            },
            env_test: {
                NODE_ENV: "test"
            },
            env_production: {
                NODE_ENV: 'production',
            }
        },
    ]
};