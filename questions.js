/**
 * 
 *  CARD OBJECT
 * 
 */
function Card(category, question) {

    this.category = category;
    this.question = question;
}

function setQuestionText(questionText) {

}

function selectQuestionIndex(categoryOption) {

    //casual
    if (categoryOption.equals("ON THE ROCKS")) {
        Math.floor(Math.random() * onTheRocks.length);
    }

    //caliente
    if (categoryOption.equals("EXTRA SPICY")) {
        Math.floor(Math.random() * extraSpicy.length);
    }       

}

var drawn_cards_rocks =[];
var drawn_cards_spicy =[];




const category = ["ON THE ROCKS", "EXTRA SPICY"]; // left out , "HAPPY HOUR", "LAST CALL"

const onTheRocks = ["Describe the first time we met. What was your honest first impression of me ?   ",
    "What’ s the worst thing you’ ve ever had to do atwork or school ?   How’ d youhandle it ?   ",
    "If I didn’ t have my currentjob,what do you see medoing ?   ",
    "What’ s something I do thatyou hate ?   ",
    "Describe your first real kiss. Then describe your last kiss. ",
    "Describe your worst bathroom - related disaster ",
    "Have you ever been fired ?  If so,what for ?   If not, whynot ?   ",
    "What’ s something you thinkpeople should appreciatemore about you ?   ",
    "What movie title describesyour last relationship ?   ",
    "What are your vices ?   Havethey gotten better or worseover time ?   ",
    "What’ s something you missabout your last serious ex ?   ",
    "Do you think you arehappier— or sadder— thanthe average person ?   Why ?   ",
    "When was the last timeyou thought you mightdie ?   What made you feelthat way ?   ",
    "Am I friends with anyoneyou can’ t fully endorse ?  Is there anything youthink I should considerabout them ?   ",
    "If you discover you’ ll dietoday,what will be yourbiggest regret ?   ",
    "Your Google history hasbeen made public. Whichsearch is the hardest toexplain ?   ",
    "How are we rightforeach other romantically ?  Certainly you can think of at least one way we’ recompatible. ",
    "What was your mostembarrassing momentthat transpired in public ?  Let’ s all relive it!",
    "What’ s the worst dateyou’ ve ever been on ?   Tellus all the juicy deets. ",
    "Have you ever donesomething you’ re notproud offor money ?  (Outside of an official job. )",
    "What are you anxiousabout ?   Can we reassureyou ?   ",
    "If you had to eat onedelectable part of mydelicious body,what partwould you choose ?   ",
    "What’ s my greatestphysical asset ?   Don’ tbe shy. ",
    "What’ s something aboutyour personal hygienethat you could be morerigorous about ?   ",
    "How often do you thinkabout your own death ?  How,and when,do yoususpect it will happen ?   ",
    "What’ s something that’ sdefinitely not my problem,but somehow alwaysbecomes my problem ?   ",
    "Tell us about a time yougot more wasted thanwas advisable. ",
    "If you were to kill me,howwould you do it ?   ",
    "What’ s something you’ vealways done— and onlyrealized as an adult thatit was weird ?   ",
    "What would you never,ever want my help with ?   ",
    "How would Childhood Youdescribe you now ?   Wouldthat kid like you ?   ",
    "If we were dying of thirst, how would we rationthe last bottle of waterbetween all of us here ?   ",
    "Do you think you are moreor less attractive than theaverage person ?   Why ?   ",
    "What’ s an offense you’ vecommitted that could getyou fired from work ?   ",
    "How long did it take you toget over your last ex ?   Whatdid you do to get over it ?      Are you actually over it ?   ",
    "If I killed somebody,wouldyou help me cover it up ?   ",
    "Tell us about your lastbreakup talk. Who saidwhat ?   Anything you wishyou’ d said ?   ",
    "What’ s the weirdest wayyou’ ve ever earned money ?  How much did you get ?   ",
    "What’ s the worstthing you’ ve done ina relationship ?   ",
    "If we were to meetfor thefirst time today,would webecome friends ?   ",
    "Was your childhood happierthan the average person’ s ?   ",
    "Have you ever dated afriend’ s ex ?   Ever wanted to ?   ",
    "Do you think you’ rehealthier,or more fit, than most people ?   ",
    "You and I are dating. What’ s going tobreakus up ?   ",
    "What type of person haveyou always wanted to date, but never had the chance ?   ",
    "What are your insecurities ?  How do they manifest in    your day - to - day life ?   ",
    "Have you ever had apregnancy scare ?   ",
    "Write me a new datingapp bio in three sentences or less. ",
    "Have you ever been inlove ?   How do you know ?   ",
    "Will we be friends in ten years ?   ",
    "Is there something that’ s difficult to talk about amongst any of us here ?  Should we clear the air right now ?   ",
    "How are we wrong for each other romantically ?   ",
    "What did you get in majortroublefor doing as a kid, and did you ever learnyour lesson ?   ",
    "What album title describes our relationship ?   What is our soundtrack ?   ",
    "Our minds have tradedbodies. What’ s the firstthing you’ re going to do    inmy body ?   ",
    "Tell us about a secret youhad to keep from yourloved ones. ",
    "Describe me in three words. ",
    "When was the last time youcried ?   What happened ?   Doyou need a hug ?   ",
    "Do you think I have amore dominant or moresubmissive personality ?   Doyou have any examples ?   ",
    "How comfortable are wewith one another ?   Whatthings would make usuncomfortable ?   ",
    "Do you think I care moreor less about my reputationthan most people ?   ",
    "Have you ever had adiscovery about yourparents now that you’ vegrown up ?   ",
    "What is your worst copingmechanism ?   Defensemechanism ?   ",
    "What’ s the meanest thingyou’ ve seen me do ?  ",
    "Is there a limit to whatyou would do    for the rightamount of money ?   ",
    "Do you think you’ re moreprone to addiction thanother people ?   Either way, how do you know ?   ",
    "Describe my perfect lifepartner. Have I been onthe right track to find thisperson ?   ",
    "Have you broken any bones ?  What happened ?   Did youhear the crack ?   ",
    "What’ s a time when youlet    a problem go onfor too longbefore you addressed it ?   ",
    "When was the last timeyou spoke to an ex ?   Whatwas it about ?   Was thereany tension ?   ",
    "If I were a chain restaurant, which one would I be andwhy ?   ",
    "Have you ever talked aboutme behind my back ?   If yes, what did you say ?   ",
    "If someone offered you$10,000 to never talk tome again,would you ?   ",
    "Someone who’ s never metme asks you what I’ m like. How do you answer ?   ",
    "What’ s something youthink people should neverjoke about ?   ",
    "Tell us about the one thatgot away. ",
    "When was the last timeyou lost your cool ?   Whathappened ?   How do youfeel about it now ?   ",
    "What’ s something you’ restill self - conscious about ?  Are you working on it ?   ",
    "If you found out I’ d beenembezzling from work, would you rat me out ?   ",
    "Assuming you were single, what would it takefor youto get back together withyour last ex ?   ",
    "Have I ever told you a secret that you’ velet slip to a third party ?   "
];

const extraSpicy = [
    "Have you ever found yourself wearing somebody else’s underwear?  ",
    "Who’s had more sex, you or your parents ?   ",
    "Quick! Name your favorite porn star. And tell us about all the wonderful qualities that make them special.  ",
    "What’s the most surprising discovery you’ ve made about your own body ?   ",
    "When was the last time you had unprotected sex ?   Did it ever cross your mind ?   ",
    "If a studio were to make a porn specifically for you, tailored to your specific tastes, what would it be like ?   ",
    "How did your parents talk to you about sex ?   ",
    "Inadvertent nudity.  Tell us about when it happened to you.  ",
    "How would your partner (or your latest ex) describe your sex life with a movie title ?   ",
    "What will be the sexy nickname they give you when you live at the old - folks’ home ?   ",
    "Have you ever been sexual on camera ?   Would you want to ?   ",
    "You can send a message back in time to your teenage self about sex.  What advice will you impart ?   ",
    "Who here is the most likely to star in an adult film ?   Who here is the most likely to make and direct porn ?   ",
    "What sex-related word are you not sure how to pronounce ?   ",
    "What’ s the kinkiest thing you’ ve asked someone else to do ?  ",
    "If you can abstain from sex and masturbation for one full year, you’ ll win $27, 000 and a nice used car.  Will you make it ?   ",
    "Are you a good kisser?   How do you know ?   ",
    "You can send a message back in time to your teenage self about sex.  What advice will you impart ?   ",
    "Who here is the most likely to star in an adult film ?   Who here is the most likely to make and direct porn ?   ",
    "What did you observe from porn that you later realized was unrealistic ?   How’ d you make this discovery ?   ",
    "Imagine we’re your future (or current) children. How do you present the birds -     and - the - bees talk to us ?   ",
    "What scared you the most about sex as you were coming of age ?   ",
    "Do you see yourself committing to one sexual partner for the rest of your life ?   ",
    "What’s the kinkiest thing you were ever asked to do, but you declined instead ?   ",
    "Are you loud during sex ?  ",
    "Demonstrate with a dramatic interpretation of your signature sex sounds.  ",
    "Tell us about a time in which a romantic partner just didn’ t understand how to do a certain sex thing.  ",
    "Do you have recurring fantasies that kind of trouble you, or surprise you ?   What are they ?   ",
    "Do you think you have more or less sex than your next - door neighbors ?   ",
    "Are you more of a top, a bottom, or versatile ?   Or do these labels not apply to you ?   ",
    "Have you ever had sexy times in public ?  ",
    "Describe the present state  of your pubic hair.  ",
    "How would you describe your nipples to a blindperson ?   ",
    "When it comes to your sexual orientation, have you ever considered experimenting ?  ",
    "Have you ever paid for porn ?   If so— how much money is in your spank bank budget ?   ",
    "Do you know where your G - spot is ?   Are you sure ?   ",
    "List all the illicit drugs you’ ve tried. What more would you like to try ?  ",
    "How confident are you in  your oral sex skills ?   Howdo you know ?  "
];