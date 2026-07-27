namespace sap.incidents;

entity Incidents {
  key ID          : UUID;
      title       : String(100);
      description : String(500);
      status      : String default 'New';
      priority    : String default 'Medium';
}