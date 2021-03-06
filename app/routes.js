const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.post('/juggling-balls-answer', function (req, res) {
  // Make a variable and give it the value from 'juggling-balls'
  var jugglingBalls = req.session.data['juggling-balls']
  // Check whether the variable matches the condition
  if (jugglingBalls == "3 or more") {
    // Send user to next page
    res.redirect('/juggling-trick')
  }
  else if (jugglingBalls == "1 or 2") {
    // Send user to ineligible page
    res.redirect('/one-or-two-balls')
  }
  else {
    // Send user to ineligible page
    res.redirect('/ineligible')
  }
})

module.exports = router
