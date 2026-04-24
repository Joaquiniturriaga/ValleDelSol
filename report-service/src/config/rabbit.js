const amqp = require('amqplib');

let channel;

const connectRabbit = async()=>{
    const conn = await amqp.connect('amqp://rabbitmq');
    channel = await conn.createChannel();
    await channel.assertQueue('reports');
};

const getChannel = () =>channel;
module.exports = {connectRabbit, getChannel}