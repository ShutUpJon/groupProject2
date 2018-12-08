module.exports = function(sequelize, DataTypes) {
  var characters = sequelize.define("characters", {
    
    class: {
      type: DataTypes.STRING
      },
    level: {
      type: DataTypes.INTEGER
      },
    race: {
      type: DataTypes.STRING
      },
    background: {
      type: DataTypes.STRING
      },
    alignment: {
      type: DataTypes.STRING
      },
    playerName: {
      type: DataTypes.STRING
      },
    XP: {
      type: DataTypes.INTEGER
      },
    strength: {
      type: DataTypes.INTEGER
      },
    dexterity: {
      type: DataTypes.INTEGER
      },
    constitution: {
      type: DataTypes.INTEGER
      },
    intelligence: {
      type: DataTypes.INTEGER
      },
    wisdom: {
      type: DataTypes.INTEGER
      },
    charisma: {
      type: DataTypes.INTEGER
      },
    acrobatics: {
      type: DataTypes.INTEGER
      },
    animalHandling: {
      type: DataTypes.INTEGER
      },
    arcana: {
      type: DataTypes.INTEGER
      },
    athletics: {
      type: DataTypes.INTEGER
      },
    deception: {
      type: DataTypes.INTEGER
      },
    history: {
      type: DataTypes.INTEGER
      },
    insight: {
      type: DataTypes.INTEGER
      },
    intimidation: {
      type: DataTypes.INTEGER
      },
    investigation: {
      type: DataTypes.INTEGER
      },
    medicine: {
      type: DataTypes.INTEGER
      },
    nature: {
      type: DataTypes.INTEGER
      },
    perception: {
      type: DataTypes.INTEGER
      },
    perform: {
      type: DataTypes.INTEGER
      },
    persuasion: {
      type: DataTypes.INTEGER
      },
    religion: {
      type: DataTypes.INTEGER
      },
    sleightOfHand: {
      type: DataTypes.INTEGER
      },
    stealth: {
      type: DataTypes.INTEGER
      },
    survival: {
      type: DataTypes.INTEGER
      },
    passiveWisdom: {
      type: DataTypes.INTEGER
    },
    proficiencies: {
      type: DataTypes.TEXT,
      notNull: true
    },
    languages: {
      type: DataTypes.TEXT,
      notNull: true
    },
    armorClass: {
      type: DataTypes.INTEGER
    },
    initiative: {
      type: DataTypes.INTEGER
    },
    speed: {
      type: DataTypes.INTEGER
    },
    maxHP: {
      type: DataTypes.INTEGER
    },
    currentHP: {
      type: DataTypes.INTEGER
    },
    tempHP: {
      type: DataTypes.INTEGER
    },
    hitDice: {
      type: DataTypes.STRING
    },
    successes: {
      type: DataTypes.INTEGER
    },
    failures: {
      type: DataTypes.INTEGER
    },
    weaponName1: {
      type: DataTypes.STRING
    },
    weaponAtk1: {
      type: DataTypes.INTEGER
    },
    weaponDmg1: {
      type: DataTypes.TEXT
    },
    weaponName2: {
      type: DataTypes.STRING
    },
    weaponAtk2: {
      type: DataTypes.INTEGER
    },
    weaponDmg2: {
      type: DataTypes.TEXT
    },
    weaponName3: {
      type: DataTypes.STRING
    },
    weaponAtk3: {
      type: DataTypes.INTEGER
    },
    weaponDmg3: {
      type: DataTypes.TEXT
    },
    copperPiece: {
      type: DataTypes.INTEGER
    },
    silverPiece: {
      type: DataTypes.INTEGER
    },
    electrumPiece: {
      type: DataTypes.INTEGER
    },
    goldPiece: {
      type: DataTypes.INTEGER
    },
    platinumPiece: {
      type: DataTypes.INTEGER
    },
    equipment: {
      type: DataTypes.TEXT
    },
    personalityTraits: {
      type: DataTypes.TEXT
    },
    ideals: {
      type: DataTypes.TEXT
    },
    bonds: {
      type: DataTypes.TEXT
    },
    flaws: {
      type: DataTypes.TEXT
    },
    feature1: {
      type: DataTypes.TEXT
    },
    feature2: {
      type: DataTypes.TEXT
    },
    trait1: {
      type: DataTypes.TEXT
    },
    trait2: {
      type: DataTypes.TEXT
    },

  });

  return characters;
  
};
