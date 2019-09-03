// bai 1 one click......................................................................................
//$(this).hide() - hides the current elements
//$("p").hide() - hides all <p> elements
//$(".test").hide() - hides all elements with class ="test"
//$("#test").hide() - hides all elements with class ="test"
/*$(document).ready(function () {
   $("button").click(function () {
       $("p").hide();// create button to hide all <p> elements
   }) ;
});
 */

/*$(document).ready(function () {
    $("button").click(function () {
        $("#demo").hide();// hide id demo
    }) ;
});
 */

/*$(document).ready(function () {
    $("button").click(function () {
        $(".demo").hide();// hide id demo
    }) ;
});
 */

//bai 2................................................................................................
//$("*")-selects all elements
/*$(document).ready(function () {
    $("button").click(function () {
        $("*").hide();
    }) ;
});
 */
//$("this")-selects the current html elements
/*$(document).ready(function () {
    $("button").click(function () {
        $(this).hide();
    }) ;
});
 */
//$("p.intro")-selects all <p> elements with class="intro"
/*$(document).ready(function () {
    $("button").click(function () {
        $("p.demo").hide();
    }) ;
});
 */
//$("p:first")-selects the first <p> elements
/*$(document).ready(function () {
    $("button").click(function () {
        $("p:first").hide();//
    }) ;
});
 */
//$("ul li:first")-selects the first <li> elements of the first<ul>
/*$(document).ready(function () {
    $("button").click(function () {
        $("ul li:first").hide();
    }) ;
});
 */
//$("ul li:first-child")-selects the first <li> elements of every<ul>
/*$(document).ready(function () {
    $("button").click(function () {
        $("ul li:first-child").hide();
    }) ;
});
 */
//$("[href]")-selects all elements with an href attribute
/*$(document).ready(function () {
    $("button").click(function () {
        $("[href]").hide();// just <a> inside div
    }) ;
});
 */
//$("a[target='_blank']")-selects all <a> elements with a target attribute value equal to "_blank"
/*$(document).ready(function () {
    $("button").click(function () {
        $("a[target='_blank']").hide();
    }) ;
});
 */
//$("a[target!='_blank']")-selects all <a> elements with a target attribute value not equal to "_blank"
/*$(document).ready(function () {
    $("button").click(function () {
        $("a[target!='_blank']").hide();
    }) ;
});
 */
//$(":button")-selects all <button> elements and <input> elements of type ="button"
/*$(document).ready(function () {
    $("button").click(function () {
        $(":button").hide();
    }) ;
});
 */
//$("tr:even")-selects all even <tr> elements
/*$(document).ready(function () {
    $("button").click(function () {
        $("tr:even").hide();
    }) ;
});
 */
//$("tr:odd")-selects all odd <tr> elements
/*$(document).ready(function () {
    $("button").click(function () {
        $("tr:odd").hide();
    }) ;
});

// bai 3 - double click-entered-leave-down-up-hover-focus-blur-on.................................................
 */
/*$(document).ready(function () {
    $("p").dblclick(function () {
        $(this).hide();// hide a <p> element which you want to hide with doubleclick
    }) ;
});
 */
/*$(document).ready(function () {
    $("#demo").mouseenter(function () {
        alert("you enterd demo!")// display an alert when you press one click on ip demo
    }) ;
});
 */
/*$(document).ready(function () {
    $("#demo").mouseleave(function () {
        alert("bye!you now leave demo!")// display an alert when you leave over ip demo
    }) ;
});
 */

/*$(document).ready(function () {
    $("#demo").mousedown(function () {
        alert("mouse down over demo!")// display an alert when you click down mouse over ip demo
    }) ;
});
 */
/*$(document).ready(function () {
    $("#demo").mouseup(function () {
        alert("mouse up over demo!")// display an alert when you nearly click up mouse over ip demo
    }) ;
});
 */

/*$(document).ready(function () {
    $("#demo").hover(function () {
        alert("you entered demo!");// display an alert when you entered row of ip demo
    },
        function () {
       alert("bye! you now leave demo!");//display when click ok after above

    }) ;
});
 */

/*$(document).ready(function () {
    $("input").focus(function () {
        $(this).css("background-color","yellow");// display yellow when click mouse onto box input
    }) ;
    $("input").blur(function () {
        $(this).css("background-color","green");// display green when cancle and click another place
    }) ;
});
 */

/*$(document).ready(function () {
    $("p").on("click",function () {
        $(this).hide();// when click on <p> that will disappear
    }) ;
});
 */

/*$(document).ready(function () {
    $("p").on({mouseenter: function(){
        $(this).css("background-color","lightgreen");//stop mouse here
        },
        mouseleave: function(){
            $(this).css("background-color","lightblue");//go over
        },
        click: function () {
            $(this).css("background-color","yellow");//click mouse here
        }
        // when click on <p> that will disappear
    }) ;
});
 */

// bai 4-hide/show-toggle..........................................................................................
/*$(document).ready(function () {
    $("#hide").click(function () {
        $("p").hide(1000);// hide with transition 1000
    }) ;
    $("#show").click(function () {
        $("p").show(1000);
    }) ;
});
 */

/*$(document).ready(function () {
    $("#hide").click(function () {
        $("p").toggle();// hide and show <p>
    }) ;
});
 */
//bai 5-fadeIn/out/toggle/to............................................................................................

/*$(document).ready(function () {
    $("#show").click(function () {
        $("#div1").fadeIn();
        $("#div2").fadeIn("fast");//speed,callback
        $("#div3").fadeIn(3000);
    }) ;
});
$(document).ready(function () {
    $("#hide").click(function () {//speed,callback
        $("#div1").fadeOut();
        $("#div2").fadeOut("milliseconds");
        $("#div3").fadeOut(3000);
    }) ;
});
$(document).ready(function () {
    $("#toggle").click(function () {
        $("#div1").fadeToggle();//speed,callback
        $("#div2").fadeToggle("fast");
        $("#div3").fadeToggle(3000);
    }) ;
});
$(document).ready(function () {
    $("#to").click(function () {
        $("#div1").fadeTo("slow",0.15);//speed,opacity,callback
        $("#div2").fadeTo("slow",0.4);
        $("#div3").fadeTo("slow",0.7);
    }) ;
});
 */
//bai 6 - slideDown/Up/Toggle..........................................................................................
/*$(document).ready(function () {
    $("#flip").click(function () {
        $("#panel").slideDown("slow");// speed and callback
    }) ;
});
$(document).ready(function () {
    $("#flip1").click(function () {
        $("#panel1").slideUp();// speed and callback
    }) ;
});
$(document).ready(function () {
    $("#flip2").click(function () {
        $("#panel2").slideToggle();// speed and callback
    }) ;
});

$(document).ready(function () {
    $("#flip1").click(function () {
        $("#panel1").css("color","red")
            .slideUp(2000)
            .slideDown(2000);// speed and callback
    }) ;
});
 */

//bai 7- Animate({params},speed,callback)-static position(css-relative/fixed/absolute).................................
/*$(document).ready(function () {
    $("#animate").click(function () {
        $("#ani").animate({right: '250px'});
    }) ;
});
 */
/*$(document).ready(function () {
    $("#animate").click(function () {
        $("#ani").animate({right: '250px',opacity: '0.5',height: '150px',width: '150px'});
    }) ;
});
 */
/*$(document).ready(function () {
    $("#animate").click(function () {
        $("#ani").animate({right: '250px',height: '+=150px',width: '+=150px'});
    }) ;
});
 */
/*$(document).ready(function () {
    $("#animate").click(function () {
        $("#ani").animate({height: 'toggle'});
    }) ;
});
 */
/*$(document).ready(function () {
    $("#animate").click(function () {
        var ani = $("#ani");
        ani.animate({width: '300px',opacity: '0.4'},"slow");
        ani.animate({width: '300px',opacity: '0.8'},"slow");
        ani.animate({width: '100px',opacity: '0.4'},"slow");
        ani.animate({width: '100px',opacity: '0.8'},"slow");
    }) ;
});
 */
/*$(document).ready(function () {
    $("#animate").click(function () {
        var ani = $("#ani1");
        ani.animate({left: '100px'},"slow");
        ani.animate({fontSize: '3em'},"slow");
}) ;
});
 */
//bai 8-stop(stopAll,goToEnd).........................................................................................
/*$(document).ready(function () {
    $("#flip").click(function () {
        $("#panel").slideDown(5000);// speed and callback
    }) ;
    $("#stop").click(function () {
        $("#panel").stop();// stop down
    }) ;
});
 */
//bai 9-callback......................................................................................................
/*$(document).ready(function () {
    $("#hide").click(function () {
        $("p").hide(1000,function () {//1000/slow/fast/miliseconds
            alert("the paragraph is now hidden");
        });
    }) ;
});
*/
//bai 10- get content-text(),html(),val()..............................................................................
/*$(document).ready(function () {
    $("#text").click(function () {
        alert("Text: " + $("#flip").text());
    }) ;
    $("#html").click(function () {
        alert("HTML: " + $("#flip").html());
    }) ;
    $("#value").click(function () {
        alert("Value: " + $("#val").val());
    }) ;
});
 */
/*$(document).ready(function () {
    $("#text").click(function () {
       $("#flip").text("hello world!");
    }) ;
    $("#html").click(function () {
        $("#flip").html("<b>hello world!</b>");
    }) ;
    $("#value").click(function () {
        $("#val").val("good boy");
    }) ;
});
 */
//callback.................
/*$(document).ready(function () {
    $("#text").click(function () {
        $("#flip").text(function (i, origText) {
            return"Old text: "+ origText +"New text: hello world!(index: "+ i +")";
        });
    }) ;
    $("#html").click(function () {
        $("#flip").html(function (i, origText) {
            return"Old html: "+ origText +"New html: hello <b>world!</b>(index: "+ i +")";
        });
    }) ;
});
 */

//bai 11 - get attribute/ set attributes - attr() html .................................................................
//get.....................
/*$(document).ready(function () {
    $("#getattribute").click(function () {
        alert($("#attr").attr("href"));
    }) ;
});
 */
//set...........
/*$(document).ready(function () {
    $("#setattribute").click(function () {
        $("#attr").attr("href","https://w3schools.com/jquery/");//mouse over the link or click on it to see the change
    }) ;
});
 */
/*$(document).ready(function () {
    $("#setattribute").click(function () {
        $("#attr").attr({
            "href" :
            "https://w3schools.com/jquery/",
            "title" :
            "w3schools jquery tutorial"
        });//mouse over the link or click on it to see link and title have change
    }) ;
});
 */
//callback
/*$(document).ready(function () {
    $("#setattribute").click(function () {
        $("#attr").attr("href",function (i,origValue) {
            return origValue + "/jquery/";//add the end of link to /jquery/
        });//mouse over the link or click on it to see the change
    }) ;
});
 */