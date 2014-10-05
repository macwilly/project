/*Mackenzie Willard
* This is the file that containes the data for the select option menue
* as long as the data is formated the same other menues can be built like this
*/

var data = Object();
data['doYouGo'] = ['Do you go to the gym','Yes I go to the gym','No I do not go to the gym'];

//the options from do you go to the gym
data['Yes I go to the gym'] = ['What do you do at the gym','Classes','Cardio','Weight Training'];
data['No I do not go to the gym'] = ['dyel','noDoNotLift.jpg'];

//the options from what do you do at the gym
data['Classes'] = ['dyel','takeClasses.jpg'];
data['Cardio'] = ['dyel','cardio.jpg'];
data['Weight Training'] = ['What do you do for weight training', 'Machines','TRX','Body Weight','Free Weights'];

// the options from what do you do for weight trainging
data['Machines'] = ['dyel','machineLift.jpg'];
data['TRX'] = ['dyel','trx.jpg'];
data['Body Weight'] = ['dyel','kittyYoga.jpg'];
data['Free Weights'] = ['What are you doing with the free weights', 'Body Building','Crossfit'];

//the options from what are you doing with the free weights
data['Body Building'] = ['What is your body building like','I look like I body build','I am strong', 'I compete'];
data['Crossfit'] = ['dyel','crossfit.jpg'];

// the options from what is your body building like 
data['I look like I body build'] = ['Are you aesthetic','Yes I am aesthetic','I am Big','No I am not aesthetic'];
data['I am strong'] = ['Are you really strong','Yes I am really strong', 'Well I guess not that strong'];
data['I compete'] = ['Do you actually compete','Yes of course I compete','No I just said I did to see the options here'];

//the options from are you aesthetic
data['Yes I am aesthetic'] = ["Are people'Mirin","Of course people are 'Mirin","Yeah not really sure what 'Mirin is"];
data['I am Big'] = ['dyel','spongebobBig.jpg'];
data['No I am not aesthetic'] = ['dyel','notAesthetic.jpg'];

//the data from are you really strong
data['Yes I am really strong'] = ['Can you do 3 plates for 15 reps','Yes I can','No that is too much for me'];
data['Well I guess not that strong'] = ['dyel','noImNotStrong.jpg'];

// the options for do you actutally compete
data['Yes of course I compete'] = ['Did you win','Yes I won','No I did not'];
data['No I just said I did to see the options here'] = ['dyel','noCompetition.jpg'];

//the options from are people 'Mirin
data["Of course people are 'Mirin"] = ['dyel','notMirin.jpg'];
data["Yeah not really sure what 'Mirin is"] = ['dyel','whatIsMirin.jpg'];

// the options from Can you do 3 plates for 15 reps
data['Yes I can'] =  ['dyel','batmanLift.jpg'];
data['No that is too much for me'] =  ['dyel','ronBench.jpg'];

//the options from Did you win
data['Yes I won'] = ['Are you Arnold','Yes I am Arnold','No I am not'];
data['No I did not'] =  ['dyel','didNotWin.jpg'];

//the options from are you arnold
data['Yes I am Arnold'] = ['dyel','arnold.jpg'];
data['No I am not'] = ['dyel','notArnold.jpg'];