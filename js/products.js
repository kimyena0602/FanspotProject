// JSON 데이터
const products = [
    {
        "name": "멍한 인형 늑대",
        "price": "30,000",
        "category": "허광한",
        "info": "최근에 샀는데.. 다른 거 사려고요. 그래서 팔아요. 사용도 별로 안 했고, 깨끗해요!",
        "img": "image-1.png",
        "status": "new",
        "user": "멍멍이팬",
        "linkd": true
    },
    {
        "name": "핫소스 티셔츠",
        "price": "35,000",
        "category": "핫소스",
        "info": "최근에 선물 받았는데 제 취향 아니라서 팔아요. 허락은 받았습니다.",
        "img": "image-5.png",
        "status": "new",
        "user": "티셔츠광",
        "linkd": true
    },
    {
        "name": "핫소스 떡메",
        "price": "3,800",
        "category": "핫소스",
        "info": "부산가서 샀는데 필요 없어서 팔아요.",
        "img": "image-4.png",
        "status": "new",
        "user": "부산덕후",
        "linkd": true
    },
    {
        "name": "핫소스 회색 후드티",
        "price": "37,000",
        "category": "핫소스",
        "info": "진짜 많이 입었는데.. 떠나보내려고 합니다.. 오빠들을,, 슬프지만 싸게 가져가세요....",
        "img": "image-3.png",
        "status": "new",
        "user": "후드티러버"
    },
    {
        "name": "여름날의 우리 굿즈",
        "price": "10,000",
        "category": "허광한",
        "info": "여름날의 우리 포토북입니다. 작년 이맘때 샀고, 궁금한건 채팅 주세요.",
        "img": "image-2.png",
        "status": "new",
        "user": "여름날덕후"
    },
    {
        "name": "상견니 굿즈 대만",
        "price": "28,000",
        "category": "허광한",
        "info": "대만에서 직접 구매했습니다. 포토북이고, 재밌습니다. 너무 많이 읽어 팝니다. 그리고 깨끗해요 ㅎ",
        "img": "image.png",
        "status": "new",
        "user": "대만굿즈러버"
    },
    {
        "name": "핫소스 보틀",
        "price": "6,900",
        "category": "핫소스",
        "info": "한번도 안 쓴 새상품.",
        "img": "image-6.png",
        "status": "basic",
        "user": "핫소스러버"
    },
    {
        "name": "허광한씨 포토북",
        "price": "18,000",
        "category": "허광한",
        "info": "작년에 샀고, 직거래 원합니다. 자세한 내용은 채팅으로 부탁 드립니다.",
        "img": "image-7.png",
        "status": "basic",
        "user": "포토북매니아"
    },
    {
        "name": "핫소스 떡메 6개",
        "price": "3,000",
        "category": "핫소스",
        "info": "저번에 성수에서 한 팝업에서 받았습니다. 채팅 주세요.",
        "img": "image-8.png",
        "status": "basic",
        "user": "팝업덕후"
    },
    {
        "name": "화보집",
        "price": "23,900",
        "category": "허광한",
        "info": "화보집 입니다. 직거래 원하고, 구매 시기는 2개월 전에 쿠팡에서 시켰습니다. 사용감 없고, 깔끔합니다.",
        "img": "image-14.png",
        "status": "basic",
        "user": "화보러버"
    },
    {
        "name": "찐 허광한 경찰증",
        "price": "15,000",
        "category": "허광한",
        "info": "사촌언니가 줬는데 진짜 허광한 경찰증이래요!!",
        "img": "image-9.png",
        "status": "basic",
        "user": "허광한광팬"
    },
    {
        "name": "핫소스 오빠들 결혼사진",
        "price": "35,000",
        "category": "핫소스",
        "info": "진짜 결혼사진 입니다. 직거래 원하고, 구하기 힘들었습니다.",
        "img": "image-10.png",
        "status": "basic",
        "user": "결혼덕후"
    },
    {
        "name": "허광한 종이컵",
        "price": "4,000",
        "category": "허광한",
        "info": "팝업가서 구했어요! 채팅주세요.",
        "img": "image-11.png",
        "status": "basic",
        "user": "나이스가이"
    },
    {
        "name": "서능이 티셔츠",
        "price": "5,000",
        "category": "핫소스",
        "info": "싸게 팝니다. 손절했어요.",
        "img": "image-12.png",
        "status": "basic",
        "user": "왕"
    },
];

// HTML 요소 참조
const productContainer = document.getElementById("product-container");

// 상품 데이터를 동적으로 추가하는 함수
products.forEach(product => {
    // 상품 카드 생성
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    // 이미지 요소 추가
    const productImage = document.createElement("img");
    productImage.src = `/img/${product.img}`;
    productImage.alt = product.name;
    productImage.classList.add("product-image");

    // 이름과 가격 텍스트 추가
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
    productInfo.innerHTML = `
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">${product.price}원</p>
    `;

    // 카드에 요소 추가
    productCard.appendChild(productImage);
    productCard.appendChild(productInfo);

    // 컨테이너에 카드 추가
    productContainer.appendChild(productCard);
});