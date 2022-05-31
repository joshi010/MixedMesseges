const rand = () => {
    return Math.floor(Math.random()*10);
}

switch (rand()){
    case 0: console.log('Nobody can make you feel inferior without your permission');
        break;
    case 2: console.log('You can never plan the future by the past');
        break;
    case 3: console.log('He who has a why to live, can bear almost any how');
        break;
    case 4: console.log('Take into account that great love and great achievements involve great risk');
        break;
    case 5: console.log('Lost time is never found again');
        break;
    case 6: console.log('He that respects himself is safe from others');
        break;
    case 7: console.log('Common sense is genius dressed in its working clothes');
        break;
    case 8: console.log('In three words I can sum up everything Ive learned about life, IT GOES ON');
        break;
    case 9: console.log('It is the Providence of knowledge to speak, and it is th eprivilege of wisdom to listen');
        break;
    case 10: console.log('Dont take life too seriously, youll never get out of it alive');
        break;
    default: console.log('NULL');
}

rand();