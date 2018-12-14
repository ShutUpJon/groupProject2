var db = require("../models");

module.exports = function(app) {
  // Get all characters
  app.get("/api/characters", function(req, res) {
    db.characters.findAll({}).then(function(dbCharacters) {
      res.json(dbCharacters);
    });
  });

  // Create a new character

  
  app.post("/api/characters", function(req, res) {
    db.characters.create({

      classAndLvl: req.body.classAndLvl,
      race: req.body.race,
      background: req.body.background,
      playerName: req.body.playerName,
      alignment: req.body.alignment,
      XP: req.body.XP,
      strength: req.body.strength,
      dexterity: req.body.dexterity,
      constitution: req.body.constitution,
      intelligence: req.body.intelligence,
      wisdom: req.body.wisdom,
      charisma: req.body.charisma,
      acrobatics: req.body.acrobatics,
      animalHandling: req.body.animalHandling,
      arcana: req.body.arcana,
      athletics: req.body.athletics,
      deception: req.body.deception,
      history: req.body.history,
      insight: req.body.insight,
      intimidation: req.body.intimidation,
      investigation: req.body.investigation,
      medicine: req.body.medicine,
      nature: req.body.nature,
      perception: req.body.perception,
      perform: req.body.perform,
      persuasion: req.body.persuasion,
      religion: req.body.religion,
      sleightOfHand: req.body.sleightOfHand,
      stealth: req.body.stealth,
      survival: req.body.survival,
      passiveWisdom: req.body.passiveWisdom,
      proficiencies: req.body.proficiencies,
      languages: req.body.languages,
      armorClass: req.body.armorClass,
      initiative: req.body.initiative,
      speed: req.body.speed,
      maxHP: req.body.maxHP,
      currentHP: req.body.currentHP,
      tempHP: req.body.tempHP,
      hitDice: req.body.hitDice,
      successes: req.body.successes,
      failures: req.body.failures,
      weaponName1: req.body.weaponName1,
      weaponAtk1: req.body.weaponAtk1,
      weaponDmg1: req.body.weaponDmg1,      
      weaponName2: req.body.weaponName1,
      weaponAtk2: req.body.weaponAtk1,
      weaponDmg2: req.body.weaponDmg1,      
      weaponName3: req.body.weaponName1,
      weaponAtk3: req.body.weaponAtk1,
      weaponDmg3: req.body.weaponDmg1,
      copperPiece: req.body.copperPiece,
      silverPiece: req.body.silverPiece,
      electrumPiece: req.body.electrumPiece,
      goldPiece: req.body.goldPiece,
      platinumPiece: req.body.platinumPiece,
      equipment: req.body.equipment,
      personalityTraits: req.body.personalityTraits,
      ideals: req.body.ideals,
      bonds: req.body.bonds,
      flaws: req.body.flaws,
      feature1: req.body.feature1,
      feature2: req.body.feature2,
      trait1: req.body.trait1,
      trait2: req.body.trait2
      

      
      
    }).then(function(dbCharacters){
      res.json(dbCharacters);
    });
  });

  // Delete an character by id
  app.delete("/api/characters/:id", function(req, res) {
    db.Character.destroy({ where: { id: req.params.id } }).then(function(dbCharacter) {
      res.json(dbCharacter);
    });
  });
};
