  

const podcasts = {};

podcasts.genres = {
  horror: 0,
  comedy: 0,
  sports: 0,
  nonFiction: 0,
  fiction: 0
};


podcasts.comparison = function() {
   console.log("hello");
   let highest = null;
   let highestValue = 0;
   for (let key in podcasts.genres) {
    if (podcasts.genres[key] > highestValue){
      highest = key;
      highestValue = podcasts.genres[key];
    }
  }
  return highest;
};

podcasts.recommendation = function() {
  
  
  if (podcasts.comparison === "sports") {
    console.log(`your recommendation is ${podcasts.entry[0].title}`);
  }

  if (podcasts.comparison === "horror") {
    console.log(`your recommendation is ${podcasts.entry[1].title}`);
  }

  if (podcasts.comparison === "comedy") {
    console.log(`your recommendation is ${podcasts.entry[2].title}`);
  }

  if (podcasts.comparison === "fiction") {
    console.log(`your recommendation is ${podcasts.entry[3].title}`);
  } else {
    console.log(`your recommendation is ${podcasts.entry[4].title}`);
  }

};

// function click() {
//   var highest = compare(podcast.genre);
//   var genre = recommendation(highest);
// }

podcasts.entry = [
  {
    title: "jjjj",
    genre: "sports",
    ongoing: "yes",
    length: "medium"
  },

  {
    title: "yyyy",
    genre: "horror",
    ongoing: "yes",
    length: "long"
  },

  {
    title: "zzzz",
    genre: "comedy",
    ongoing: "yes",
    length: "short"
  },

  {
    title: "aaaa",
    genre: "fiction",
    ongoing: "yes",
    length: "long"
  },

  {
    title: "bbbb",
    genre: "non-fiction",
    ongoing: "no",
    length: "short"
  }
];


  $(function() {
            
    $(".quiz2").hide();
            $(".quiz3").hide();
            $(".quiz4").hide();
            $(".quiz5").hide();

            $(".answerOne").on("click", function(e) {
              e.preventDefault();
              let selection = $("input[name=test]:checked").val();
              if (selection === "horror") {
                console.log("horror");
                $(".quiz2").show();
                $(".quiz").hide();
                return (podcasts.genres.horror += 1);
              } else if (selection === "comedy") {
                $(".quiz2").show();
                $(".quiz").hide();
                console.log("comedy");
                return (podcasts.genres.comedy += 1);
              } else if (selection === "sports") {
                console.log("sports");
                $(".quiz2").show();
                $(".quiz").hide();
                return (podcasts.genres.sports += 1);
              } else if (selection === "fiction") {
                $(".quiz2").show();
                $(".quiz").hide();
                console.log("fiction");
                return (podcasts.genres.fiction += 1);
              } else {
                console.log("non fiction");
                $(".quiz2").show();
                $(".quiz").hide();
                return (podcasts.genres.nonFiction += 1);
              }
            });

            $(".answerTwo").on("click", function(e) {
              e.preventDefault();
              let selection = $("input[name=test2]:checked").val();
              if (selection === "horror") {
                console.log("horror");
                $(".quiz3").show();
                $(".quiz2").hide();
                return (podcasts.genres.horror += 1);
              } else if (selection === "comedy") {
                $(".quiz3").show();
                $(".quiz2").hide();
                console.log("comedy");
                return (podcasts.genres.comedy += 1);
              } else if (selection === "sports") {
                console.log("sports");
                $(".quiz3").show();
                $(".quiz2").hide();
                return (podcasts.genres.sports += 1);
              } else if (selection === "fiction") {
                console.log("fiction");
                $(".quiz3").show();
                $(".quiz2").hide();
                return (podcasts.genres.fiction += 1);
              } else {
                console.log("non fiction");
                $(".quiz3").show();
                $(".quiz2").hide();
                return (podcasts.genres.nonFiction += 1);
              }
            });

            $(".answerThree").on("click", function(e) {
              e.preventDefault();
              let selection = $("input[name=test3]:checked").val();
              if (selection === "horror") {
                console.log("horror");
                $(".quiz4").show();
                $(".quiz3").hide();
                return (podcasts.genres.horror += 1);
              } else if (selection === "comedy") {
                $(".quiz4").show();
                $(".quiz3").hide();
                console.log("comedy");
                return (podcasts.genres.comedy += 1);
              } else if (selection === "sports") {
                console.log("sports");
                $(".quiz4").show();
                $(".quiz3").hide();
                return (podcasts.genres.sports += 1);
              } else if (selection === "fiction") {
                $(".quiz4").show();
                $(".quiz3").hide();
                return (podcasts.genres.fiction += 1);
              } else {
                console.log("non fiction");
                $(".quiz4").show();
                $(".quiz3").hide();
                return (podcasts.genres.nonFiction += 1);
              }
            });

            $(".answerFour").on("click", function(e) {
              e.preventDefault();
              let selection = $("input[name=test4]:checked").val();
              if (selection === "horror") {
                console.log("horror");
                $(".quiz5").show();
                $(".quiz4").hide();
                return (podcasts.genres.horror += 1);
              } else if (selection === "comedy") {
                $(".quiz5").show();
                $(".quiz4").hide();
                console.log("comedy");
                return (podcasts.genres.comedy += 1);
              } else if (selection === "sports") {
                console.log("sports");
                $(".quiz5").show();
                $(".quiz4").hide();
                return (podcasts.genres.sports += 1);
              } else if (selection === "fiction") {
                $(".quiz5").show();
                $(".quiz4").hide();
                return (podcasts.genres.fiction += 1);
              } else {
                console.log("not hello");
                $(".quiz5").show();
                $(".quiz4").hide();
                return (podcasts.genres.nonFiction += 1);
              }
            });

            $(".answerFive").on("click", function(e) {
              e.preventDefault();
              let selection = $("input[name=test5]:checked").val();
              if (selection === "horror") {
                console.log("horror");
                return (podcasts.genres.horror += 1);
              } else if (selection === "comedy") {
                console.log("comedy");
                return (podcasts.genres.comedy += 1);
              } else if (selection === "sports") {
                console.log("sports");
                return (podcasts.genres.sports += 1);
              } else if (selection === "fiction") {
                console.log("fiction");
                return (podcasts.genres.fiction += 1);
              } else {
                console.log("non fiction");
                return (podcasts.genres.nonFiction += 1);
              }
            });

            $('.calculate').on('click', function(e){
            podcasts.comparison();
            podcasts.recommendation();
            });
          });


//user begins quiz by clicking on button

//scroll down to begin quiz

//first question is asked. Depending on answer, user will be given a certain set of questions

//each answer is assigned a value

//values are in a range that determine a set of podcasts

//question catered towards the length preference will serve as a hard filter

//user will click on button to calculate final score. Make sure user filled out all questions

//final score determines which postcast will be displayed
//podcast result will have link, pic and info

//allow user to retake quiz