angular.module('chatroom')

.controller('mainCtrl', function($scope, messageService){

$scope.getMessages = function(){
  return messageService.getMessages().then(function(result){
    $scope.messages = result.data.reverse();
  })
};


$scope.postMessage = function(message){
  return messageService.postMessage(message)
};




  //The getMessages function will call the getMessages method on the messageService object.
  //You'll then save the result of that request to your controller's $scope as messages ($scope.messages)




  //The postMessage function will take whatever the user typed in (hint: look at the html and see what ng-model correlates to on the input box),
  //pass that text to the postMessage method on the messageService object which will
  //then post it to the backend.



  //uncomment this code when your getMessages function is finished
  //This goes and gets new data every second, which mimicking a chat room experience.
   setInterval(function(){
    $scope.getMessages();

  }, 1500)

});

// getMessages.then(function(message){
//   var messages = message.data;
//   $scope.messages = message.data;
// });

// var postMessage =  $http.get("https://practiceapi.devmountain.com/api/chats")

//  postMessage.then(function(message){
//   var messages = message.data;
//   $scope.messages = message.data;

//  }); 