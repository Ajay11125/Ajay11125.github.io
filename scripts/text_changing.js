id=setInterval(change,150);
let width_s=0;
function change(){
    width_s=width_s+1
    document.getElementById("changing").style.width=width_s+"ch"
    if(width_s>20){
            clearInterval(id)
        function inter(){
                id2=setInterval(change_rev,100)
            }
        setTimeout(inter,2000)
        
    }
}
function change_rev(){
    width_s=width_s-1
    document.getElementById("changing").style.width=width_s+"ch"
    if(width_s<=0){
        clearInterval(id2)
        function inter2(){
            id=setInterval(change,100)
        }
        setTimeout(inter2,1000);
    }
}
