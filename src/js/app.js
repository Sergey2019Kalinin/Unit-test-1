console.log('app worked');

const game = new Game();
game.start();

import {
	Game,
	GameSavingData,
	readGameSaving as loadGame ,
	writeGameSaving as saveGame
} from './game.js'

export default function healthValue (healthObj) {

	if (Number(healthObj.health) > 50) {
		return "healthy"

	} else if (50 >= Number(healthObj.health) && Number(healthObj.health) >= 15) {
		return "wounded"

	} else if (Number(healthObj.health) < 15) {
		return "critical"
	}
}
