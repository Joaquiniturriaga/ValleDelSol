const Report = require('../models/reportModel');

const {publishEvent} = require('../events/publisher');

exports.createReport = async(data) =>{
    //guardamos en database
    const report = await Report.create(data);

    //emitimos evento

    await publishEvent('report.created', report);

    return report;
};

exports.getReports = async ()=>{
    return await Report.findAll();
};

//La capa service tiene toda la logica... asi evitamos tener todo junto (acoplamiento) en controllers etc

