
    var loginedUsers=Array("isil","damla","semra"),//[],
        loginedUsersPsw=("1","2","3"),//[],
        UAP = $("#userNameAndPassword");

   for (var i = 0; i < loginedUsers.length; i++)
    {
       var user_names = loginedUsers[i];
       var user_psws = loginedUsersPsw[i];
       $("#accounts").append("<div><div>"+ user_names +"</div><div>"+ user_psws+"</div></div>");
    }
    