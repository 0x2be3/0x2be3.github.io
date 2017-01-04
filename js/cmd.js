var cmd_list = [
    {"cmd_item":[":help:", ":h:", "help", "Print this help menu."]},
    {"cmd_item":[":blog:", ":b:", "blog", "<span class='okblue'>* not installed yet *</span>"]},
    {"cmd_item":[":twitter:", ":t:", "twitter", "Twitter."]},
    {"cmd_item":[":repos:", ":r:", "repos", "Available github repos."]},
    {"cmd_item":[":links:", ":l:", "links", "<span class='okblue'>* not installed yet *</span>"]},
    {"cmd_item":[":sans2k16:", ":s:", "sans2k16", "Sans Holiday Hack submission"]},
    {"cmd_item":[":home:", ":cd #:", "home", "Go home."]}
];

var printHelp = function(){
  var help_menu = "<br/><fieldset><legend>Available commands:</legend>";
  for(var a=0;a<cmd_list.length;a++){
    help_menu+="<span class='error'>"+cmd_list[a].cmd_item[2]+"</span><br/>"+cmd_list[a].cmd_item[3]+"<br/><br/>";
  }
  help_menu+="</fieldset>";
  stdout(help_menu)
};

var repos = function(){
  document.location.href="https://github.com/0x2be3?tab=repositories"
};

var blog = function(){
  document.location.href="https://diasp.org/people/b0a82af089e101343dd8782bcb452bd5"
};

var twitter = function(){
  document.location.href="https://twitter.com/0x2be3"
};

var links = function(){};

var home = function(){
  document.location.href="https://0x2be3.github.io/";
};

var sans2k16 = function(){
  document.location.href="https://0x2be3.github.io/sansHHx/2016/submission/";
};

var CMD=function(v){
  if (v=="help") printHelp();
  else if (v=="blog") blog();
  else if (v=="repos") repos();
  else if (v=="links") links();
  else if (v=="home") home();
  else if (v=="twitter") twitter();
  else if (v=="sans2k16") sans2k16();
  else consoleAlert("<br/><span class='error'>-bash: command not found!</span>");
};
