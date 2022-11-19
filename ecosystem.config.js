module.exports = {
  apps : [
     {
       name          : 'web',
       script        : 'npx',
       interpreter   : 'none',
       args          : 'serve build -s',
       env_production : {
         NODE_ENV: 'production'
       }
     }
   ]
};

