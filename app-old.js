const http = require('http')

http.createServer( (req, res) => {

    res.write( 'Hello world!' )
    res.end()
    
})
.listen( 8080 )

console.log('Listening to port 8080')