import db from './CreateConnection.js';

const isInDeleteMode = true;

if (isInDeleteMode) {
  db.exec('DROP TABLE IF EXISTS items');
}

db.exec(`CREATE TABLE IF NOT EXISTS items (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name VARCAHR(70),
description VARCAHR(150),
color VARCHAR(30),
price INTEGER
);`);

//seed
db.run("INSERT INTO items (name, description, color, price) VALUES ('Hoodie', 'Made from the high quality products this hoodie is perfect for everyone!', '#ea5045' ,500)");
db.run("INSERT INTO items (name, description, color, price) VALUES ('Track suite', 'Be stylish! This Track suite is perfect for you!','#233249', 1000)");
db.run("INSERT INTO items (name, description, color, price) VALUES ('Cup', 'Drink coffee like a pro. With this cup your coffee in the  morning will be much better','#E5E5E5', 100)");
db.run("INSERT INTO items (name, description, color, price) VALUES ('Pen', 'Write notes or sign contracts. Be creative with this pen','#ea5045', 50)");
db.run("INSERT INTO items (name, description, color, price) VALUES ('Pencil', 'Afraid of errors? Use the pencil and correct your mistakes if needed','#233249', 10)");
db.run("INSERT INTO items (name, description, color, price) VALUES ('T-shirt', 'During summer you will be stylish and origin - no one will have t-shirt like this.', '#E5E5E5' , 300)");
db.run("INSERT INTO items (name, description, color, price) VALUES ('Hat', 'Be fun, have fun, put on this hat and get into party mood','#ea5045', 70)");

db.close();
