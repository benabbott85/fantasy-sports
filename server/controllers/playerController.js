const {Player} = require ('../models')

const playerController={

addPlayer(req,res){
    Player.findOneAndUpdate({_id: req.params.userId}, {$addToSet:{players: req.params.playerId}})
    .then((dbPlayer)=>{
        if(!dbPlayer){
            return res.status(404).json({message:'player not found'})
        }
        res.json(dbPlayer)
    })
    .catch((err)=>{
        console.log(err)
        res.json(err)
    })
},

removePlayer(req,res){
    Player.findOneAndUpdate({_id: req.params.userId}, {$pull:{players: req.params.playerId}}, {new:true})
    .then((dbPlayer)=>{
        if(!dbPlayer){
            return res.status(404).json({message: 'no player found'})
        }
        res.json(dbPlayer)
    })
    .catch((err)=>{
        console.log(err)
        res.json(err)
    })
}


}


module.exports=playerController