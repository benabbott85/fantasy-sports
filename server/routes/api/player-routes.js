const router = require('express').Router()

const {addPlayer, removePlayer} = ('../../controllers/playerController')


router.route('/').post(addPlayer)

router.route('/:userId/players/:playerId').delete(removePlayer)


module.exports= router