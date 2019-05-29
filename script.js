$("button").click(function(){
   var age = $("#age").val();
    var superpowers= $("#superpowers").val();
    if ( age < 30 && superpowers ==="superpowers"){
        $("#picAnswer").attr("src","https://thumbor.forbes.com/thumbor/1280x868/https%3A%2F%2Fblogs-images.forbes.com%2Frobcain%2Ffiles%2F2017%2F07%2FHulk.jpeg");
                 $("#answer").text("hulk crushes!");
    }else if (age < 30 && superpowers ==="technology"){
         $("#picAnswer").attr("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbcfkpJk-_DURFIzLAafl6ovVnx-UOXvN3-QFJTrYPhNQ_ugBbjA");
            $("#answer").text("is my jod to help pepole!");
    }else if (age > 30 && superpowers ==="technology"){
        $("#picAnswer").attr("src","https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2018/04/11/105124014-Screen-Shot-2018-04-11-at-8.13.44-AM.530x298.jpg?v=1526467306");
           $("#answer").text("protect the foret portect my people!");
    }else if (age > 30 && superpowers ==="superpowers"){
        $("#picAnswer").attr("src","https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Thor_God_of_Thunder.jpg/256px-Thor_God_of_Thunder.jpg");
           $("#answer").text("I'm thor the god of thunder!");
    }else {
    }
        
        
});