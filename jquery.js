

$(document).ready(function(){


function makeHttpObject() {
  try {return new XMLHttpRequest();}
  catch (error) {}
  try {return new ActiveXObject("Msxml2.XMLHTTP");}
  catch (error) {}
  try {return new ActiveXObject("Microsoft.XMLHTTP");}
  catch (error) {}

  throw new Error("Could not create HTTP request object.");
}

console.log(typeof(makeHttpObject()));


var xhr = makeHttpObject();

	//var xhr = new XMLHttpRequest();

    xhr.open("GET", "prova_jquery/JS");


    //xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");

    var text = {"command":"PUSH"};
    xhr.send(text);
	
console.log(getSubDir());
var filenames=[], foldernames=[];

$.get("file:///prova_jquery/JS",function(response){
    document.write(response);
    getNames();
});

function getNames()
{
    var files = document.querySelectorAll("a.icon.file");
    var folders = document.querySelectorAll("a.icon.dir");
    files.forEach(function(item){filenames.push(item.textContent)})
    folders.forEach(function(item){foldernames.push(item.textContent.slice(0,-1))})
    console.log(filenames);
    console.log(foldernames);
}
	/*var fileNames = new Array();
    $.ajax({
      url: "./JS/",
      success: function(data){
         $(data).find("td > a").each(function(){
            if(openFile($(this).attr("href"))){
                fileNames.push($(this).attr("href"));
            }           
         });
      }
    }); 
    console.log(fileNames);
    /*function openFile(file) {
        var extension = file.substr( (file.lastIndexOf('.') +1) );
        switch(extension) {
            case 'jpg':
            case 'png':
            case 'gif':   // the alert ended with pdf instead of gif.
            case 'zip':
            case 'rar':
            case 'pdf':
            case 'php':
            case 'doc':
            case 'docx':
            case 'xls':
            case 'xlsx':
                return true;
                break;
            default:
                return false;
        }
    };*/
});



function getSubDir()
{
	var loc = window.location.pathname;
	console.log(loc);
	var dir = loc.substring(0, loc.lastIndexOf('/'));
	dir+="/JS";

	var _loc = dir.split("/");

	var dim=_loc.length;
//document.getElementById("programmi").innerHTML += dim + " + ";

	var _dir = _loc.slice(dim - 2, dim);

	var cartella=_dir[0]+"/"+_dir[1];

	//document.getElementById("programmi").innerHTML = "_dir: "+cartella;
	return cartella;
}

function listaProgetti(id)
{
	var _id="#"+id;
	$(_id).append("<br><ul>");
	for(var i=0; i<getSubDir().length; i++)
	{
		$(_id).append( "<li><a href="+getSubDir()+">"+getSubDir()+"</a></li>");
	}
	$(_id).append("</ul>");
}

function dirname(path) {
     return path.match(/.*\//);
}
function basename(path) {
     return path.replace(/.*\//, '');
}





/*function listFolders() {
    var start = new Date();
    var topFolder = "JS"//DocsList.getFolderById(TOP) ; // start point
    var foldersArray = [];
    foldersArray = getFolders(getSubDir(),topFolder,foldersArray);
    // do what you want with array of folder data
    console.log(foldersArray);
}

function getFolders(path, container,arrayin) {
    console.log(arrayin)

    var folders = container.getFolders(0, 300);
     var folderCount = folders.length;
         var fileCount = container.getFiles().length;
             arrayin.push([container.getId(),path,fileCount,folderCount]);
                 console.log(path + " #files= "+fileCount+ " #folders = "+folderCount);
    for (var i=0;i<folders.length;i++) 
    {
	    var thisFolder = folders[i].getName();
	    var thisPath = path+"/"+thisFolder;
	    getFolders(thisPath,folders[i],arrayin)
    }
    console.log("ababaaniavfa");
    console.log(arrayin);
return arrayin;
}
*/


function lello()
{
	/* indicate your folder */
var folder = "D:\\Temp";

var dir = imns.Cc["@mozilla.org/file/local;1"].createInstance(imns.Ci.nsILocalFile);
dir.initWithPath(folder);
var subFolders = [];
var subFolderEnum = dir.directoryEntries;
while (subFolderEnum.hasMoreElements()) {
    var curSub = subFolderEnum.getNext().QueryInterface(imns.Ci.nsILocalFile);
    if (curSub.isDirectory()) {
        // subFolders.push(curSub.path);    // for the full path
        var subFolder = curSub.path;
        subFolder = subFolder.substr(subFolder.lastIndexOf("\\") + 1);
        subFolders.push(subFolder);
    }

}

/* view the result */
alert(subFolders.join("\n"));
}





























