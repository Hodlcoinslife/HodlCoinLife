// RANDOM QUOTES FOR HODLCoin.life
// no one cares about copyright, tenmei 2018
//
// use id 'quoteDisplay' and call newQuote() to pull a random string

var quotes = [
	'Partnered with Ethereum',
	'Sponsered Unofficially by Bitcoin',
	'What better place to put your childs\' college fund?.',
	'Unofficially partnered with Ethereum',
	'Unofficially partnered with AuzCoin',
	'If your money is in here, it can\'t get funneled to ISIS.',
	'Facebook approved',
	'Now mineable in Minecraft.',
	'UNOFFICIALLY PARTNERED WITH AUSCON.',
	'Lambos made daily',
	'May the odds be forever in your favor',
	'What the fuck else are you going to do?',
	'Press ffffffffffffffffffffffffffffffffffff to donate respects (and receive ether).',
	'Justin Sun approved',
	'Announcing an Announcment soon!',
	' Sell me this pen.',
	'Now you can lose money buying and selling.',
	'If Fast and Furious can do seven iterations, we can\'t we?',
	'9/11 was an inside job',
	'Smart contract designed and audited by the most honest people you\'ll never identify or meet.',
	'We guarantee to provide no guarantees.',
	'Because it worked so well for you last time.',
	'As safe as keeping your savings in banks circa 2007.',
	'Putting the fun back into reverse funnel.',
	'Illuminati approved',
	'Started from the bottom now were here',
	'Let\'s face it. You\'d be happy with a Honda at this point.',
	'Over 232 satisfied customers.',
	'Look down. Shadows stay on the floor.',
	'What\'s the point of having fuck it money if you never say fuck it?',
	'Remember that you won\'t be paying taxes, you\'ll be paying fines.',
	'Worth more than one United States Dollar.',
	'HODLCoin: the gift that keeps giving to HODLers.',
	'Great team, amazing team. I worked with team on many such projects! - Vitalik Skelly Money',
	'You don\'t understand any of this.',
	'Don\'t lie, we know you haven\'t read the smart contract.',
	'what\'s a smart contract?',
	'Great team, good roadmap, big sneks.',
	'Where the backdoor is in the front.',
	'Limited edition, Unlimited supply.',
	'Micro-dolphins welcome too.',
	'Buy high, sell low.',
	'Alt-f4 for a free coin.',
	'Doge Coins biggest competition.',
	'If you don\'t become the whale, you might have to fuck one.',
	'Get rich quick, lose it all even quicker.',
	'Competitive interest rates.',
	'You only lose if you sell.',
	'To the MOOONNNNN',
	'Stably unstable.',
	'An ether a day keeps the ATO away.',
	'232 tokens of ETH on the chart, 232 tokens of ETH, take one down, trade it around... 1 token of ETH on the chart.',
	'The world is not anymore the way it used to be! Mmmm, no, no, no!',
	'Who wants a moon lambo?',
	'You\'re like, a berry salesman now?',
	'Some people say it\'s better than busting a nut.',
	'Dont pay tax, Hide your funds here',
	'John mcaffe pump and dump approved ',
	'Put in 1 ETH take out 0.9 ETH seconds later',
	'For complaints please tweet me @rogerkver',
	'Hodl coins the real bitcoin ',
	'Already better then Ripple ',
	'Best financial mistake you will ever make',
	'Instant private transactions over CIA TOR exit nodes',
	'Press f5 for more quotes',
	'Ctrl + Alt + Down Arrow to tripple your HODL',
	'Ctrl W for free hodl coins',
	'Free willy',
	'Have a whale of a time',
	'FOMO is just getting started',
	'Penis',
	'Cunt',
	'Guarenteed returns even during BTC turmoil',
	'Ya mums ya dad!',
	'Get 10% on each buy and sell shared between HODLERS',
	'Next Stop Marss!',
	'Nissan Pulsars given away daily',
	'Next Stop Marss!',
	'Nissan Pulsars given away daily',
	'Secret partners with CCA',
	'Paid Shillers welcome',
	'My mum said hodlcoin is cool',
	'Pink Stocks - 50% commission motherfuckerrrrrr!',
	'hodl4life',
	'Get Rich or Dye HODLing',
	'hodl4life',
	
]

function newQuote() {
	var rand = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[rand];
}
