// behan ka rishta na pesh karna isko b copy kar k.

   function trail() {
	   $('#freecccam').modal('show');
   }
   // behan ka rishta na pesh karna isko b copy kar k.
   $('input[name=line_conx]').on('change', function() {
	    myFunction();
   });
   $('input[name=line_username]').on('change', function() {
	    myFunction();
   });
   
function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
// behan ka rishta na pesh karna isko b copy kar k.
  var x = document.getElementById("lineconx").value;
  var un = document.getElementById("username").value;
  
  var fc = x/2;
  var fc = fc.toFixed(0);
  
  if (x < 50) {
	  // behan ka rishta na pesh karna isko b copy kar k.
	  document.getElementById("addvod").innerHTML = "<font color='red'>Error: Mimimum 50 connection can order.</font><br>";
	  document.getElementById("button").disabled = true;
	  exit();
  } else { document.getElementById("button").disabled = false; }
  
  if (un) { /*ok*/ } else { document.getElementById("addvod").innerHTML = "<font color='red'>Error: Please enter valid username.</font><br>"; document.getElementById("button").disabled = true; exit(); }
  
  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
// behan ka rishta na pesh karna isko b copy kar k.
if (x < 200) {
	document.getElementById("addvod").innerHTML = "<font color='red'>Error: For include movies and series you need order upto 200 connections.</font><br>";
	document.getElementById("button").disabled = true;
	exit();
}

	document.getElementById("addvod").innerHTML = "You will receive 2/different Restream lines<br>Line-1: <b><font color='#990000'>"+un+"</font></b> with <b><font color='green'>"+fc+"</font></b> connection. (live channels)<br>Line-2: <b><font color='#990000'>"+un+"-vod</font></b> with <b><font color='green'>"+fc+"</font></b> connection. (movies & series)<br>";
  
  } else {

	document.getElementById("addvod").innerHTML = "You will receive Restream Line: <b><font color='#990000'>"+un+"</font></b> with <b><font color='green'>"+x+"</font></b> connection. (only channels)<br>";
  }
}
// behan ka rishta na pesh karna isko b copy kar k.
