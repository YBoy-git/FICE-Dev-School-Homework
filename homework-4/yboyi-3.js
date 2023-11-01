class Warrior {
  static #maxExperience = 10000;
  static #experienceFactor = 100;
  static #startExperience = Warrior.#experienceFactor;
  static #ranks = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];

  static experienceToLevel(experience) {
    return Math.floor(0.01 * experience);
  }
  static experienceToRank(experience) {
    return Math.floor(Warrior.experienceToLevel(experience) / 10);
  }
  static levelToRankNumber(level) {
    return Math.floor(level / 10);
  }
  static isLevelCorrect(level) {
    return level >= Warrior.experienceToLevel(Warrior.#startExperience) && level <= Warrior.experienceToLevel(Warrior.#maxExperience);
  }

  #experience = Warrior.#startExperience;
  #achievements = [];


  experience() {
    return this.#experience;
  }

  level() {
    return Math.floor(0.01 * this.#experience);
  }

  rank() {
    return Warrior.#ranks[Warrior.experienceToRank(this.#experience)];
  }

  // used deep copy to prevent changes in the original array
  achievements() {
    return JSON.parse(JSON.stringify(this.#achievements));
  }

  #accrueExperience(experience) {
    this.#experience += experience;
    if (this.#experience > Warrior.#maxExperience) {
      this.#experience = Warrior.#maxExperience;
    }
  }

  // dirty code, I would like to hear your opinion on how to make this method more readable and maintainable
  #getBattleResult(opponentLevel) {
    const battleResult = {
      experience: 0,
      message: ""
    };

    const levelDifference = this.level() - opponentLevel;
    const areRanksSame = this.rank() === Warrior.#ranks[Warrior.levelToRankNumber(opponentLevel)];

    if (levelDifference >= 2) {
      battleResult.experience = 0;
      battleResult.message = "Easy fight";
    }
    if (levelDifference === 1) {
      battleResult.experience = 5;
      battleResult.message = "A good fight";
    }
    if (levelDifference === 0) {
      battleResult.experience = 10;
      battleResult.message = "A good fight";
    }
    if (levelDifference < 0) {
      if (levelDifference <= -5 && !areRanksSame) {
        battleResult.experience = 0;
        battleResult.message = "You've been defeated";
      }
      else {
        battleResult.experience = 20 * Math.pow(levelDifference, 2);
        battleResult.message = "An intense fight";
      }
    }

    return battleResult;
  }

  battle(opponentLevel) {
    if (!Warrior.isLevelCorrect(opponentLevel)) {
      return "Invalid level";
    }

    const battleResult = this.#getBattleResult(opponentLevel);
    this.#accrueExperience(battleResult.experience);
    return battleResult.message;
  }

  training(trainingInfo) {
    if (trainingInfo[2] > this.level()) {
      return "Not strong enough";
    }

    this.#accrueExperience(trainingInfo[1]);
    this.#achievements.push(trainingInfo[0]);
    return trainingInfo[0];
  }
}
