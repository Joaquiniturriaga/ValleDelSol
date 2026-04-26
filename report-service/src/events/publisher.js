const { getChannel} = require('../config/rabbit');

const publishReport = async (report) =>{
    const channel ; getChannel();

    channel.sendToqueque(
        'reports_queue',
        Buffer.from(JSON.stringify(report))
    );
    console.log('Report send to queue');
};

module.exports = { publishReport };