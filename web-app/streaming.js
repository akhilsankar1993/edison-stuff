./mjpg_streamer -i "./input_uvc.so -d /dev/video0 -r 640x480 -f 15" -o "./output_http.so p 9000 -w ./www"

var unirest = require('unirest');
var Request = unirest.get('10.0.0.18:8080').asJson()
