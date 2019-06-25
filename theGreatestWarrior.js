// Business Rules:

// A warrior starts at level 1 and can progress all the way to 100.
// A warrior starts at rank "Pushover" and can progress all the way to "Greatest".
// The only acceptable range of rank values is "Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest".
// Warriors will compete in battles. Battles will always accept an enemy level to match against your own.
// With each battle successfully finished, your warrior's experience is updated based on the enemy's level.
// The experience earned from the battle is relative to what the warrior's current level is compared to the level of the enemy.
// A warrior's experience starts from 100. Each time the warrior's experience increases by another 100, the warrior's level rises to the next level.
// A warrior's experience is cumulative, and does not reset with each rise of level. The only exception is when the warrior reaches level 100, with which the experience stops at 10000
// At every 10 levels, your warrior will reach a new rank tier. (ex. levels 1-9 falls within "Pushover" tier, levels 80-89 fall within "Champion" tier, etc.)
// A warrior cannot progress beyond level 100 and rank "Greatest".
// Battle Progress Rules & Calculations:

// If an enemy level does not fall in the range of 1 to 100, the battle cannot happen and should return "Invalid level".
// Completing a battle against an enemy with the same level as your warrior will be worth 10 experience points.
// Completing a battle against an enemy who is one level lower than your warrior will be worth 5 experience points.
// Completing a battle against an enemy who is two levels lower or more than your warrior will give 0 experience points.
// Completing a battle against an enemy who is one level higher or more than your warrior will accelarate your experience gaining. The greater the difference between levels, the more experinece your warrior will gain. The formula is 20 * diff * diff where diff equals the difference in levels between the enemy and your warrior.
// However, if your warrior is at least one rank lower than your enemy, and at least 5 levels lower, your warrior cannot fight against an enemy that strong and must instead return "You've been defeated".
// Every successful battle will also return one of three responses: "Easy fight", "A good fight", "An intense fight". Return "Easy fight" if your warrior is 2 or more levels higher than your enemy's level. Return "A good fight" if your warrior is either 1 level higher or equal to your enemy's level. Return "An intense fight" if your warrior's level is lower than the enemy's level.
// Logic Examples:

// If a warrior level 1 fights an enemy level 1, they will receive 10 experience points.
// If a warrior level 1 fights an enemy level 3, they will receive 80 experience points.
// If a warrior level 5 fights an enemy level 4, they will receive 5 experience points.
// If a warrior level 3 fights an enemy level 9, they will receive 720 experience points, resulting in the warrior rising up by at least 7 levels.
// If a warrior level 8 fights an enemy level 13, they will receive 0 experience points and return "You've been defeated". (Remember, difference in rank & enemy level being 5 levels higher or more must be established for this.)
// If a warrior level 6 fights an enemy level 2, they will receive 0 experience points.
// Training Rules & Calculations:

// In addition to earning experience point from battles, warriors can also gain experience points from training.
// Training will accept an array of three elements (except in java where you'll get 3 separated arguments): the description, the experience points your warrior earns, and the minimum level requirement.
// If the warrior's level meets the minimum level requirement, the warrior will receive the experience points from it and store the description of the training. It should end up returning that description as well.
// If the warrior's level does not meet the minimum level requirement, the warrior doesn not receive the experience points and description and instead returns "Not strong enough", without any archiving of the result.


const MAX_EXPERIENCE = 10000;
const ranks = [
  'Pushover',
  'Novice',
  'Fighter',
  'Warrior',
  'Veteran',
  'Sage',
  'Elite',
  'Conqueror',
  'Champion',
  'Master',
  'Greatest'
];

function calcLevel(experience) {
  return Math.floor(experience / 100);
}

function calcRank(level) {
  return Math.floor(level / 10);
}

class Warrior {
  constructor() {
    this._level = 1;
    this._rank = 0;
    this._experience = 100;
    this._achievements = [];
  }

  battle(enemyLevel) {
    if (enemyLevel < 1 || enemyLevel > 100) {
      return 'Invalid level';
    }

    let enemyRank = calcRank(enemyLevel);

    if (enemyRank > this._rank && enemyLevel > this._level + 4) {
      return "You've been defeated";
    }

    let experienceEarned = 0;
    let response = 'Easy fight';

    if (enemyLevel == this._level) {
      experienceEarned = 10;
      response = 'A good fight';
    } else if (enemyLevel == this._level - 1) {
      experienceEarned = 5;
      response = 'A good fight';
    } else if (enemyLevel > this._level) {
      let diff = enemyLevel - this._level;
      experienceEarned = 20 * diff * diff;
      response = 'An intense fight';
    }

    this.gainExperience(experienceEarned);
    return response;
  }

  training(data) {
    let description = data[0];
    let experienceEarned = data[1];
    let minLevel = data[2];

    if (this._level < minLevel) {
      return 'Not strong enough';
    }

    this.gainExperience(experienceEarned);
    this._achievements.push(description);
    return description;
  }

  gainExperience(experience) {
    this._experience += experience;
    if (this._experience >= MAX_EXPERIENCE) {
      this._experience = MAX_EXPERIENCE;
    }
    this._level = calcLevel(this._experience);
    this._rank = calcRank(this._level);
  }

  level() {
    return this._level;
  }
  rank() {
    return ranks[this._rank];
  }
  experience() {
    return this._experience;
  }
  achievements() {
    return this._achievements;
  }
}

let Goku = new Warrior();

console.log(Goku.level(), 1, 'All warriors must start as LV 1');
console.log(Goku.rank(), 'Pushover', 'All warriors must start as a Pushover');
console.log(
  Goku.achievements(),
  [],
  'All warriors must start off with no achievements to their name'
);
console.log(
  Goku.training(['Do ten push-ups', 95, 1]),
  'Do ten push-ups',
  'After obtaining a mastery, the achievement must be listed and returned'
);
console.log(
  Goku.level(),
  1,
  "After your warriors's first training, he/she must still be LV 1"
);
console.log(
  Goku.battle(0),
  'Invalid level',
  'LV 0 enemies do not exist. This must be a mistake!'
);
console.log(
  Goku.battle(1),
  'A good fight',
  'After fighting against a warrior of equal level, your warrior should provide the appropiate response'
);
console.log(
  Goku.level(),
  2,
  'With that fight under your belt, your warrior should now be ascended to LV 2'
);
console.log(
  Goku.achievements(),
  ['Do ten push-ups'],
  "Don't forget what your warrior has achieved so far"
);
console.log(
  Goku.rank(),
  'Pushover',
  'A pushover, however, your warrior should remain'
);
console.log(
  Goku.battle(3),
  'An intense fight',
  'Another battle, this time with a slightly more skilled enemy, should have your warrior provide an appropiate response'
);
console.log(Goku.level(), 2, 'Your should still remain LV 2');
console.log(
  Goku.training(['Survive one night at the Forest of Death', 170, 2]),
  'Survive one night at the Forest of Death',
  'After obatining a mastery, your achievement must be listed and returned'
);
console.log(
  Goku.training(['Mastered the Spirit Bomb', 1580, 10]),
  'Not strong enough',
  "Your warrior isn't skilled enough to do everything just yet"
);
console.log(
  Goku.achievements(),
  ['Do ten push-ups', 'Survive one night at the Forest of Death'],
  "Your warrior shouldn't forget his achievements"
);
console.log(
  Goku.battle(2),
  'A good fight',
  "Your enemy isn't exactly your level. Provide the appropriate response"
);
console.log(Goku.level(), 4, 'Your warrior should now be LV 3');
console.log(
  Goku.experience(),
  400,
  "Your warrior's experience should be relative to his level"
);
console.log(
  Goku.battle(9),
  'An intense fight',
  "Your warrior picked a fight with a relatively strong enemy. Nothing he can't hold his/er own to. Prpvide the appropiate response"
);
console.log(
  Goku.battle(14),
  "You've been defeated",
  "Your warrior picked a fight he/she can't win."
);
console.log(
  Goku.level(),
  9,
  'Your level should be high than our last viewing, regardless of our recent defeat'
);
console.log(
  Goku.battle(12),
  'An intense fight',
  "Your enemy's in a whole other league, but he's still within your reach"
);
console.log(
  Goku.battle(8),
  'Easy fight',
  'Going back to the small fry, huh? Provide the appropiate respone'
);
console.log(Goku.rank(), 'Novice', "You definately ain't no pushover anymore!");
console.log(
  Goku.experience(),
  1080,
  "Startin' to get some serious experience points?"
);
console.log(Goku.battle(140), 'Invalid level', 'Something not right here...');
console.log(
  Goku.training(['Mastered the Spirit Bomb', 1580, 10]),
  'Mastered the Spirit Bomb',
  "Remember that training you weren't strong enough to do before? What's different now?"
);
console.log(Goku.level(), 26, 'Finally got some decent skill in you');
console.log(Goku.rank(), 'Fighter', "You ain't in the beginner tiers anymore!");
console.log(
  Goku.battle(30),
  'An intense fight',
  "The enemy's strong, but you can hold your own"
);
console.log(Goku.rank(), 'Fighter', 'Still a fighter at heart');
console.log(Goku.level(), 29, 'Your ascention nears...');
console.log(Goku.experience(), 2980, '...ever so closely');
console.log(
  Goku.training(['Mastered the Shadow Clone Jutsu', 19, 6]),
  'Mastered the Shadow Clone Jutsu',
  "Another technique doesn't hurt"
);
console.log(Goku.experience(), 2999, '...sooooo very close');
console.log(Goku.level(), 29, 'But no cigar');
console.log(
  Goku.battle(32),
  'An intense fight',
  'Gotta get your gain right. What kinda fight helps with that?'
);
console.log(
  Goku.rank(),
  'Warrior',
  "You ain't the greatest, but you still a..."
);
console.log(Goku.experience(), 3179, "Keep rackin' the experience");
console.log(Goku.battle(39), 'An intense fight', "Keep the big fights poppin'");
console.log(
  Goku.rank(),
  'Veteran',
  "I think you're onto something with this whole fighting thing"
);
console.log(
  Goku.experience(),
  4459,
  'Think you know your way around a fight now?'
);
console.log(Goku.level(), 44, '...Well, do you');
console.log(
  Goku.training(['Defeat Superman', 10000, 100]),
  'Not strong enough',
  "Don't jump the gun just yet!"
);
console.log(
  Goku.training(['Mastered the Spirit Gun', 1340, 43]),
  'Mastered the Spirit Gun',
  "That's more up your alley"
);
console.log(
  Goku.rank(),
  'Sage',
  'What becomes of veterans when they start to become old?'
);
console.log(Goku.experience(), 5799, "Quite the fighter now, aren't ya?");
console.log(Goku.level(), 57, 'Keep rising!');
console.log(
  Goku.battle(61),
  'An intense fight',
  "Nothin' a Sage can't handle!"
);
console.log(Goku.rank(), 'Elite', "You're very good at what you do");
console.log(Goku.experience(), 6119, 'Experience needs to match the title');
console.log(
  Goku.training(['Mastered the Perfect Roundhouse Kick', 1781, 60]),
  'Mastered the Perfect Roundhouse Kick',
  'Patrick Swayze would be proud'
);
console.log(Goku.rank(), 'Conqueror', "You're becoming a legend, yo!");
console.log(
  Goku.experience(),
  7900,
  "Ten lifetimes' worth of experience right here!"
);
console.log(
  Goku.battle(83),
  'An intense fight',
  "A conqueror's gonna conquer, amirite?"
);
console.log(Goku.level(), 82, 'This is a level to be feared');
console.log(
  Goku.rank(),
  'Champion',
  'The world looks to you for your skills now'
);
console.log(
  Goku.experience(),
  8220,
  "You're geeting too good that this fighting stuff"
);
console.log(
  Goku.training(['Defeat The Four Horsemen', 1100, 82]),
  'Defeat The Four Horsemen',
  'Can the judgement of the Gods stop you anymore?'
);
console.log(
  Goku.battle(100),
  "You've been defeated",
  'Your power is godlike, but there is still greater'
);
console.log(Goku.rank(), 'Master', 'Your competition is quickly strinking');
console.log(Goku.level(), 93, 'Your greatness is rarely matched');
console.log(Goku.experience(), 9320, 'Your power is rising...overflowing!');
console.log(
  Goku.training(['Win the Intergalaxtic Tournament', 679, 91]),
  'Win the Intergalaxtic Tournament',
  'Can you prove to be the Master of Masters?'
);
console.log(Goku.experience(), 9999, 'Only one stands in your way now...');
console.log(
  Goku.training(['Fight Superman to a draw', 11000, 99]),
  'Fight Superman to a draw',
  'If you can do this... I think you might be the one'
);
console.log(Goku.level(), 100, '..Wait, can it be?');
console.log(Goku.experience(), 10000, '..Is it really you?');
'Greatest',
  'Yes, you truly are the greatest!!! ... as soon as you pass this test at least';

console.log(
  Goku.training(['Defeat Superman', 10000, 100]),
  'Defeat Superman',
  '*creates shrine in your honor*'
);
console.log(
  Goku.achievements(),
  [
    'Do ten push-ups',
    'Survive one night at the Forest of Death',
    'Mastered the Spirit Bomb',
    'Mastered the Shadow Clone Jutsu',
    'Mastered the Spirit Gun',
    'Mastered the Perfect Roundhouse Kick',
    'Defeat The Four Horsemen',
    'Win the Intergalaxtic Tournament',
    'Fight Superman to a draw',
    'Defeat Superman'
  ],
  'What a career you have!'
);



// Code Examples:
const levelOfRank = {};
// Create a Warrior class
class Warrior {
  constructor() {
    this._level = 5;
    this._rank = 'Pushover';
    this._experence = 100;
    this._achievements = [];
  }
  experience() {
    return this._experience;
  }

  level() {
    return this._level;
  }
  rank() {
    return this._rank;
  }
  achievements() {
    return this._achievements;
  }

  battle(level) {
    if (level < 0 || level > 100) {
      return 'Invalid level';
    }
    if (level == this._level) {
      this._experence += 10;
    }
    if (level - this._level === -1) {
      this._experence += 5;
      return 'A good fight';
    }
    if (level - this._level <= -2) {
      return 'Easy fight';
    }
  }
  training(arr) {
    if (arr[2] >= this._level) {
      arr[1] += this._experence;
    }
    this._achievements.push(arr[0]);
    return arr[0];
  }
}
// It must support level, rank, experience, achievements, training(event), and battle(enemy_level) methods

