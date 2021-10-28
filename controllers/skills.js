import * as skillDb from '../data/skills-db.js'

function index(req, res) {
  skillDb.find({}, function(error, skills){
    res.render('skills/index',{
      skills:skills,
      error: error,
      time: req.time,
    })
  })
}

function show(req,res) {
  skillDb.findById(req.params.id, function(error, skill){
    res.render('skills/show', {
      skill: skill,
      error: error,
      time: req.time,
    })
  })
}

function newSkill(req, res) {
  res.render('skills/new', {
    time: req.time
  })
}

function create(req,res) {
  skillDb.create(req.body, function(error, skill){
    res.redirect("/skills")
  })
}

export {
  index,
  show,
  newSkill as new,
  create,
}