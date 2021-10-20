const {Team} = require ('../models')

const teamController ={

createTeam (req,res){
    Team.create(req.body)
    .then((dbTeam)=>{
        res.json(dbTeam)
    })
    .catch((err)=>{
        console.log(err)
        res.json(err)
    })
},

updateTeam(req,res){
    Team.findOneAndUpdate(
        {_id: req.params.userId},
        {$set: req,body,},
        {runValidators: true, new:true}
    )
    .then((dbTeam)=>{
        if(!dbTeam){
          return res.json({message:'no team found with this id'})  
        }
        res.json(dbTeam)
    })
    .catch((err)=>{
        console.log(err)
        res.json(err)
    })
},

deleteTeam(req,res){
Team.findOneAndDelete({_id: req.params.userId})
.then((dbTeam)=>{
    if(!dbTeam){
        return res.json({message:'no team found with this id'})
    }
})
.then(()=>{
    res.json({message:'team deleted'})
})
.catch((err)=>{
    console.log(err)
    res.json(err)
})
}
}

module.exports= teamController