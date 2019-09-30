module.exports = function check(str, bracketsConfig) {
  // your solution
  if (str.length % 2 >0){return false};
  let openBrackets=[];
  for (let i=0; i<str.length; i++){
    for (let j=0;j<bracketsConfig.length;j++){
     // console.log("i:" + i + " j:" + j + str[i]+bracketsConfig[j][0]);
      if (str[i]==bracketsConfig[j][0]){
        openBrackets.push(str[i]);
       //  console.log("openBrackets: " + openBrackets);
      }
      if (str[i]==bracketsConfig[j][1]){
       // console.log("i:" + i + " j:" + j + str[i] + " " + bracketsConfig[j][1]);
        let lastBracket=openBrackets.pop();
        if (bracketsConfig[j][0]!=lastBracket){ 
          return false;
        }
      }
    }
  }
  return true;
}

 //console.log(check('|(|)',[['(', ')'], ['|', '|']] ));
