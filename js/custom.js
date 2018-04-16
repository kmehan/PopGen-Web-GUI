$('#navbar').Stickyfill();	
var tabcounter=0;
$("li").click(function(){
  // If this isn't already active
  if (!$(this).hasClass("active")) {
    // Remove the class from anything that is active

    // And make this active
    $(this).addClass("active");
  }
});
function showNotice() {
$.Notify({
    caption: 'Warning',
    content: 'Too many uncontrolled variables will result in long synthesis times',
    type: 'warning'
});
	};
function moveSelected(from, to) {
        $('#'+from+' option:selected').remove().appendTo('#'+to); 
    };
function show(elementID) {
                // try to find the requested page and alert if it's not found
                var ele = document.getElementById(elementID);
                if (!ele) {
                    alert("no such element");
                    return;
                }

                // get all pages, loop through them and hide them
                var pages = document.getElementsByClassName('page');
                for(var i = 0; i < pages.length; i++) {
                    pages[i].style.display = 'none';
                }

                // then show the requested page
                ele.style.display = 'block';
				$(this).addClass('active');
            };
function addTab() {    
	showNotice();
	tabcounter = tabcounter + 1;	
    var txt3 = document.createElement("div");    // Create with DOM	 
	var txt4 = document.createElement("br");    // Create with DOM	 
	var heading1 = '<div class="cell size3" style="text-align: center"> <h4>';
	var heading2 = 'Tabulation&nbsp';
	var heading3 = '</h4> </div>';
	heading = heading1 + heading2 + tabcounter + heading3;
    var tabval = heading + '<div class="cell size3"><p>Select First Variable</p><div class="input-control select"><select><option>hhld</option><option>person</option><option>age</option></select></div></div><div class="cell size3"><p>Select Second Variable</p><div class="input-control select"><select><option>hhld</option><option>person</option><option>age</option></select></div></div><div class="cell size3"><div class="input-control modern text"><input type="text"> <span class="label">File Name </span> <span class="informer">e.g., hhld_age </span> <span class="placeholder">File Name</span> </div></div>';
    txt3.innerHTML = tabval;
	var brid = "br" + tabcounter;
	var tabid = "tab" + tabcounter;
	$("#tab-add").after(txt4);
	$("#tab-add").after(txt3);          // Insert new elements after <img>
	$(txt3).prop('id', tabid);
	$(txt4).prop('id', brid);
	$(txt3).prop('class','row cells2');	
	$(txt3).prop('style','background-color:#60A917; border: 2px solid white; margin-bottom: 5px; color: #FFF;');	
};
function removeTab() {      
	var brid = "#br" + tabcounter;
	var tabid = "tab" + tabcounter;
	var elName = "#" + tabid;
    $(elName).remove();	
	$(brid).remove();	
	tabcounter = tabcounter -1;
};
$('#plabel').submit(function() {
  var post_data = $('#plabel').serialize();
  $.post('function/plabel.php', post_data, function(data) {
    $('#notification').show();
	
  });
  window.open('http://localhost/popgen/function/configuration.yaml');
});