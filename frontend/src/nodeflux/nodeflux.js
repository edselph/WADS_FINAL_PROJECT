var axios = require('axios');
var data = JSON.stringify({
  "images": [
   ` data:image/jpeg;base64,/${x}`
  ]
});

var x = [];

var config = {
  method: 'post',
  url: 'https://api.cloud.nodeflux.io/syncv2/analytics/ocr-ktp',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'NODEFLUX-HMAC-SHA256 Credential=ZER7L6I6N587FEL5TF04IP092/20220606/nodeflux.api.v1beta1.ImageAnalytic/StreamImageAnalytic, SignedHeaders=x-nodeflux-timestamp, Signature=c5355e05d494a2b9d9085c9b6f131c511722eb278fd23b589c6ea5f5b716416e', 
    'x-nodeflux-timestamp': '20220606T065530Z'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
