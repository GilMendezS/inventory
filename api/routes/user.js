const router = require('express').Router()
const UserConntroller = require('../controllers/UserController')

router.post('/',UserConntroller.store)
router.get('/',UserConntroller.index)
router.delete('/:id',UserConntroller.delete)
router.put('/:id',UserConntroller.update)



module.exports = router