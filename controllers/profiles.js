import { Profile } from '../models/profile.js'

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render('profiles', {
      profiles,
			title: "All Profiles"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/error')
  })
}

function show(req, res) {
  console.log("SLay")
  Profile.findById(req.params.id)
  .then(profile => {
    const isSelf = profile._id.equals(req.user.profile._id)

    res.render("profiles/show", {
      title: `${profile.name}'s profile`,
      profile,
      isSelf,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/error')
  })
}

export {
  index, 
  show
}