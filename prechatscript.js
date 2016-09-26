function caliCheck(){
  if($('#state').val() === 'California'){
    $('#purchasedInContainer').show();
  }else{
    $("#purchasedInContainer").hide();
  }
}

$('document').ready(function(){
  $('#billing').click(function(){//replace and resize
    var preChatSurvey = "<div id='nameWrapper' class='inputFields'><div>Full Name:*</div><input placeholder='John Doe' class='inputStyle' id='name'></input></div><div id='phoneWrapper' class='inputFields'><div>Mobile Phone Number:*</div><input placeholder='ex: 123-123-1234' type='text' class='inputStyle' id='phone' onkeypress='return event.charCode >= 48 && event.charCode <= 57' maxlength='11'></input></div><div class='inputFields'><div>State:</div><select id='state' class='inputStyle' onchange='caliCheck()'><option value='' disabled selected>Select one</option><option value='Alabama'>Alabama</option><option value='California'>California</option></select></div><div id='purchasedInContainer' class='inputFields' class='hidden'><div>Was your phone purched in CA?</div><select id='purchasedIn' class='inputStyle'><option value='' disabled selected>Select one</option><option value='yes'>Yes</option><option value='no'>No</option></select></div><div class='inputFields'><div>Describe your questions...</div><textarea rows='4' class='inputStyle'></textarea> </div><div class='btnPanel'><input type='button' value='Start Chat' id='chatBtn'><div style='color:grey; font-size:12px; float: right;'>*Required field</div></input></div>";
    $('#location').hide();
    $('#inner').empty();
    $('body').css({'height':'625px'});
    $('#inner').append(preChatSurvey);
  })

  $('#inner').on('click', '#chatBtn', function(){
    //check name
    if($('#name').val() === ''){//err
      $('#name').addClass('nameErr err');
      if($('#nameMsg').length){
        $('#nameMsg').show()
      }else{
        $('#nameWrapper').append('<div id="nameMsg" class="errMsg">Full Name is a required field</div>');
      }
    }else{//success
      $('#name').removeClass('nameErr err');
      $('#nameMsg').hide();
    }
    //check phone
    if($('#phone').val() === ''){//err no number
      $('#phone').addClass('phoneErr err');
      if($('#phoneMsg').length){
        $('#phoneMsg').empty();
        $('#phoneMsg').append('Mobile number is a required field.');
      }else{
        $('#phoneWrapper').append('<div id="phoneMsg" class="errMsg">Mobile number is a required field.</div>');
      }
    }else{
      if($('#phone').val().length < 10){//other err short number
        if($('#phoneMsg').length){
          $('#phoneMsg').empty();
          $('#phoneMsg').append('Please enter a valid phone number.');
        }else{
          $('#phoneWrapper').append('<div id="phoneMsg" class="errMsg">Please enter a valid phone number.</div>');
        }
      }else{//success
        $('#phoneMsg').empty();
        $('#phone').removeClass('phoneErr err');
      }
    }
    //check for err then go to new page
    if(!($('.err').length) ){
      $('#inner').hide();
      $('#helpText').empty();
      $('#helpText').append('Congratulations!! You have reached the chat agent.');
    }
  });
});
