let cardsCon = document.querySelector(".cards");
let text = (e, t)=>{
  return e.appendChild(document.createTextNode(t))
}
let game = async()=>{
  let data1 = await fetch("https://picsum.photos/v2/list?page=2&limit=10")
  let data = await data1.json()
  console.log(data)
  data.forEach((e, i) => {
    for(let x=0;x<2;x++){
      let card = document.createElement("div")
      let img = document.createElement("img")
      let span = document.createElement('span')
      img.src = data[i].download_url
      card.appendChild(img)
      card.classList.add("card")
      card.dataset.index= (i)
      card.appendChild(span)
      cardsCon.appendChild(card)
    }
  });
  let cards = Array.from(cardsCon.children)
  cards.forEach((e, i)=>{
    let random = Math.floor(Math.random() * cards.length)
    e.style.order=random
    e.addEventListener("click", ()=>{
      let rotated = document.querySelectorAll(".rotate")
      e.classList.add("rotate")
      rotated = document.querySelectorAll(".rotate")
      if(rotated.length===2){
        cardsCon.style.pointerEvents="none"
        if(rotated[0].dataset.index === rotated[1].dataset.index){
          cardsCon.style.pointerEvents="auto"
          rotated.forEach(e=>{
            e.classList.add("checked")
            e.classList.remove("rotate")
          })
        }else{
          setTimeout(()=>{
            rotated.forEach(e=>{
              e.classList.remove("rotate")
            })
            cardsCon.style.pointerEvents="auto"
          },500)
        }
      }
    })
  })
}
game()