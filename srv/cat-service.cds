using { sap.incidents as my } from '../db/schema';

service IncidentService {
  entity Incidents as projection on my.Incidents actions {
    action closeIncident();
  };
}