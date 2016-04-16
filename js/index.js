/**
 * Created by Administrator on 2016/4/15 0015.
 */
$(document).ready(function(){

    function top(){
        $('#navbar li:first').css('background-color','rgb(255,169,57)');
        $('#navbar li:gt(0)').mouseenter(function(){
            $(this).css('background-color','rgb(59,123,172)');
        }).mouseleave(function(){
            $(this).css('background-color','rgb(82,149,205)');
        });
    }
    top

    //导航栏

    function tab(){
        tabinit(0);
        $('#tab-left li').each(function(){
            $(this).click(function(){
                $('#tab-left li').css('background-color','rgb(243,233,220)');
                $('#tab-left li').css('border-right','1px solid #ffc200');
                $('.queryDiv').css('display','none');

                tabinit($(this).index());
            })
        })
    }
    function tabinit(x){
        $('.queryDiv').eq(x).css('display','block');
        $('#tab-left li').eq(x).css('background-color','white').css('border-right','none');
        $('#tab-left li:gt(0)').css('border-top','none');
    }
    tab();
    //查询切换

    function tabadv(){
        var arr=['img/adv1.jpg','img/adv2.jpg','img/adv3.jpg','img/adv4.jpg'];
        var timer = null;
        var x = 0;
        change(0);
        $('#adv li').each(function(){
            $(this).click(function(){
                change($(this).index())
                x=$(this).index();
            })
        })

        timer = setInterval(function(){
            x++;
            x=x%arr.length;
            change(x);
        },2000);

        $('#adv ul').mouseenter(function(){
            clearInterval(timer);
        }).mouseleave(function(){
            timer = setInterval(function(){
                x++;
                x=x%arr.length;
                change(x);
            },2000);
        })

    }
    function change(i){
        var arr=['img/adv1.jpg','img/adv2.jpg','img/adv3.jpg','img/adv4.jpg'];
        $('#adv img').attr('src',arr[i]);
        $('#adv li').each(function(){
            $(this).css('background','#ffc200')
        })
        $('#adv li').eq(i).css('background','yellow')
    }
    tabadv();
    //轮播图

    //function date(){
        var date=new Date();
        //alert(date.getFullYear());
        //alert(date.getDate())
    //}
    //date()
    function givedate(){
        $('#date').html(date.getFullYear() + '-' + (parseInt(date.getMonth())+1) +'-'+ date.getDate());
    }
    givedate();

    //无缝滚动
    function logoScroll(){
        var timer = null;
        $('.logoBar-scroll-btn').mouseenter(function(){
            $(this).css('background','rgb(186,214,239)').mouseleave(function(){
                $(this).css('background','gainsboro')
            });
        });
        $('.logoBar-scroll-btnLeft').click(function(){
            srcoll();
        });

        auto();
        function srcoll(){
            $('.logoBar-scroll-list').animate({
                left:'-120px'
            },function(){
                $('.logoBar-scroll-list').append( $('.logoBar-scroll-list').children().eq(0) );
                $('.logoBar-scroll-list').css('left',0);
            });
        }
        function auto(){
            clearInterval(timer);
            timer = setInterval(function(){
                srcoll()
            },3000);

            $('.logoBar-scroll').mouseenter(function(){
                clearInterval(timer);
            }).mouseleave(function(){
                auto();
            })
        }

    }
    logoScroll();
});