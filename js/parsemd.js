
// <!-- showdown convert markdown -->
// <!-- https://github.com/showdownjs/showdown -->
// <script type="text/javascript" src='https://cdn.rawgit.com/showdownjs/showdown/1.1.0/dist/showdown.min.js'></script>

show_md_file = function(path){

    $.ajax({
        url:path,
        async:false,
        success: function(mdText){
            var converter = new showdown.Converter();
            html = converter.makeHtml(mdText);
            // alert("ok");
            $("#docsContent").html(html);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            // alert(xhr.status+'\n'+thrownError);
            alert('請推到 github or 通過 server 開啟，勿直接開啟 html，會產生路徑錯誤');
        }
    });
};

var strUrl = location.search;
var getPara, ParaVal;
var aryPara = [];

if (strUrl.indexOf("?") != -1) {
    var getSearch = strUrl.split("?");
    getPara = getSearch[1].split("&");
    for (i = 0; i < getPara.length; i++) {
        ParaVal = getPara[i].split("=");
        aryPara.push(ParaVal[1]);
        aryPara[ParaVal[0]] = ParaVal[1];
    }
    // alert(aryPara);
}

document.getElementById("company_name").innerHTML = aryPara[0];
document.getElementById("company_position").innerHTML = decodeURI(aryPara[1]);

var mdfile = aryPara[0];
if (mdfile==null) {
    mdfile = 'index';
}
var _path = './markdown/'+mdfile+'.md';
show_md_file(_path);

mixpanel.track(mdfile);
