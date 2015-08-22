var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/icusmooth';

var client = new pg.Client(connectionString);
client.connect();
var query = client.query(
'CREATE TABLE topics
(
 id serial NOT NULL,
 text character varying(160) NOT NULL,
 vote integer NOT NULL,
 CONSTRAINT topics_pkey PRIMARY KEY (id)
)
WITH (
 OIDS=FALSE
);');
query.on('end', function() { client.end(); });