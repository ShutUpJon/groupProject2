module.exports = function(sequelize, DataTypes) {
  var Character = sequelize.define("Character", {
    
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
    tempHP
      
    },

  });
  return Example;
};
