const List = require('./list');

let names = new List();
names.append("Clathon");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");
names.insert("Lolkin", "Bryan");
names.remove("Clathon");

// names.front();
for (names.front(); names.currentPosition() < names.length(); names.next()) {
	console.log(names.getElement());
}