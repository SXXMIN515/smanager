/**
 * index.js
 */
let json = "[{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0019/A00000019391913ko.jpg?l=ko\",\"prdName\":\"[화해1위] 비건이펙트 클린 앤 글로우 청보리 LHA 젤 클렌저 205ml 기획(+토너패드 12ml 4EA 증정)\",\"prodCode\":\"A000000193919\",\"prodPrice\":\"22,000\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0020/A00000020726704ko.jpg?l=ko\",\"prdName\":\"[NEW] 메이크프렘 세이프 미 아미노 리프레시 클렌징폼 150ml\",\"prodCode\":\"A000000207267\",\"prodPrice\":\"12,800\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018747907ko.jpg?l=ko\",\"prdName\":\"비플레인 녹두 약산성 클렌징폼 160ml + 40ml 기획\",\"prodCode\":\"A000000187479\",\"prodPrice\":\"18,600\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0020/A00000020701702ko.jpg?l=ko\",\"prdName\":\"[7월 올영픽]마녀공장X미니언즈 퓨어&amp;딥 클렌징폼 120ml 1+1 기획 (+쉐이커 키링)\",\"prodCode\":\"A000000207017\",\"prodPrice\":\"11,400\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0020/A00000020777004ko.jpg?l=ko\",\"prdName\":\"[1+1/모공세정]비플레인 녹두 약산성 클렌징폼 더블 기획 조구만 에디션(160ml+160ml)\",\"prodCode\":\"A000000207770\",\"prodPrice\":\"26,000\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0017/A00000017591514ko.jpg?l=ko\",\"prdName\":\"[단독기획] 토리든 다이브인 저분자 히알루론산 클렌징 폼 150ml 기획(+30ml 추가 증정)\",\"prodCode\":\"A000000175915\",\"prodPrice\":\"10,500\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0020/A00000020736514ko.jpg?l=ko\",\"prdName\":\"[증정이벤트] 토르홉 카모스 블랙 소금거품 클렌저 130g\",\"prodCode\":\"A000000207365\",\"prodPrice\":\"14,400\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018459808ko.jpg?l=ko\",\"prdName\":\"[1+1기획]식물나라 제주 탄산수 모공 딥 클렌징폼 150mL 1+1기획\",\"prodCode\":\"A000000184598\",\"prodPrice\":\"10,800\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0011/A00000011367033ko.jpg?l=ko\",\"prdName\":\"[단독기획]메이크프렘 세이프 미 릴리프 모이스처 클렌징폼150ml 1+1기획\",\"prodCode\":\"A000000113670\",\"prodPrice\":\"16,000\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0020/A00000020692903ko.jpg?l=ko\",\"prdName\":\"[7월 올영픽][리뷰이벤트] 메디필X민들레마음 레드락토 콜라겐 클리어 폼 클렌저 2.0 (+그린시카폼 15ml)\",\"prodCode\":\"A000000206929\",\"prodPrice\":\"12,540\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0020/A00000020401408ko.jpg?l=ko\",\"prdName\":\"한율 어린쑥 클렌징 피지흡착 쑥떡팩폼\",\"prodCode\":\"A000000204014\",\"prodPrice\":\"21,000\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018230305ko.jpg?l=ko\",\"prdName\":\"[츄PICK] 센카 퍼펙트 휩 페이셜 워시 120g\",\"prodCode\":\"A000000182303\",\"prodPrice\":\"7,800\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018230706ko.jpg?l=ko\",\"prdName\":\"[츄PICK]센카 퍼펙트 휩 스피디 150mL 더블기획 (150ml+150ml)\",\"prodCode\":\"A000000182307\",\"prodPrice\":\"19,700\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018510002ko.jpg?l=ko\",\"prdName\":\"[더블기획] 브링그린 티트리시카트러블클렌징폼 200mL더블기획_NEW\",\"prodCode\":\"A000000185100\",\"prodPrice\":\"13,900\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0020/A00000020712606ko.jpg?l=ko\",\"prdName\":\"[블랙헤드 모공세정 / 떡솝] 아렌시아 프레시 그린 클렌저 120g\",\"prodCode\":\"A000000207126\",\"prodPrice\":\"23,000\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018684324ko.jpg?l=ko\",\"prdName\":\"[화해1위/여행용증정]일리윤 세라마이드 더마6.0 클렌징워터 폼 기획세트\",\"prodCode\":\"A000000186843\",\"prodPrice\":\"16,800\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0016/A00000016869908ko.jpg?l=ko\",\"prdName\":\"스트라이덱스 약알칼리성 바하 폼클렌저 기획 (150ml+15ml)\",\"prodCode\":\"A000000168699\",\"prodPrice\":\"6,900\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0016/A00000016221218ko.jpg?l=ko\",\"prdName\":\"[증량]닥터지 약산성 레드 블레미쉬 클리어 수딩 폼 더블기획 (150ml+150ml)\",\"prodCode\":\"A000000162212\",\"prodPrice\":\"20,000\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0014/A00000014811223ko.jpg?l=ko\",\"prdName\":\"아벤느 클리낭스 클렌징 젤 400ml *피지잡는 *약산성클렌저\",\"prodCode\":\"A000000148112\",\"prodPrice\":\"19,900\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0017/A00000017705105ko.jpg?l=ko\",\"prdName\":\"[7월 올영픽] 아크네스 클리어&amp;화이트 포밍워시 1+1 기획\",\"prodCode\":\"A000000177051\",\"prodPrice\":\"15,600\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0016/A00000016575106ko.jpg?l=ko\",\"prdName\":\"[단독기획] 넘버즈인 2번 딥클린 생크림 클렌징폼 더블 기획 (120ml+120ml)\",\"prodCode\":\"A000000165751\",\"prodPrice\":\"9,900\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0020/A00000020516103ko.jpg?l=ko\",\"prdName\":\"[NEW] 브링그린 뱀부차콜모공정화클렌징폼200mL더블기획(+세안밴드증정)\",\"prodCode\":\"A000000205161\",\"prodPrice\":\"13,900\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0014/A00000014840812ko.jpg?l=ko\",\"prdName\":\"[7월 올영픽/약산성저자극] 아비브 아크네 폼 클렌저 어성초 폼 대용량 250ml\",\"prodCode\":\"A000000148408\",\"prodPrice\":\"15,900\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0016/A00000016737216ko.jpg?l=ko\",\"prdName\":\"[7월 올영픽] 아크네스 포밍워시 200ml 1+1 기획\",\"prodCode\":\"A000000167372\",\"prodPrice\":\"15,600\"}]";
let url = "imageDownload.do";
let optionObj = {
	method: 'post',
	headers: {
		'Content-Type': 'application/json' // application/x-www-form-urlencoded
	},
	body: json
}

document.querySelector('#uploadBtn').onclick = function(e) {
	fetch(url, optionObj) // promise객체. then(), catch()
		.then(function(result) {
			console.log(result); // Response객체.
			return result.json(); // json문자열 형태로 반환.
		})
		.then(function(result) {
			console.log(result);
		})
		.catch(function(err) {
			console.error(err);
		})
}

document.querySelector('select.selectCenter').addEventListener('change', selCenterFunc);
function selCenterFunc(e) {
	console.log(document.querySelector('select.selectCenter'));
	
}

// 접속센터 정보.
let centerAry = [];
console.log('1', centerAry);
url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=xzlWrFW8HtYCrxszOvDb856UiSMZLs454QrDsJLSr0VpQLUO2639Qis99zXKwmTsmmZBALY0TDhNlgofyOujZQ%3D%3D';

console.log('3', centerAry);

let arrayFunc = result => {
	console.log(result);
	centerAry = result.data; // [] 284건.
	console.log('2', centerAry); // 2번이 제일 마지막으로 나옴.

	// forEach, map, filter, reduce.
	let newAry = centerAry.filter(function(center, idx, ary) {
		return center.sido == '대구광역시';
		//let newAry = centerAry.filter(center => center.sido == '대구광역시');
	});
	console.log(newAry);
	let field = ['id', 'centerName', 'address', 'phoneNumber']
	newAry.forEach(center => {
		let tr = document.createElement('tr');
		tr.addEventListener('click', function(e) {
			location.href = 'map.jsp?lat=' + center.lat + '&lng=' + center.lng;

		});

		for (let prop of field) {
			let td = document.createElement('td');
			td.innerHTML = center[prop];
			tr.append(td);
		}
		document.querySelector('tbody').append(tr);
	});
} // end of arrayFunc.


fetch(url) // ajax. 비동기방식 처리.
	.then(result => result.json())
	.then(arrayFunc)
	.catch(err => console.error('에러 =>', err));