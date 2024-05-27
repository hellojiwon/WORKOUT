
// show more
const listPic = document.querySelector('.list-pic');
const btn = document.getElementById('imgbtn');
  
      let pageToPatch = 1;

      btn.addEventListener('click', ()=>{
        fetchImages(pageToPatch += 1);
        });
      
      async function fetchImages(page){
          // console.log(page);
          try{
              const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=3`);
              if(!response.ok){
                  throw new Error('네트워크 응답에 문제가 있습니다.');
              }
              const datas = await response.json();
              // console.log(datas);
              listPic.insertAdjacentHTML('beforeend','<div></div>')
        
              makeImageList(datas);
          }catch(error){
              console.error(error);
          }
      }
      function makeImageList(datas){
          datas.forEach((data)=>{
            listPic.lastElementChild.insertAdjacentHTML('beforeend', `<img src="${data.download_url}" alt="">`);
            });
      }
    //   initial
      btn.click();
      btn.click();


var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
                mapOption = { 
                    center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                    level: 3 // 지도의 확대 레벨
            };
            // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
            var map = new kakao.maps.Map(mapContainer, mapOption); 
            var markerPosition  = new kakao.maps.LatLng(33.450701, 126.570667); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

marker.setMap(map);

    //   modal
      document.getElementById("subbtn").addEventListener("click", function(event) {
          event.preventDefault(event); 
          document.getElementById("mod").style.display = "block";
      });
  
      document.getElementById("modalbtn").addEventListener("click", function(event) {
          // event.preventDefault(); 
          document.getElementById("mod").style.display = "none";
      });
