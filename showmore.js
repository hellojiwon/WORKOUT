
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


