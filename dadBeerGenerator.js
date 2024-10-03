
//Storage of Introduction (First piece of data)
const introPhrases = ["Well, son,", "Listen up,", "Here’s a tip from your old man:", "Gather 'round, kiddos,", 
    "I’ve got a nugget of wisdom for you,", "Back in my day,", "Let me tell you something,", "When I was your age,",
     "Now hear this,", "I once learned the hard way,", "As your father, I feel obligated to say,", "Just so you know,", 
     "You know what they say,", "Take it from me,", "If there’s one thing I know,", "Here’s a thought,", "Here's a beer fact for you,",
    "Quick tip for you,", "Not to brag, but,", "I’m just saying,", "You might not believe this, but,", "Here's some dad knowledge,", 
    "Now, I don’t want to preach, but,", "One day, you’ll thank me for this,", "Here’s what they won’t teach you in school,", 
    "Sit down for this one,", "Trust me on this,", "Your mom won't tell you, but,", "Your grandfather told me this,", "And remember,"]


//Storage of Beer advice (Second piece of data)
const beerAdvice = ["Always keep your beer cold, like your ex's heart.", 
    "If the beer is warm, your day is wrong.", 
    "A six-pack is good for two things: your fridge and your abs.",
    "Never drink beer with a straw, it’s against nature.", 
    "IPA stands for 'I Prefer Alcohol'.", 
    "If your beer tastes like water, you're drinking water.", 
    "There’s a reason they call it a 'growler'.",
    "The best beer is an open one.", 
    "Life is too short to drink bad beer.",
    "Beer before wine, you’ll be fine; beer before breakfast, you’re probably on vacation.", "A beer a day keeps the boring away.", 
    "You can't trust someone who says they don't like beer.", "Never argue with someone holding a pint; they’re clearly in the right.",
    "Hops are nature’s gift to mankind.", "Beer doesn’t ask silly questions, beer understands.", 
    "Beer is proof that God loves dads and wants them to be happy.", 
    "Keep calm and lager on.", "A cold beer is the best answer to any question.", 
    "You can't buy happiness, but you can buy beer.", "Beer: because adulting is hard.", 
    "Stout in doubt, you won’t pout.", "The foam is just the icing on the cake.",
    "Don’t let your pint run dry, it's bad luck.", "If at first you don’t succeed, try a different beer.",
    "Beer before bed guarantees sweet dreams.", "There’s a beer for every occasion, and every occasion for beer.", 
    "Always have a backup beer, just in case.", "The secret ingredient to every barbecue is beer.",
    "A beer shared is a problem halved.", "Beer is not just a drink; it’s a conversation starter."]

//Storage of Outro (Third Peice of Advice)
const outroPhrases = ["And that’s why they call it 'hops-itality'.", "Now, let’s crack open a cold one and watch the game.", 
    "Remember, I’m not a regular dad, I’m a beer dad.", "And that, my dear, is why you should always double check the cooler.", 
    "So, grab a brew and let's get to work.", "But don’t tell your mother I told you this.", "Now, that’s the dad way.", 
    "So remember, stay thirsty and stay humble.", "And if you don’t believe me, ask any dad.", "Cheers to that!", "And now you know why they call me ‘the beer whisperer’.", 
    "Just something to think about next time you pour one.", "Trust me, I’ve been around the beer block.", "Now, who’s up for a beer run?", 
    "And that, my friend, is what we call a 'dad-approved' tip.", "So the next round is on you.", "Stay golden, and keep the beer cold.", 
    "You’re welcome.", "Consider that life advice, free of charge.", "Let’s make it a two-beer problem.", "And with that, let's toast to fatherhood.", 
    "The more you know, the more you brew.", "That’s why I’m always right.", "And that, kids, is why you should always listen to your father.",
    "Take it or leave it, but you might as well take it.", "Let's raise a glass to that wisdom.", "Don’t worry, there’s plenty more where that came from.", 
    "One day, you’ll understand.", "Now, if you’ll excuse me, I’ve got a beer to finish.", "And don’t forget to tip your bartender."]


//Generator part

const generatePhrase = (iterations) => {
    
    let completeArray =[];


    if (typeof iterations !== 'number'){
        return 'parameter must be a number';
    }

    for (let i = 0; i < iterations; i++){
        let phraseArray = [];

        let introSpot = introPhrases[Math.floor(Math.random() * introPhrases.length)];
        let beerSpot = beerAdvice[Math.floor(Math.random() * beerAdvice.length)];
        let outroSpot = outroPhrases[Math.floor(Math.random() * outroPhrases.length)];

        phraseArray.push(introSpot, beerSpot, outroSpot)
        finalString = phraseArray.join(' ');
        completeArray.push(finalString);
    }

    return completeArray;
    
    
}
//Randomly selects array element in each array

document.getElementById('beerButton').addEventListener('click', function (){
    console.log('clicked');
    let dadPhrase = generatePhrase(1);
    let newDadPhrase = '"' + dadPhrase + '"';
    document.getElementById('dad-response').innerText = newDadPhrase;
});