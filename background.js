
chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
chrome.tabs.onUpdated.addListener(function (tabId , info) {
    if (info.status === 'complete') {
      //alert('loaded in back');
    //   var activeTab = tabs[0];
    //   chrome.tabs.sendMessage(activeTab, {message: 'hi'});
    // if(localStorage.getItem('flag')==='true'){
    //     chrome.tabs.executeScript(null, {file: "follow.js"});
    //     localStorage.setItem('flag','false');
    // }
    }});
  });




  var contentTabId;

chrome.runtime.onMessage.addListener(function(msg,sender) {
  if (msg.from == "content") {  //get content scripts tab id
    contentTabId = sender.tab.id;
  }
  if (msg.from == "popup" && contentTabId) {  //got message from popup
    chrome.tabs.sendMessage(contentTabId, {  //send it to content script
      from: "background",
      first: msg.first,
      second: msg.second
    });
  }
});



  // chrome.tabs.query({active: true}, function(tabs){ 
  //   var activeTab = tabs[0];
  //   chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
  //     //console.log(response.farewell);
  //   });
  // });

// // //makeAlert();

//  var urls =[];
// var i =0;

// var pre ;


// chrome.tabs.onUpdated.addListener(function (tabId , info) {
//     if (info.status === 'complete') {
      
//       chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
//         var url = tabs[0].url;
//         //alert('url'+url);
        
//         if(url !==pre && url.includes('www.instagram.com/explore/tags')){
//           alert('matched..');
//           urls = JSON.parse(localStorage.getItem('key'));
//           if(i+1===urls.length){
//             alert('done');
//             return;
//           }
//           chrome.tabs.executeScript(null, {file: "follow.js"});

//           var activeTab = tabs[0];
//           chrome.tabs.sendMessage(activeTab.id, {"message": urls[i]});
//           i++;


//         }

//         pre = url;

//     });
//     }
//   });

// // function grabData(){
// //     chrome.storage.sync.get(['data'], function(result) {

// //         urls = result.key;
// //         alert('Got data ');
    
    
// //         sendData();
    
// //     });
// // }




// // function sendData(){

   

// //     if(i===urls.length){
// //       alert('limit reached');
// //       //clearInterval(interval);
// //       return;
// //     }
  
// //     chrome.tabs.executeScript(null, {file: "follow.js"});
// //     chrome.storage.sync.set({'key':urls[i]},function(){
// //       //data written
// //       i++;
  
      
  
  
// //       setTimeout(sendData,10000);
// //     });
  
// //   }


// // // setInterval(function(){
// // //     alert('done');
// // // },10000)