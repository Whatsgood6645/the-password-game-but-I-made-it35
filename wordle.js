const WORDLE_ANSWERS=[
  "cigar","rebut","sissy","humph","awake","blush","focal","evade",
  "naval","serve","heath","dwarf","model","karma","grade","quiet"
  // Replace with full official list if you want
];

function getTodayWordle(){
  const start=new Date("2021-06-19");
  const today=new Date();
  const diff=Math.floor((today-start)/(1000*60*60*24));
  return WORDLE_ANSWERS[diff % WORDLE_ANSWERS.length];
}
