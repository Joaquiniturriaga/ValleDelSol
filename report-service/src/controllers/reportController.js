const reportService = require('../services/reportService');

exports.create = async(req , res) =>{
    const report = await reportService.createReport(req.body);
    res.status(201).json(report);
};

exports.getAll = async(req, res) => {
    const reports = await reportService.getReports();
    req.json(reports);
};