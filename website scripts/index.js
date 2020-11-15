window.onload = function() {
    $.getJSON(config.websiteUrl+"/channels", (data) => {
        data = JSON.parse(data);
        for(let i = 0; i < data.length; i++) {
            if(data[i].id) {
                $("body").append(genCard(i, newName(data[i].name), data[i].subscribers, data[i].logo));
            } else {
                $("body").append(genCard(i, "MASSKA", 0, "https://yt3.ggpht.com/a/AATXAJxiXRsXkhc3iA7uX8C4pL5eaeSz_HH_vkwWtsKQjw=s88-c-k-c0x00ffffff-no-rj"));
            }
            $("#channel_0").attr("class", "card anim");
        }
    });
    setInterval(() => {
        $.getJSON(config.websiteUrl+"/channels", (data) => {
            data = JSON.parse(data);
            for(let i = 0; i < data.length; i++) {
                $("#channel_"+i+" .name").html(newName(data[i].name));
                $("#channel_"+i+" .subscribers").html(data[i].subscribers);
                $("#channel_"+i+" .logo").attr("src", data[i].logo);
            }
        });
    }, 3000);
}
function genCard(cn, cname, csub, cimage) {
    return '<div id="channel_'+cn+'" class="card"><div class="picture"><img class="logo" src="'+cimage+'" alt="logo"></div><div class="texte"><div class="name">'+cname+'</div><div class="subscribers odometer">'+csub+'</div></div></div>'
}
function newName(cname) {
    var name = cname.substring(0,1).toUpperCase()+cname.substring(1,cname.length).toLowerCase();
    if(name.length > 10) {
        name = name.substring(0, 10)+"...";
    }
    return name;
}
//activee
//$("body").append(genCard(1, "MASSKA", 0, "https://yt3.ggpht.com/a/AATXAJxiXRsXkhc3iA7uX8C4pL5eaeSz_HH_vkwWtsKQjw=s88-c-k-c0x00ffffff-no-rj"));
