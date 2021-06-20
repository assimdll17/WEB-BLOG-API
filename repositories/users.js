const { User } = require('../models')

   module.exports = { 

      getAllUsers() {
        return User.findAll()
      },
      
      getUsers(offset = 0, limit = 10) {
          return User.findAll({offset : offset, limit : limit})
       },
       getAdmins() {
        return User.findAll({where: {role: 'admin'}}).catch(error => {
            return {message: 'Erreur : ' + error.message}
        });
       },

      getAuthors() { 
         return User.findAll ({ where : {
                role : 'author'
            }
        })
      },
      getGuests(){
        return User.findAll ({
            where : {
                role : 'guest'
            }
        })
       }, 
      getUser(id) {
        return User.findAll ({
            where : {
                id : 'id'
            }
        })
       },
      getUserByEmail(email) { 
          return User.findOne({
              wher : {
                  email : email
              }
          })
      },
      addUser : async function(userData) { 
          var user = await User.create(userData)
          return user
      },
      updateUser : async function(id, userData) {
          await User.update(userData, {
              where : {
                  id : id
              }
          })
       }, 
      deleteUser : async function(id) {
          return await User.destroy({
              where : {
                  id : id
              }
          })
       },
      
    }

   

