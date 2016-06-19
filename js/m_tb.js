$(function(){
	$('.bottom .text').hide();
	$('.bottom .text:eq(0)').show();
	var x=0
	setInterval(function(){
      x++;
      if(x>2){
      	x=0
      }
      $('.bottom .text').hide();
      $('.bottom .text:eq('+x+')').show();
	},2000)


      var fen=59;
      var miao=59;
      setInterval(function(){
            miao--;
            if(miao==0){
                  fen--;
                  miao=59;
                  if(fen==0){
                        fen=59;
                        miao=59;
                  }
            }
          $('.tqg .djs .miao').html(miao)
          $('.tqg .djs .fen').html(fen)

      },1000)
})