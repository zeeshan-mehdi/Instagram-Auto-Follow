function followTags_() {

    //alert('triggered');

    chrome.storage.sync.get(['key'], function(result) {

        //alert('inside');

        

        var urls = result.key;

        //alert(url);
        // alert(url);

    //     urls.forEach(url => {
    //         window.open(url,'_self');
    //         var follow = document.getElementsByTagName('button');
    //    // if((follow[0].textContent.toLowerCase() !== 'following')){
    //         follow[0].click();
    //         //while (follow[0].textContent.toLowerCase() !== 'following');
            
    //     //}
    //     });
       
        window.open(urls,'_self');
        var follow = document.getElementsByTagName('button');
       // if((follow[0].textContent.toLowerCase() !== 'following')){
            follow[0].click();
       // }

        
        //alert('executed ');


        // for (let i=0; i < url.length; i++) {
        //     window.open(url[i],'_self');
            
           


        //     chrome.tabs.onUpdated.addListener(function (tabId , info) {
            
        //         if (info.status === 'complete') {
        //             var follow = document.getElementsByTagName('button');
        //             follow[0].click();
        //         }
        //       });

        //     // while (follow[0].textContent.toLowerCase() !== 'following');

        //     // window.close(url[i]);
        // }
    });





}
followTags_();

