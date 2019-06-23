var url;
var count =0;
chrome.storage.sync.get(['key'], function async(result)  {
    url = result.key;
    window.open(url[0], "_self");

    letsFollow();    
});


// chrome.storage.local.get(['key2'], function(result)  {
//     count = result.key;  
//     console.log('count '+count);
// });

function letsFollow(){
    //console.log('called');
    var follow_ = document.getElementsByTagName('button');

    
    
    try{
        if(follow_[0].firstChild.data  === 'Follow'){
            // alert('inside');

            //console.log('accessible : '+noOfFollows.toString() );

            // chrome.storage.sync.get(['no'], function (result)  {
            //     var val = result.key;
                
            //     console.log(val); 
            // });

            
            //console.log(url[1]);

            console.log('in');

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

            //console.log(val);

            // follows.forEach(el => {
            //     console.log(el);
            // });
    
            //console.log(follows);
           // console.log(follow_[0].firstChild.data);
            
        }else{
            // alert('outside');
            // console.log(follow_[0].firstChild.data);
             return letsFollow();
         }
    }catch(ex){
        console.log(ex);
        return;
    }
   
}