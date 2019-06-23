var url ;
chrome.storage.sync.get(['key'], function (result) {
    url = result.key;
    window.open(url[0], "_self");

    letsFollow();
});

function letsFollow(){
    var follow_ = document.getElementsByTagName('button');

    //console.log(follow_[0].firstChild.data);
    
    try{
        if(follow_[0].firstChild.data==='Following'){
            // alert('inside');
    

            var follows = document.getElementsByTagName('span');
            //console.log(follows.firstChild.data);
            
            for(let i=0;i<follows.length;i++){
                if(follows[i].className==='g47SY '){


                    var str = follows[i].innerText;
                    str = str.replace(/,/g, "");
                    var intVal = parseInt(str);

                    if(intVal<url[1]){
                        console.log('inside');
                        follow_[0].click();
                    }

                   // console.log(follows[i].innerText);
                }
                

            }
           // console.log(follow_[0].firstChild.data);
        }else{
            //console.log(follow_[0].firstChild.data);
            // alert('outside');

            return letsFollow();
            // return setTimeout(letsFollow(),1000);
         }
    }catch(ex){
        console.log(ex);
        return;
    }
   
}


function isEmpty(obj) {
    if(obj==null)
        return false;
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}

