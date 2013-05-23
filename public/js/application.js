Game = {
  play: function() {
    $('.columns').on("click",'img',function() {
      $this = $(this);
      var name = $this.attr('class');
      var name_html = "<div class='selected-player'>" + name + "</div>";
      $this.parent().prev().slideUp(3000);
      $this.addClass("selected");
      $this.siblings().hide();
      $this.parent().removeClass('columns');
      $this.animate({width:"100%", height:"100%"}, 3000);
      $this.parent().append(name_html);
      if ($('.selected').length == 2) {
        $('.start-game-button').slideDown(3000);
        $('#vs').show();
      }
    });

    $(".start-game-button").on("click", function() {
      $(".start-game-button").hide();
      var $selected = $('.selected');
      $selected.hide();
      $('.selected-player').hide();
      $('#vs').hide();
      $('racer_table').show();
      addPhoto($selected);
      $selected.show();
      moveToHome();
    });

      // function addPhoto() {
      // $('.active-1').html($selected[0]).find('img').attr('id', 'player1');
      // $('.active-2').html($selected[1]).find('img').attr('id', 'player2');
      // $('#player1').animate({width:"50px", height:"50px"},1000);
      // $('#player2').animate({width:"50px", height:"50px"},1000);



      function addPhoto(selected) {
        for (var playerNumber = 1 ; playerNumber <= 2; playerNumber ++) {
          var className = 'active-' + playerNumber;
          var playerName = 'player' + playerNumber;
          $('.' + className).html(selected[playerNumber - 1]).find('img').attr('id', playerName);
          $('#' + playerName).animate({width:"50px", height:"50px"},1000);
        }
      }

      function bindKeyUps() {
        $(document).on('keyup', function(event){
          if (Game.isOver()) { return; console.log("Sup bro"); }
          else{
            if (event.which == 65) {
              movePlayer(1);
            }
            if (event.which == 77) {
              movePlayer(2);
            }
          }
        });

        function movePlayer(playerNumber) {
          var className = 'active-' + playerNumber;
          var playerName = '#player' + playerNumber;
          $active = $('.' + className);
          $active.next().append($(playerName));
          $active.removeClass(className).next().addClass(className);
        }
      }

      function moveToHome() {
        var count = 3;
        var countdown = setInterval(function() {
          if (count === 0){
            bindKeyUps();
            clearInterval(countdown);
            $('#countdown').text("Go!");
            start = new Date();
          }
          else{
            count --;
            $('#countdown').text("Start in " + count);
          }
        }, 1000);
        $('td').removeClass();
        $('#player1_strip td:first-child').addClass('active-1');
        $('.active-1').append($('#player1'));
        $('#player2_strip td:first-child').addClass('active-2');
        $('.active-2').append($('#player2'));

      }

      $("#restart").on("click", function(){
        $('.game-end-buttons').css("display", "none");
        moveToHome();
        countdown;
      });

      $('#newgame').on("click", function(){
        $('.game-end-buttons').css("display", "none");
        window.location.href = '/';
      });

      $(".nate").hover(function(){
        $(this).replaceWith('<img class="nate" src="http://i3.ytimg.com/vi/FzF5nf1g14c/hqdefault.jpg">');
      });
    },

    isOver: function() {
      function didPlayerWin(playerNumber) {
        var className = 'active-' + playerNumber;
        if($('td:last-child').hasClass(className)){
          return true;
        } else {
          return false;
        }
      }

      function declareWinner(playerNumber) {
        $(document).unbind('keyup')
        alert('Player ' + playerNumber + ' wins!');
        alert('You took '  + Math.round((new Date() - start)/1000) + ' seconds!');
        $('.game-end-buttons').css("display", "block");
      }
      for(var playerNumber = 1; playerNumber <=2; playerNumber++) {
        if(didPlayerWin(playerNumber)) {
          declareWinner(playerNumber);
        }
      }
    }
  };

  $(document).ready(function() {
    Game.play();
    $(document)
    Game.bindKeyUps
  });
