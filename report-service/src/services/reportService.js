const reportModel = require('../models/reportModel');
const { publishReport } = require('../events/publisher');

const createReport = async (data, user) => {
    const newReport = {
        title: data.title,
        description: data.description,
        lat: data.lat,
        lng: data.lng
    };

    // guardardamos  en DB
    const savedReport = await reportModel.create(newReport);

    //enviamos a RabbitMQ
    await publishReport(savedReport);

    return savedReport;
};

const getReports = async () => {
    return await reportModel.findAll();
};

module.exports = {
    createReport,
    getReports
};