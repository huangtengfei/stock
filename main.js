function httpRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            callback(xhr.responseText);
        }
    }
    xhr.send();
}

function showResult(result) {

	var arr = result.split(';').slice(0, 3);
	var html = '';
	arr.forEach(function(item){
		var itemArr = item.split('=')[1].split('"')[1].split(','),
			name = itemArr[0];
			curr = Number(itemArr[3]).toFixed(2);
			yest = Number(itemArr[2]).toFixed(2);
			range = (((curr - yest) / yest) * 100).toFixed(2);
		html += name + ': ' + curr + ' ( ' + range + ' )<br><br>';
	})

	document.getElementById('result').innerHTML = html;
}

var url = 'http://hq.sinajs.cn/list=sh000001,sz000511,sz002689';
httpRequest(url, showResult);

