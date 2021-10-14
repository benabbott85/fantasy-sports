
const {User} = require ('../models')


const userController= {
    getUsers(req,res){
User.find()
.select('-__v')
.then((userData) =>{
    res.json(userData)
})
.catch((err)=>{
    console.log(err)
    res.json(err)
})
    },
    getOneUser(req,res){
        User.findOne({_id:re.params.userId})
        .select('-__v')
        .populate('')
        .then((dbUser)=>{
            if(!dbUser){
                return res.status(404).json({message:'no user found'})
            
            }
            res.json(dbUser)
        })
        .catch((err)=>{
            console.log(err)
            res.json(err)
        })
    },

    createUser(req,res){
        User.create(req.body)
        .then((dbUser)=>{
            res.json(dbUser)
        })
        .catch((err)=>{
            console.log(err)
            res.json(err)
        })
    },

  
}

module.exports = userController