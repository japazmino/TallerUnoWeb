/**
 * http://usejsdoc.org/
 */
var users = [
	{"name":"David", "type":"produuctin de tipo producto","description":"aqui irá una breve descripcion sobre todo lo que sucede"},
    {"name":"Plebiscito 2015", "type":"desconocido","description":"aqui irá una breve descripcion sobre todo lo que sucede"},

    {"name":"titulin de algo", "type":"conocido","description":"aqui irá una breve desasdcripcion sobre todo lo que sucede"},

    {"name":"Soñador", "type":"no importa, igual lo vas a pagar","description":"aqui irá una breasdasdfve descripcion sobre todo lo que sucede"},
    {"name":"David", "type":"este si da igual","description":"aqui irá una breve descripsadasdfasdfcion sobre todo lo que sucede"},



];

exports.getUser = function(index){
	return users[index];
}

exports.getAll = function(){
	return users;
}

exports.create = function(name, email){
	/* TODO We should validate the params*/
	var user = {"name":name, "email":email};
	users.push(user);
}

exports.update = function(index, name, email){
	// first verify that the user with id
	var user = this.getUser(index);
	if (user == null || user == undefined ){
		return false;
	}
	/* TODO We should validate the params*/
	user.name = name;
	user.email = email;
}

exports.deleteALL = function(){
	users = [];
}

exports.deleteUser = function(index){
	users.splice(index, 1);
}