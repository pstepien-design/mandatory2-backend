import db from './CreateConnection.js';

const isInDeleteMode = true;

if (isInDeleteMode) {
  db.exec('DROP TABLE IF EXISTS items');
}

db.exec(`CREATE TABLE IF NOT EXISTS items (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name VARCAHR(70),
description VARCAHR(150),
photo VARCHAR(150),
price INTEGER
);`);

//seed
db.run("INSERT INTO items (name, description, photo, price) VALUES ('Hoodie', 'Made from the high quality products this hoodie is perfect for everyone!', 'https://m.media-amazon.com/images/I/71dd1bP6QFL._AC_UL320_.jpg' ,500)");
db.run("INSERT INTO items (name, description, photo, price) VALUES ('Track suite', 'Be stylish! This Track suite is perfect for you!','https://assets.reebok.com/images/w_600,f_auto,q_auto/4147e7bbb3684a2fb6ffad4b00f54e45_9366/Training_Essentials_Piping_Track_Suit_Bla_GS9312_01_standard.jpg', 1000)");
db.run("INSERT INTO items (name, description, photo, price) VALUES ('Cup', 'Drink coffee like a pro. With this cup your coffee in the  morning will be much better','https://www.harfieldtableware.co.uk/wp-content/uploads/2019/09/001MBL-8oz-Cup-Med-Blue-scaled.jpg', 100)");
db.run("INSERT INTO items (name, description, photo, price) VALUES ('Pen', 'Write notes or sign contracts. Be creative with this pen','https://m.media-amazon.com/images/I/71LbzzDezeL._AC_SY355_.jpg', 50)");
db.run("INSERT INTO items (name, description, photo, price) VALUES ('Pencil', 'Afraid of errors? Use the pencil and correct your mistakes if needed','https://textbookcentre.com/media/products/2040405000213.jpg', 10)");
db.run("INSERT INTO items (name, description, photo, price) VALUES ('T-shirt', 'During summer you will be stylish and origin - no one will have t-shirt like this.', 'https://imgprd19.hobbylobby.com/2/d2/2d/2d22d4c34e27b131ae4b74b6a6ba9a035b7eabae/700Wx700H-422790-0320.jpg' , 300)");
db.run("INSERT INTO items (name, description, photo, price) VALUES ('Hat', 'Be fun, have fun, put on this hat and get into party mood','https://m.media-amazon.com/images/I/81bBIDU8BVL._AC_UL1500_.jpg', 70)");

db.close();
