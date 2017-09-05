// import {MD5} from '../utils/md5.js'
// // import axios from 'axios'
// const storage = weex.requireModule('storage')
// const modal = weex.requireModule('modal')

// const stream = weex.requireModule('stream')
// const baseURL = 'http://m.iLikezu.cn'
// var key=''
const stream = weex.requireModule('stream')
export function fetch (url,data,method) { 
  console.log('  2222222222222 ')
  // let param= getFinalParams(data)
  // console.log(path + '  param -----> '+param)
	// var url = `${baseURL}${path}?${param}`

	// 把 url 分成两部分编码，修改 搜索时中文 ios 端 请求异常的问题
	// var arr=url.split('api_u_key')

	// if (arr[1] === null || arr[1] === undefined || arr[1] === '') { 
	// 	url = encodeURI(arr[0])
  // }else{
	// 	url = encodeURI(arr[0])+'api_u_key'+arr[1]		
	// } 
	// console.error('url= '+url)
  return new Promise( (resolve, reject) => {
    // axios.post(`${baseURL}${path}`,param)
    stream.fetch( {
      method: method,
      url: url,
			type: 'json',	
			headers :{"Authorization":"APPCODE 026b596672f54853a89d1beca111fc5a"},
      body:''
    }, (response) => {
      if (response.status == 200) {
				// console.error('data--->'+JSON.stringify(response.data))
        resolve(response.data)
      }
      else {
				var data = {isSuccess:false}
        resolve(data)
      }
    },()=>{})
  })
}

// export function fetchIdsByType (type,data,method) {
//   // console.log('1111111111111') 
// 	return fetch(type,data,method)
// }

// export function getFinalParams (values) {
// 	var currentDate = new Date().getTime();
// 	var randomTemp = getRanChar(6);
// 	values.t = currentDate;
// 	values.s = randomTemp;

// 	if(global.key  && typeof(global.key ) != "undefined" &&global.key !=''){
// 		values.api_u_key = global.key 
// 	}

// 	var api_u_key_temp = "";
// 	if(values.api_u_key && values.api_u_key.length > 10){
// 		api_u_key_temp = values.api_u_key;
// 		delete values.api_u_key;
// 	}
// 			// var stream = weex.requireModule('stream')
// 	var md5key = "testapiprikey"
// 			//针对api_u_key做特殊处理，让其不参与秘钥计算 end
// 	var hash = MD5(md5key+getSortString(values));
// 	values.check = hash;
// 			//针对api_u_key做特殊处理，让其不参与秘钥计算 start
// 	if(api_u_key_temp && api_u_key_temp.length > 10){
// 		values.api_u_key = api_u_key_temp;
// 	}
// 			//针对api_u_key做特殊处理，让其不参与秘钥计算 end
// 	var valuesstr
// 	for(var n in values){
// 		if(valuesstr){
// 			if(n === (values.length-1)){
// 				valuesstr = valuesstr+n+'='+ values[n]
// 			}else{
// 				valuesstr = valuesstr+n+'='+ values[n]+'&'			
// 			}
// 		}else{
// 			valuesstr = n+'='+ values[n]+'&'
// 		}
// 					// console.log('values.length-------->'+ valuesstr.length +'-------->')
// 					// console.log('n  arr-------->'+ values[n] +'-------->')
// 	}
// 	valuesstr = valuesstr.substring(0,valuesstr.length-1)
// 	// console.log('valuesstr----'+ valuesstr +'-----')			
// 	// console.log('values----'+JSON.stringify(values))		
// 	return valuesstr;
// }

// export function getRanChar (n) {
// 	var chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// 	var res = "";
// 	for(var i = 0; i < n ; i ++) {
// 		var id = Math.ceil(Math.random()*35);
// 		res += chars[id];
// 	}
// 	return res;
// }    

// export function getSortString (values) {
// 	var i,sort={},checkString="",arr = new Array();
// 	for(var n in values){
// 		arr.push(n);
// 	}
// 	arr = arr.sort();
// 	for(var n in arr){
// 		checkString+="&"+arr[n]+"="+values[arr[n]];
// 	}
// 	return checkString;
// }
