import * as skillDb from '../data/skills-db.js'

function index(req, res) {
  skillDb.find({}, function(error, skills){
    res.render('skills/index',{
      skills:skills,
      error: error
    })
  })
}

export {
  index
}