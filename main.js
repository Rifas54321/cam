$(document).ready(()=>{
  let video = document.getElementById("vdo")
  let canvas = document.getElementById("canvas")
  async function capture(){
    let config = {
      video:{facingMode:"user"},
      audio:false,
    }
    let cam = await
    navigator.mediaDevices.getUserMedia(config).then((stream)=>{
      video.srcObject=stream
    })
    }
    capture();
    async function canvasImg(video){
      let context = await canvas.getContext("2d")
      let img = await context.drawImage(video,0,0,800,800)
      let res = await canvas.toDataURL()
       alert(res)
       const res_val = res.replace("data:image/png;base64","")
       $("#img1").attr("src",res)
       await post(res)
       
    }
   async function post(val){
      await $.post("http://localhost:3000/about",{img : val})
    }
    $("#btn").on("click",()=>{
      canvasImg(video)
    })
 
  })