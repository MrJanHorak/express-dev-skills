const skills = [
  {devSkill: 'writing and testing code', able: "at junior level", _id: 10001},
  {devSkill: 'collaborating with other developers', able: "love to", _id: 10002},
  {devSkill: 'Mathematical aptitude', able: 'better every day', _id: 10003},
  {devSkill: 'using development tools', able: 'better every day', _id: 10004},
  {devSkill: 'Problem-solving skills', able: 'try to shapren them all the time', _id: 10005},
  {devSkill: 'Teamwork skills', able: 'ask the others', _id: 10006},
  {devSkill: 'Self-development skills to keep up to date with fast-changing trends', able: 'think so', _id: 10007},
  {devSkill: 'Accuracy and attention to detail', able: 'think so', _id: 100010},
  {devSkill: 'Programming languages ', able: 'Python, JavaScript, Java', _id: 100011},
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the skills
    if (Object.keys(conditions).length === 0) return callback(null, skills)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

const findById = (id, callback) =>{
  try {
    const skill = skills.find(skill => skill._id === parseInt(id))
    if (!skill) throw new Error ('No skill was found')
    return callback(null, skill)
  } catch (error) {
    console.log(error)
    return callback(error, null)
  }
}

function create(skill, callback) {
  skill._id = Date.now() % 1000000
  skill.able = "Nope not yet, cause its a new skill"
  skills.push(skill)
  return callback(null, skill)
}

function findByIdAndDelete(id, callback){
  try {
    const idx = skills.findIndex(skill => skill._id === parseInt(id))
    const deletedSkill = skills.splice(idx, 1)
    if (!deletedSkill.length) throw new Error ('No skill was deleted')
    return callback(null, deletedSkill[0])
  } catch(error) {
    return callback(error,null)
  }
}

function findByIdAndUpdate(id, skill, callback) {
  try {
    const idx = skills.findIndex(skill => skill._id === parseInt(id))
    if ( idx === -1) throw new Error ('No skill was edited')
    skills[idx].devSkill = skill.devSkill
    skills[idx].able = skill.able
    return callback(null, skills[idx])
  } catch(error) {
    return callback(error,null)
  }
}

export { 
	find,
  findById,
  create,
  findByIdAndDelete,
  findByIdAndUpdate,
}