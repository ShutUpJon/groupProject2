// Get references to page elements

var $classAndLvl = $("#characterInfo1");
var $race = $("#characterInfo4");
var $background = $("#characterInfo2");
var $alignment = $("#characterInfo5");
var $playerName = $("#characterInfo3");
var $XP = $("#characterInfo6");
var $strength = $("#strength");
var $dexterity = $("#dexterity");
var $constitution = $("#constitution");
var $intelligence = $("#intelligence");
var $wisdom = $("#wisdom");
var $charisma = $("#charisma");
var $acrobatics = $("#acrobatics");
var $animalHandling = $("#animalHandling");
var $arcana = $("#arcana");
var $athletics = $("#athletics");
var $deception = $("#deception");
var $history = $("#history");
var $insight = $("#insight");
var $intimidation = $("#intimidation");
var $investigation = $("#investigation");
var $medicine = $("#medicine");
var $nature = $("#nature");
var $perception = $("#perception");
var $perform = $("#perform");
var $persuasion = $("#persuasion");
var $religion = $("#religion");
var $sleightOfHand = $("#sleightofhand");
var $stealth = $("#stealth");
var $survival = $("#survival");
var $passiveWisdom = $("#passivewisdom");
var $proficiencies = $("#proficiencies");
var $languages = $("#languages");
var $armorClass = $("#armorclass");
var $initiative = $("#initiative");
var $speed = $("#speed");
var $maxHP = $("#maxhp");
var $currentHP = $("#currenthp");
var $tempHP = $("#temphp");
var $hitDice = $("#hitdice");
var $successes = $("#successes");
var $failures = $("#failures");
var $weaponName1 = $("#weaponname1");
var $weaponAtk1 = $("#weaponatk1");
var $weaponDmg1 = $("#weapondmg1");
var $weaponName2 = $("#weaponname2");
var $weaponAtk2 = $("#weaponatk2");
var $weaponDmg2 = $("#weapondmg2");
var $weaponName3 = $("#weaponname3");
var $weaponAtk3 = $("#weaponatk3");
var $weaponDmg3 = $("#weapondmg3");
var $copperPiece = $("#copperpiece");
var $silverPiece = $("#silverpiece");
var $electrumPiece = $("#electrumpiece");
var $goldPiece = $("#goldpiece");
var $platinumPiece = $("#platinumpiece");
var $equipment = $("#equipment");
var $personalityTraits = $("#personalitytraits");
var $ideals = $("#ideals");
var $bonds = $("#bonds");
var $flaws = $("#flaws");
var $feature1 = $("#feature1");
var $feature2 = $("#feature2");
var $trait1 = $("#trait1");
var $trait2 = $("#trait2");



// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var character = {
    classAndLvl: $classAndLvl.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
