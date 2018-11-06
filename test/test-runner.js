var exec = require('child_process').exec

// Helper function to execute the cli in tests and capture the output
module.exports = function (parameters, onComplete) {
  console.log('executing')
  exec(`./bin/cli.js ${parameters}`, (error, stdout, stderr) => {
    console.log('handling result')
    if (error) {
      console.log('resulted in error')
      onComplete({ code: error.code, output: stdout, error: stderr })
    } else {
      console.log('resulted successfully')
      onComplete({ code: 0, output: stdout, error: null })
    }
  })
}
