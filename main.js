// creat data object

const devotions = {
  'bible verses': {

    love: [
      'For this is how God loved the world: He gave his one and only Son, so that everyone who believes in him will not perish but have eternal life. - John 3:16',
      'But God showed his great love for us by sending Christ to die for us while we were still sinners. - Romans 5:8',
      'Love is patient and kind. Love is not jealous or boastful or proud. - 1 Corinthians 13:4'
    ],

    hope: [
      'For I know the plans I have for you,” says the LORD. “They are plans for good and not for disaster, to give you a future and a hope. - Jeremiah 29:11',
      'And this hope will not lead to disappointment. For we know how dearly God loves us, because he has given us the Holy Spirit to fill our hearts with his love. - Romans 5:5',
      'Faith shows the reality of what we hope for; it is the evidence of things we cannot see. - Hebrews 11:1'
    ],

    fear: [
      'For God has not given us a spirit of fear and timidity, but of power, love, and self-discipline. - 2 Timothy 1:7',
      'Don\'t worry about anything; instead, pray about everything. Tell God what you need, and thank him for all he has done. - Philippians 4:6',
      'But when I am afraid, I will put my trust in you. - Psalms 56:2'
    ]
  },

  'bible plans': {
    love: [
      'Love God Love Others', 'Love God Love Family', 'Love Mercy', 'Reckless Love'
    ],

    hope: [
      'Hope Is', 'Real Hope', 'Raising Hope'
    ],

    fear: [
      'Fear Not', 'Overcoming Fear', 'Fighting Fear'
    ]
  }
};

const verseAndPlanGenerator = (emotion) => {
  //randomize bible verse from object
  const mood = emotion.toLowerCase();
  if (mood === 'love') {
    let loveVerse = devotions['bible verses'].love[Math.floor(Math.random() * devotions['bible verses'].love.length)];
    let lovePlan = devotions['bible plans'].love[Math.floor(Math.random() * devotions['bible plans'].love.length)];
    return `${mood.toUpperCase()}:\n ${loveVerse}\nPLAN: \n ${lovePlan}`;
  } else if(mood === 'hope') {
    let hopeVerse = devotions['bible verses'].hope[Math.floor(Math.random() * devotions['bible verses'].hope.length)];
    let hopePlan = devotions['bible plans'].hope[Math.floor(Math.random() * devotions['bible plans'].hope.length)];
    return `${mood.toUpperCase()}:\n ${hopeVerse}\nPLAN: \n ${hopePlan}`;
  } else if(mood === 'fear') {
    let fearVerse = devotions['bible verses'].fear[Math.floor(Math.random() * devotions['bible verses'].fear.length)];
    let fearPlan = devotions['bible plans'].fear[Math.floor(Math.random() * devotions['bible plans'].fear.length)];
    return `${mood.toUpperCase()}:\n ${fearVerse}\nPLAN: \n ${fearPlan}`;
  } else {
    return 'Please enter a valid mood';
  }

}
console.log(verseAndPlanGenerator('anxious'));
