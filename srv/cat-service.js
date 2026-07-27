const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {
  const { Incidents } = this.entities;

  // 1. Validation Rule: Minimum title length
  this.before(['CREATE', 'UPDATE'], 'Incidents', req => {
    if (req.data.title && req.data.title.length < 5) {
      req.error(400, 'Title must be at least 5 characters long.');
    }
  });

  // 2. Guard Rule: Prevent modifications on closed tickets
  this.before('UPDATE', 'Incidents', async (req) => {
    const id = req.data.ID || req.params[0];
    const incident = await SELECT.one.from(Incidents).where({ ID: id });
    if (incident && incident.status === 'Closed') {
      req.error(400, 'Closed incidents cannot be modified.');
    }
  });

  // 3. Existing Urgent Prefix Handler
  this.before('CREATE', 'Incidents', req => {
    if (req.data.priority === 'High' && !req.data.title.startsWith('[URGENT]')) {
      req.data.title = `[URGENT] ${req.data.title}`;
    }
  });

  // 4. Custom Action: Close Incident
  this.on('closeIncident', Incidents, async (req) => {
    const id = req.params[0];
    await UPDATE(Incidents).set({ status: 'Closed' }).where({ ID: id });
    return req.info('Incident has been successfully closed.');
  });
});