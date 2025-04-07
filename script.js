function firstWord(s) {
  // your code here
	let ans="";
	for(let ch of s)
		{
			if(ch!==" ")
			{
				ans+=ch;
			}
			else
			{
				if(ans.length!==0)break;
			}
		}
	return ans; 
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
