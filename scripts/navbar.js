window.addEventListener("scroll",function(){
    let scroll=window.scrollY;
    let bar=document.getElementById("navbar").style
    let bar2=document.getElementById("sidenavbar").style
    if(scroll>0){
        bar.backgroundImage="linear-gradient(27deg,rgb(2 9 43),rgb(60 2 14))";
        bar2.backgroundImage="linear-gradient(27deg,rgb(2 9 43),rgb(60 2 14))";
    }
    else{
        bar.background="transparent";
        bar2.background="transparent";
    }
})

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
 function opentab(){
    window.open(
        "https://drive.google.com/file/d/1Vj5FciVfVo3r3oQfEJEldgxc8DMTJ8BF/view?usp=sharing", "_blank");
 }

