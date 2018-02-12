  

const podcasts = {};

podcasts.genres = {
  horror: 0,
  comedy: 0,
  trueCrime: 0,
  nonFiction: 0,
  fiction: 0
};

podcasts.highestGenre = null;
podcasts.filter = null;

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
  podcasts.highestGenre = highest;
  
};


podcasts.test = function() {
  for(let i = 0; i < podcasts.entry.length; i++){
    for (let key in podcasts.entry[i]) {
      if (podcasts.entry[i][key] === podcasts.highestGenre) 
      {
       if (podcasts.entry[i].length === podcasts.filter){    
        $(".podcastResult").show().append(`<div><p>your recommendation is ${podcasts.entry[i].title}</p>
        <p>Genre: ${podcasts.entry[i].genre}</p>
        <p>Description: ${podcasts.entry[i].description}</p>
        <p>Ongoing: ${podcasts.entry[i].ongoing}</p>
        <p>Duration: ${podcasts.entry[i].length}</p>
        <p>Link: <a href=></a>
        </div>
        <div><p><img src =${podcasts.entry[i].img}></p></div>`);
        $(".podcastResult p").fadeIn(1000);
       }        
     }              
     }
    }
  };

podcasts.tally = function(x,y,z) {
    let selection = $(x).val();
    if (selection === "horror") {
    console.log("horror");
    $(z).fadeIn(750).show();
    $(y).hide();
    return (podcasts.genres.horror += 1);
    } 
    else if (selection === "comedy") {
    $(z).fadeIn(750).show();
    $(y).hide();
    console.log("comedy");
    return (podcasts.genres.comedy += 1);
    } 
    else if (selection === "trueCrime") {
    console.log("trueCrime");
    $(z).fadeIn(750).show();
    $(y).hide();
    return (podcasts.genres.trueCrime += 1);
    } 
    else if (selection === "fiction") {
    $(z).fadeIn(750).show();
    $(y).hide();
    console.log("fiction");
    return (podcasts.genres.fiction += 1);
    } 
    else if (selection === "nonFiction") {
    console.log("non fiction");
    $(z).fadeIn(750).show();
    $(y).hide();
    return (podcasts.genres.nonFiction += 1);
    }
    else if (selection ==="short"){
    $(z).fadeIn(750).show();
    $(y).hide();
    return podcasts.filter = selection;    
    }
    else if (selection ==="medium"){
    $(z).fadeIn(750).show();
    $(y).hide();
    return podcasts.filter = selection;    
    }
    else if (selection ==="long") {
    $(z).fadeIn(750).show();
    $(y).hide();
    return (podcasts.filter = selection);  
    }
    else {
    alert('Please Select An Answer!');
    }        
};  



podcasts.entry = [
  {
    title: "serial: season 1",
    value: "trueCrime",
    genre: "true crime",
    description:
      "Serial is an investigative journalism podcast hosted by Sarah Koenig, narrating a nonfiction story over multiple episodes. Season 1 investigated the 1999 murder of Hae Min Lee, an 18-year-old student at Woodlawn High School in Baltimore, Maryland, U.S.",
    ongoing: "no",
    length: "long",
    img: "assets/serial.jpg",
    link: "https://serialpodcast.org/"
  },

  {
    title: "the magnus archives",
    genre: "horror",
    description:
      "The Magnus Archives is a fictional podcast by Rusty Quill. In it, Head Archivist Jonathan Sims recites esoteric and possibly supernatural written statements onto tapes before they are investigated by his colleagues, Martin, Sasha and Tim. Sinister plot threads span across the tapes, hinting at underlying malevolence towards the Institute and its members.",
    ongoing: "yes",
    length: "medium",
    img: "assets/magnus.jpg",
    link: "http://rustyquill.com/the-magnus-archives/"
  },

  {
    title: "bill burr's monday morning podcast",
    genre: "comedy",
    description:
      "Bill Burr's Monday Morning Podcast is a weekly comedy podcast hosted by Bill Burr. During each one-hour episode, Burr speaks without reservation and off-the-cuff about his past and recent experiences, current events, going on tour, sports, and offers advice to questions submitted by listeners.",
    ongoing: "yes",
    length: "long",
    img: "assets/bb.jpg",
    link: "http://billburr.com/podcast-2/"
  },

  {
    title: "Welcome to Nightvale",
    genre: "fiction",
    description:
      "This surreal, fictitious radio show chronicles the goings-on in a nightmarish town called Night Vale. The radio host delivers reports of hooded figures and ghoulish strangers in a perfectly sinister pitch.",
    ongoing: "yes",
    length: "long",
    img: "assets/wtnv.jpg",
    link: "http://www.welcometonightvale.com/"
  },

  {
    title: "99% invisible",
    value: "nonFiction",
    genre: "non-fiction",
    description:
      "99% Invisible is all about the design details we never think about—how people record sound at sporting events, the elements that make McMansions so awful or the placement of missing kids’ pictures on the back of milk cartons. It may sound random, but by the time each episode is over, these explorations illustrate larger truths about the world around us.",
    ongoing: "yes",
    length: "medium",
    img: "assets/inv.png",
    link: "https://99percentinvisible.org/"
  },

  {
    title: "the moth",
    value: "nonFiction",
    genre: "non-fiction",
    description:
      "Moth storytellers stand alone, under a spotlight, with only a microphone and a roomful of strangers. The storyteller and the audience embark on a high-wire act of shared experience which is both terrifying and exhilarating..",
    ongoing: "yes",
    length: "short",
    img: "assets/moth.jpg",
    link: "https://www.themoth.org/"
  },

  {
    title: "stuff you should know",
    value: "nonFiction",
    genre: "non-fiction",
    description:
      "How do landfills work? How do mosquitos work? Join Josh and Chuck as they explore the Stuff You Should Know from genes to the Galapagos in this podcast",
    ongoing: "yes",
    length: "long",
    img: "assets/sysk.jpg",
    link: "https://www.stuffyoushouldknow.com/"
  },

  {
    title: "talking simpsons",
    genre: "comedy",
    description:
      "Join your friends at the Laser Time Podcast Network for a chronological and cromulent exploration of the greatest show ever made! Each podcast tackles a different episode of The Simpsons, breaking down every 22 minutes of animated entertainment into an embiggening discussion about Our Favorite Family.",
    ongoing: "yes",
    length: "medium",
    img: "assets/ts.jpg",
    link: "http://www.lasertimepodcast.com/category/talking-simpsons/"
  },

  {
    title: "Mega64",
    genre: "comedy",
    description:
      "The cast and crew of Mega64 (mega64.com) talk crap for an hour. Rad.",
    ongoing: "yes",
    length: "short",
    img: "assets/mega64.jpg",
    link: "https://mega64.com/"
  },

  {
    title: "criminal",
    value: "trueCrime",
    genre: "true crime",
    description:
      "Criminal explores a different criminal case in each episode across a wide range of topics including stories about a mother-daughter coroner team,a student who manufactured counterfeit banknotes with inkjet printers and an African American man who was wrongfully shot by police in front of his mother and father.",
    ongoing: "yes",
    length: "short",
    img: "assets/criminal.png",
    link: "http://www.thisiscriminal.com/"
  },

  {
    title: "someone knows something",
    value: "trueCrime",
    genre: "true crime",
    description:
      "SOMEONE KNOWS SOMETHING is an original true-crime podcast examining unsolved cases of missing or murdered individuals, produced by CBC Radio One. David Ridgen hosts the weekly series, which focuses on a single Canadian cold case each season in hopes of uncovering new information, while also exploring how the cases have affected the families and communities involved.",
    ongoing: "yes",
    length: "medium",
    img: "assets/sks.jpg",
    link: "http://www.cbc.ca/radio/sks"
  },

  {
    title: "the noSleep podcast",
    genre: "horror",
    description:
      "The NoSleep Podcast is an anthology horror fiction podcast. NoSleep began as a “subreddit” or forum on Reddit where people would exchange scary stories and frightening experiences.",
    ongoing: "yes",
    length: "long",
    img: "assets/ns.jpg",
    link: "https://www.thenosleeppodcast.com/"
  },

  {
    title: "spooked",
    genre: "horror",
    description:
      "True-life supernatural stories, told first-hand by people who can barely believe it happened themselves.",
    ongoing: "yes",
    length: "short",
    img: "assets/spooked.jpg"
  },

  {
    title: "homecoming",
    genre: "fiction",
    description:
      "The scripted psychological thriller opens on a meeting with a soldier who has just returned home and slowly reveals its mystery from there. It boasts voice acting by Oscar Isaac, Catherine Keener and David Schwimmer, among other stars.",
    ongoing: "yes",
    length: "medium",
    img: "assets/hc.jpg"
  },

  {
    title: "alice isn't dead",
    genre: "fiction",
    description:
      "Alice Isn't Dead is a podcast presented as a series of audio diaries by a truck driver in her search across America for the wife she had long assumed was dead",
    ongoing: "yes",
    length: "short",
    img: "assets/ad.png"
  }
];


  $(function() {
            $(".quiz").hide();
            $(".quiz2").hide();
            $(".quiz3").hide();
            $(".quiz4").hide();
            $(".quiz5").hide();
            $(".quiz6").hide();
            $(".quiz7").hide();
            $(".quiz8").hide();
            $(".ready").hide();
            $(".podcastResult").hide();
            $(".calculate").hide();
            $('#reset').hide();

            $("#btnStart").on("click", function(e){
            e.preventDefault();
            console.log('hello');
            $(".quiz").fadeIn(1000).show();
            $("#btnStart").hide();
            $("p").hide();
            });

            $(".answerOne").on("click", function(e) {
              e.preventDefault();
              podcasts.tally("input[name=test]:checked", ".quiz", ".quiz2");
            });

            $(".answerTwo").on("click", function(e) {
              e.preventDefault();
              podcasts.tally("input[name=test2]:checked", ".quiz2", ".quiz3");
            });

            $(".answerThree").on("click", function(e) {
            e.preventDefault();
            podcasts.tally("input[name=test3]:checked", ".quiz3", ".quiz4");
            });

            $(".answerFour").on("click", function(e) {
              e.preventDefault();
              podcasts.tally("input[name=test4]:checked", ".quiz4", ".quiz5");
            });   
            
            $(".answerFive").on("click", function(e) {
              e.preventDefault();
              podcasts.tally("input[name=test5]:checked", ".quiz5", ".quiz6");
            });               

            $(".answerSix").on("click", function(e) {
              e.preventDefault();
              podcasts.tally("input[name=test6]:checked", ".quiz6", ".quiz7");
            });   

            $(".answerSeven").on("click", function(e) {
              e.preventDefault();
              podcasts.tally("input[name=test7]:checked", ".quiz7", ".quiz8");
            });               

            $(".answerEight").on("click", function(e) {
              e.preventDefault();
              podcasts.tally("input[name=test8]:checked", ".quiz8", ".ready");
               $(".calculate").show();
            });   


            $('.calculate').on('click', function(e){
            podcasts.comparison();
            podcasts.test();
            $('.ready').hide();
            $('.calculate').hide();
            $('#reset').show();
            });

            $('#reset').on('click', function(e){
              location.reload();
            });
         
          });


