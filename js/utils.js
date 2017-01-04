var MainViewModel;
function MainViewModel(){
  var self=this;
  self.banner = "banner";
  self.consoleHead = "root@0x2be3:~$ ";
  self.profileImg = "https://avatars1.githubusercontent.com/u/8453116?v=3&s=460";
  self.consoleResponse = ko.observable("");
};

var stdout=function(msg){
  var consoleResponse=document.getElementById("console-response");
   consoleResponse.innerHTML=msg;
};

var consoleAlert=function(msg){
  var consoleResponse=document.getElementById("console-alert");
  consoleResponse.innerHTML=msg;
};

var clearConsoleAlert=function(msg){
  var consoleResponse=document.getElementById("console-alert");
  consoleResponse.innerHTML="";
};

var clearInput=function(){
  var consoleInput = document.getElementById("console_input");
  consoleInput.value=""
  consoleInput.focus();
};

var handleInput=function(){
  clearConsoleAlert();
  var cmd = document.getElementById("console_input");
  var v="";
  for(var a=0;a<cmd_list.length;a++){
    for(var b=0;b<cmd_list[a].cmd_item.length;b++){
      if(cmd_list[a].cmd_item[b]==":"+cmd.value+":"){
        v=cmd_list[a].cmd_item[2]
        break;
      }
    }
  }
  CMD(v);
  clearInput()
};

var exec_command=function(e){
  if (e.keyCode == 13) handleInput();
  return false;
};

function loadPage(src_file) {
    var ajaxRequest;
    try{
       ajaxRequest = new XMLHttpRequest();
     }catch (e){
       try{
          ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
       }catch (e) {
          try{
              ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
          }catch (e){
              return false;
          }
       }
     }
     ajaxRequest.onreadystatechange = function(){
       if(ajaxRequest.readyState == 4){
          var ajaxDisplay = document.getElementById('BANNER');
          ajaxDisplay.innerHTML = ajaxRequest.responseText;
       }
     }
     ajaxRequest.open("GET", "./"+src_file+".html", true);
     ajaxRequest.send(null);
}
