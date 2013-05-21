var bindKeyUps = function(){
  var start = new Date()
  $(document).on('keyup',function(event){
    if(event.which == 65) {
      $active = $('.active-1');
      $active.next().append($('.active-1 img:first-child'));
      $active.next().addClass('active-1');
      $active.first().removeClass('active-1');
        if($('td:last-child').hasClass("active-1")){
        alert('Player 1 wins!');
        alert('You took '  + Math.round((new Date() - start)/1000) + ' seconds!');
        $(window).off();
        $('#restart').show();
        $('#newgame').show();
      }
    }
    if(event.which == 77) {
      $active = $('.active-2');
      $active.next().append($('.active-2 img:first-child'));
      $active.next().addClass('active-2');
      $active.first().removeClass('active-2');
       if($('td:last-child').hasClass("active-2")){
        alert('Player 2 wins');
        alert('You took '  + Math.round((new Date() - start)/1000) + ' seconds!');
        $(window).off();
        $('#restart').show();
        $('#newgame').show();
      }
    }
  });
};

var moveToHome = function(){
  $('#player1_strip td:first-child').addClass('active-1');
  $('#player1_strip td:first-child').append($('.active-1 img:first-child'));
  $('.active-1').last().removeClass('active-1');
  $('#player2_strip td:first-child').addClass('active-2');
  $('#player2_strip td:first-child').append($('.active-2 img:first-child'));
  $('.active-2').last().removeClass('active-2');
  $('#restart').hide();
  $('#newgame').hide();
};

    $(document).ready(function() {
      $('.columns').on("click",'img',function(){
        $this = $(this);
        var name = $this.attr('class');
        var name_html = "<div class='selected-player'>" + name + "</div>"
        $this.parent().prev().slideUp(3000);
        $this.addClass("selected");
        $this.siblings().hide();
        $this.parent().removeClass('columns');
        $this.animate({width:"100%", height:"100%"}, 3000);
        $this.parent().append(name_html)
    // $parent_div = console.log($($this.parent()));
    if($('.selected').length == 2)
    {
      $('.button').slideDown(3000);
      $('#vs').show();
    }
  });

  // $(".button").on("click", function(){
  //   var $selected = $('.selected') 
  //   window.location.href = "/game?p1=" + $selected[0]["src"] + "&p2=" + $selected[1]["src"];
  // });

    $(".button").on("click", function(){
      $(".button").hide();
      var $selected = $('.selected');
      $selected.hide();
      $('.selected-player').hide();
      $('#vs').hide();
      $('racer_table').show();
      $('.active-1').html($selected[0]);
      $('.active-2').html($selected[1]);
      $selected.show();
      bindKeyUps();
  });

    $("#restart").on("click", function(){
      moveToHome();
    });

    $('#newgame').on("click", function(){
      window.location.href = '/'
    });

    $(".nate").hover(function(){
      $(this).replaceWith('<img class="nate" src="http://i3.ytimg.com/vi/FzF5nf1g14c/hqdefault.jpg">');
    });

});
