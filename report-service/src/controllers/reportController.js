const reportService = require('../services/reportService');

const createReport = async(req, res )=>{
    try {
        const report = await reportService.createReport(
            req.body,
            req.status
        );

        res.status(201).json(report);
    } catch (error) {
        res.status(500).json({error:error.message});
        
        
    }
};

const getReports=(req,res)=>{
    const reports= reportService.getReports();
    res.json(reports);
};

module.exports = {
    createReport,
    getReports
};