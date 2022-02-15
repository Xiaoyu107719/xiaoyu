// 用于更新网站
var j=0;
function md()
{
    if(j>=3)
    {
        // window.location.href="index.html";
    }
    else
    {
        var date=new Date();
        // 获取当前时间
        // 开始检查安全
        var sDate=document.location.search.substring(1);
        var sPos=sDate.indexOf("url=")+4;
        var ePos=sDate.indexOf("&",sPos);
        var newURL;
        if(ePos<0)
        {
            newURL=sDate.substring(sPos);
        }
        else
        {
            newURL = sData.substring(sPos, ePos);
        }
        //重定向,具体需要网址支持!
        window.location.href = newURL;
        
        var k=date.getHours();
        var b=date.getMinutes();
        alert('检查完毕,网站是最新'+'检查时间'+k+'时'+b+'分');
        j++;
    }
}
md();