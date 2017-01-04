var init=function(){
  loadPage("banners/index")
  ko.applyBindings(MainViewModel,document.getElementById("MAIN"));
  var consoleInput = document.getElementById("console_input");
  consoleInput.focus();
  consoleInput.addEventListener("keypress", exec_command);
};
document.load=init();
