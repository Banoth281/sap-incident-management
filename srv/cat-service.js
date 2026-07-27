const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {
  const { Incidents } = this.entities;

  // Existing custom logic for URGENT prefix
  this.before('CREATE', 'Incidents', req => {
    if (req.data.priority === 'High' && !req.data.title.startsWith('[URGENT]')) {
      req.data.title = `[URGENT] ${req.data.title}`;
    }
  });

  // Custom action to close an incident
  this.on('closeIncident', Incidents, async (req) => {
    const id = req.params[0];
    await UPDATE(Incidents).set({ status: 'Closed' }).where({ ID: id });
    return req.info('Incident has been successfully closed.');
  });
});