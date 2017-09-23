 // main document 


$( document ).ready(function() {
     $('.loader').hide();

    var myFacebookToken = 'EAACEdEose0cBAAeZAVzA9shFbTitGz5SYV2EotduZBvZA5c2ac0dFKLYImQHPOfbV4jiwRFtBWvWZAIiZAR3CzsggIetjPyS2R9weg8GqhxBKyDTko16TkTG9MXwGGnOwyd503IDyFdDu15F08aTwZCJY7C6PP8GFOdHW0gdFTB4knlSJVtWkrynJtU7Ad4YsK4MAUFhJdLQZDZD';

    function getFacebookInfo(){

        $.ajax({

            url : "https://graph.facebook.com/me?fields=feed.include_hidden(true).limit(10)&access_token="+myFacebookToken, 
            method : 'GET',

                success : function(response){
                  console.log(response);

                  var myFeedId = $('#myFeedId')
                  var myStory = $('#myStory') ;
                  var id;
                  var story ;


                    
                    for (var i = 0; i < 10; i++) {

                        // Another way of doing
                        story = '<div id=story'+i+'> </div>'
                        myStory.append(story);
                        $('#story'+i).text(response.feed.data[i].story);
                        id = '<div id=id'+i+'> </div>'
                        myFeedId.append(id);
                        $('#id'+i).text(response.feed.data[i].id);
                      }
                    },
                    
                

               
                error : function(errType , errorStatus, textThrown){

                  alert("Some Error occured!");
                  console.log('errType : '+ errType);
                  console.log('errorStatus : '+ errorStatus);
                  console.log('textThrown : '+ textThrown);

                },//error handling end

                beforeSend : function(){

                    $('.loader').show();

                },

                complete : function(){

                   $('.loader').hide();

                }


        });// end ajax call 
    

    }// end get facebook info

    $("#facebookBtn").on("click", getFacebookInfo );

   

   }); // end of document ready() 



   