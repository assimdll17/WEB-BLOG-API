var express = require('express');
var router = express.Router();
const usersRepo = require('../repositories/users')

module.exports = function(router){
	
		router.get('/',async function(req, res, next){
			user = await usersRepo.getAllUsers();
			res.send(user)
		}),

		router.get('/admins', async function (req, res, next) {
			res.send(await usersRepo.getAdmins())
		 }),
		 
		 router.get('/guests', async function (req, res, next) {
			res.send(await usersRepo.getGuests())
		 }),
		 
		 router.get('/authors', async function (req, res, next) {
			res.send(await usersRepo.getAuthors())
		 }),
		 
		 router.get('/:id', async function (req, res, next) {
			
			res.send(await usersRepo.getUser(id));
			
		 }),

		router.post('/',async function(req, res, next){
			console.log(req.body);
			var createdUser = await usersRepo.addUser(req.body);
			res.send('User added');
		}),
		
        router.put('/:id',async function (req, res, next) {
	           var updateUser = await usersRepo.updateUser(req.params.id, req.body);
                res.send('User updated');
		}),

		router.delete('/:id', async function (req, res, next) {
				var id = req.params.id;
				var deleteUser = await usersRepo.deleteUser(id);
				res.send('User deleted');
				 });
}