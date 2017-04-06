$(document).ready(function() {

    //更多
    $(".more").mouseenter(function() {
        $(".more div").css("display", "block");
    }).mouseleave(function() {
        $(".more div").css("display", "none");
    })

    //点击换肤
    $(".change>a").click(function() {
        $(".changeImage").show();
        //收起按钮
        $(".nochange").parent(".upchange").show();

    })

    // hover几个换肤的模块改变背景颜色

    $(".classify li a").hover(function() {
        $(".classify li .showTitle").removeClass("showTitle");
        $(this).addClass("showTitle");

    })

    var tem = ".classify .first .hotClass .hoverClass1";
    var ul = 'images/1.jpg';

    // 点击切换换肤的几个模块
    $(".classify li a").click(function() {
        var that = $(this);
        var tempt = that.text();
        console.log(tempt);
        $(".classify li").each(function() {
            // 获取子元素中第一个div
            $($(this).children("div").get(0)).hide();
        })
        if (tempt == "游戏") {
            $('.classify li .playClass').show();


        } else if (tempt == "热门") {
            $('.classify li .hotClass').show();

        } else if (tempt == "卡通") {
            $('.classify li .kaTongClass').show();

        } else if (tempt == "女神降临") {
            $('.classify li .girlClass').show();

        } else if (tempt == "明星") {
            $('.classify li .starClass').show();

        } else if (tempt == "风景") {
            $('.classify li .fengClass').show();

        } else if (tempt == "简约") {
            $('.classify li .jianClass').show();

        } else if (tempt == "小清新") {
            $('.classify li .xinClass').show();

        }
    })

    // hover 图片 换肤
    var array = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twel'];
    showImage();

    function showImage() {


        $(".classify .first .hotClass>div").each(function(index) {
            var t = index + 1;
            var tem = ".classify .first .hotClass .hoverClass" + t;
            var ul = 'images/' + t + ".jpg";
            $(tem).mouseenter(function() {

                $(this).css("opacity", "1");
                $(".showImage .skinback img").attr("src", ul);

            }).mouseleave(function() {
                $(this).css("opacity", "0");
            })

            $(tem).click(function() {
                $(".s-skin-container").css({ "background": "url(" + ul + ") no-repeat", "backgroundSize": "100%" });
            })

        })

    }


    normalImage();

    function normalImage() {

        $(".classify .second .playClass img").each(function(index) {
            var num = index + 1;
            console.log('1', num);
            var t = array[index];

            var tem = ".classify .second .playClass ." + t;
            var ul = 'images/2-' + num + ".jpg";
            $(tem).mouseenter(function() {

                $(".showImage .skinback img").attr("src", ul);

            }).mouseleave(function() {

            })
            $(tem).click(function() {
                $(".s-skin-container").css({ "background": "url(" + ul + ") no-repeat", "backgroundSize": "100%" })
            })

        })

        $(".classify .three .kaTongClass img").each(function(index) {
            var num = index + 1;
            console.log('1', num);
            var t = array[index];

            var tem = ".classify .three .kaTongClass ." + t;
            var ul = 'images/' + num + ".jpg";
            $(tem).mouseenter(function() {

                $(".showImage .skinback img").attr("src", ul);

            }).mouseleave(function() {

            })
            $(tem).click(function() {
                $(".s-skin-container").css({ "background": "url(" + ul + ") no-repeat", "backgroundSize": "100%" });
            })

        })

        $(".classify .four .girlClass img").each(function(index) {
            var num = index + 1;
            var t = array[index];

            var tem = ".classify .four .girlClass ." + t;
            var ul = 'images/2-' + num + ".jpg";
            $(tem).mouseenter(function() {

                $(".showImage .skinback img").attr("src", ul);

            }).mouseleave(function() {

            })
            $(tem).click(function() {
                $(".s-skin-container").css({ "background": "url(" + ul + ") no-repeat", "backgroundSize": "100%" });
            })

        })

        $(".classify .five .starClass img").each(function(index) {
            var num = index + 1;
            console.log('1', num);
            var t = array[index];

            var tem = ".classify .five .starClass ." + t;
            var ul = 'images/' + num + ".jpg";
            $(tem).mouseenter(function() {

                $(".showImage .skinback img").attr("src", ul);

            }).mouseleave(function() {

            })
            $(tem).click(function() {
                $(".s-skin-container").css({ "background": "url(" + ul + ") no-repeat", "backgroundSize": "100%" });
            })

        })
        $(".classify .six .fengClass img").each(function(index) {
            var num = index + 1;
            console.log('1', num);
            var t = array[index];

            var tem = ".classify .six .fengClass ." + t;
            var ul = 'images/2-' + num + ".jpg";
            $(tem).mouseenter(function() {

                $(".showImage .skinback img").attr("src", ul);

            }).mouseleave(function() {

            })
            $(tem).click(function() {
                $(".s-skin-container").css({ "background": "url(" + ul + ") no-repeat", "backgroundSize": "100%" });
            })

        })

        $(".classify .seven .jianClass img").each(function(index) {
            var num = index + 1;
            console.log('1', num);
            var t = array[index];

            var tem = ".classify .seven .jianClass ." + t;
            var ul = 'images/' + num + ".jpg";
            $(tem).mouseenter(function() {

                $(".showImage .skinback img").attr("src", ul);

            }).mouseleave(function() {

            })
            $(tem).click(function() {
                $(".s-skin-container").css({ "background": "url(" + ul + ") no-repeat", "backgroundSize": "100%" });
            })

        })

        $(".classify .eight .xinClass img").each(function(index) {
            var num = index + 1;
            console.log('1', num);
            var t = array[index];

            var tem = ".classify .eight .xinClass ." + t;
            var ul = 'images/2-' + num + ".jpg";
            $(tem).mouseenter(function() {

                $(".showImage .skinback img").attr("src", ul);

            }).mouseleave(function() {

            })
            $(tem).click(function() {
                $(".s-skin-container").css({ "background": "url(" + ul + ") no-repeat", "backgroundSize": "100%" });
            })

        })
    }

    //不适用换肤

    $(".nochange").click(function() {
        $(this).parent(".upchange").hide();
        $(".showImage .skinback img").attr("src", "");
        $("body").css("background", "url()");
    })

    //透明度滑块的移动

    $(".upchange input[type='range']").bind("input", function() {
        var num = $(this).val();
        console.log(num);
        $(".upchange .aplVal").html(num + "%");
        var t = num/100;
        console.log("t",t);
        $(".changetabContent .TabHeader .tabUl li .Recommend").css("background","rgba('255','255','255','"+t+"')");
    })

    //收起按钮的点击
    $(".change").on("click", ".up", function() {

        $(this).parent(".changeImage").hide();

    })

    //推荐按钮的点击

    $(".changeTabDiv .changetabContent .TabHeader .tabUl .firstTab .recomAlin").click(function() {

        $(this).addClass("showLinTitle");

        $(this).siblings(".Recommend").show();
        $(".changeTabDiv .changetabContent .TabHeader .tabUl .secondTab .navigationLin").removeClass("showLinTitle");
        $(".changeTabDiv .changetabContent .TabHeader .tabUl .thirdTab .shoppingLin").removeClass("showLinTitle");
        $(".changeTabDiv .changetabContent .TabHeader .tabUl .secondTab .navigationDiv").hide();
        $(".changeTabDiv .changetabContent .TabHeader .tabUl .thirdTab .shoppingDiv").hide();

    })

    //导航按钮的点击

    $(".changeTabDiv .changetabContent .TabHeader .tabUl .secondTab .navigationLin").click(function() {

        $(this).siblings(".navigationDiv").show();
        $(this).addClass("showLinTitle");
        $(".changeTabDiv .changetabContent .TabHeader .tabUl .firstTab .recomAlin").removeClass("showLinTitle");
        $(".changeTabDiv .changetabContent .TabHeader .tabUl .thirdTab .shoppingLin").removeClass("showLinTitle");
        $(".changeTabDiv .changetabContent .TabHeader .tabUl .firstTab .Recommend").hide();
        $(".changeTabDiv .changetabContent .TabHeader .tabUl .thirdTab .shoppingDiv").hide();

    })

    //购物按钮的点击

    $(".changeTabDiv .changetabContent .TabHeader .tabUl .thirdTab .shoppingLin").click(function() {

        $(this).siblings(".shoppingDiv").show();
        $(this).addClass("showLinTitle");
        $(".changeTabDiv .changetabContent .TabHeader .tabUl .secondTab .navigationLin").removeClass("showLinTitle");
        $(".changeTabDiv .changetabContent .TabHeader .tabUl .firstTab .recomAlin").removeClass("showLinTitle");
        $(".changeTabDiv .changetabContent .TabHeader .tabUl .secondTab .navigationDiv").hide();
        $(".changeTabDiv .changetabContent .TabHeader .tabUl .firstTab .Recommend").hide();

    })

    $(window).scroll(function(){

      var height = $(document).scrollTop();
        if(height == 0){
           $("#backToTop").hide(); 
        }else{
            $("#backToTop").show(); 
        }
       
    })

    $("#backToTop").click(function(){

        $('body,html').animate({ scrollTop: 0 }, 800);

    })



})
