const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {
    const { Incidents } = this.entities;

    // Triggered automatically before a new Incident is created
    this.before('CREATE', 'Incidents', (req) => {
        const { priority, title } = req.data;
        
        // Auto-prefix urgent incidents
        if (priority === 'Urgent' && title && !title.startsWith('[URGENT]')) {
            req.data.title = `[URGENT] ${title}`;
        }
    });
});