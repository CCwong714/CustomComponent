// Truthiness
// 就是把if(numUsersOnline) 不给===/==什么的情况下将 false , 0 , "" , null , undefined ,NaN视为 false


export function getUsersOnlineMessage(numUsersOnline: number) {
  if (numUsersOnline) {
    return `There are ${numUsersOnline} online now!`;
  }
  return "Nobody's here. :(";
}
