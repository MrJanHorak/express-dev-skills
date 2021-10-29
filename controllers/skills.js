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

function deleteSkill(req, res) {
  skillDb.findByIdAndDelete(req.params.id, function(error, skill){
    res.redirect('/skills')
  })
}

function edit(req, res) {
  skillDb.findById(req.params.id, function(error, skill){
    res.render('skills/edit', {
      skill: skill,
      error: error,
      time: req.time,
    })
  })
}

function update(req ,res){
  skillDb.findByIdAndUpdate(req.params.id, req.body, function(error, skill) {
      res.redirect('/skills/')
    })
  }

export {
  index,
  show,
  newSkill as new,
  create,
  deleteSkill as delete,
  edit,
  update,
}