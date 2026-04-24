const { getChannel} = require('../config/db');

exports.publishEvent = async(event, data) =>{
    const channel = getChannel();


    channel.sendToqueque(
        'reports',
        Buffer.from(JSON.stringify({event, data}))
    );
};