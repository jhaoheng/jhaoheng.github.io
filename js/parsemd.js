
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
            alert(xhr.status+'\n'+thrownError);
        }
    });
};

function test123(){
  alert("123");
};
