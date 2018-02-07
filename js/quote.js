// RANDOM QUOTES FOR ETHPYRAMID
// no one cares about copyright, tenmei 2018
//
// use id 'quoteDisplay' and call newQuote() to pull a random string

var quotes = [
	'Partnered with Ethereum',
	'Sponcered Unofficially by Bitcoin',
	'What better place to put your childs\' college fund?.',
	'Unofficially partnered with Ethereum',
	'Unofficially partnered with AuzCoin',
	'If your money is in here, it can\'t get funneled to ISIS.',
	'Facebook approved',
	'Now mineable in Minecraft.',
	'UNOFFICIALLY PARTNERED WITH AUSCON.',
	'What the fuck else are you going to do?',
	'Press ffffffffffffffffffffffffffffffffffff to donate respects (and receive ether).',
	'Announcing an Announcement soon.',
	'Partnered with Justin Sun',
	'It\'s almost like nothing you\'ve almost not seen before.',
	'Now you can lose money buying and selling.',
	'If Fast and Furious can do seven iterations, we can\'t we?',
	'Officially unofficially partnered with Bitcoin.',
	'Smart contract designed and audited by the most honest people you\'ll never identify or meet.',
	'We guarantee to provide no guarantees.',
	'Your most likely at the bottom of the Pyramid.',
	'Send ETH/Private keys here 0x48368EBBB08284F5e069F9d401c9Fcf6c18075b5',
	'Because it worked so well for you last time.',
	'As safe as keeping your savings in Greece.',
	'Putting the fun back into reverse funnel.',
	'BITCOIN BANS CHINA.',
	'Let\'s face it. You\'d be happy with a Honda at this point.',
	'Illuminati Approved.',
	'BITCONNNEEEEEEECCCCTTTTTTTT x2',
	'Look down. Shadows stay on the floor.',
	'What\'s the point of having fuck it money if you never say fuck it?',
	'Remember that you won\'t be paying taxes, you\'ll be paying fines.',
	'Worth more than one United States Dollar.',
	'HODL Pyramid: EthPyramid Forever.',
	'HODLPyramid: the gift will give 1 lambo.',
	'Great team, amazing team. I worked with team on many such projects! - Vitalik Skelly Money',
	'Tripple your ETH send to 0x000000000000000',
	'Don\'t lie, we know you haven\'t read the smart contract.',
	'what\'s a smart contract?',
	'Great team, solid project, no whitepaper, no active devs, SOLID BUY.',
	'Where the backdoor is in the front.',
	'Micro-dolphins welcome too.',
	'Buy high, sell low.',
	'Alt-f4 for a free coin.',
	'Let us know if you see a TX for 866 ETH.',
	'If you don\'t become the whale, you might have to fuck one.',
	'Get rich quick, lose it all even quicker.',
	'Competitive interest rates.',
	'Past performance is not indicative of future results.',
	'Look for our ad in the upcoming edition of Cosmo.',
	'Stably unstable.',
	'An ether a day keeps the ATO away.',
	'232 tokens of ETH on the chart, 232 tokens of ETH, take one down, trade it around... 1 token of ETH on the chart.',
	'The world is not anymore the way it used to be! Mmmm, no, no, no!',
	'It\'s a reverse funnel system!',
	'You\'re like, a berry salesman now?',
	'Want to make Bank Shill this to you Parents',
	'Tax time, Lose your money here',
	'100 risk no responsibility',
	'Home loans accepted here'
	'Some people say it\'s better than busting a nut.'
]

function newQuote() {
	var rand = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[rand];
}
