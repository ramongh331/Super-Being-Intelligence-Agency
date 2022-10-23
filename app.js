let superHeroData, idSelect;

const apiKey = "10221482092109391";
const baseURL = "https://superheroapi.com/api.php/";
const $heroName = $("#heroName");
const $heroID = $("#heroID");
const $bio = $("#bio");
const $realName = $("#real-name");
const $alterEgo = $("#alter-ego");
const $alias = $("#alias");
const $birthPlace = $("#birth-place");
const $appearance = $("#appearance");
const $publisher = $("#publisher");
const $alignment = $("#alignment");
const $gender = $("#gender");
const $race = $("#race");
const $weight = $("#weight");
const $eyeColor = $("#eye-color");
const $hairColor = $("#hair-color");
const $intelligence = $("#intelligence");
const $strength = $("#strength");
const $speed = $("#speed");
const $durability = $("#durability");
const $power = $("#power");
const $combat = $("#combat");
const $image = $("#hero-pic");

const $input = $("#herosDropDown");

$input.on("change", handleGetData);

function handleGetData(event) {
  // event.preventDefault();

  idSelect = event.target.value;
  // console.log(idSelect);

  $.ajax({
    url: `${baseURL}${apiKey}/${idSelect}`,
  }).then(
    (data) => {
      superHeroData = data;
      // console.log(data);
      render();
    },
    (error) => {
      console.log("bad request", error);
    }
  );
}

function render() {
  $heroName.text(superHeroData.name);
  $heroID.text(superHeroData.id);
  $realName.text(superHeroData.biography["full-name"]);
  $alterEgo.text(superHeroData.biography["alter-egos"]);
  $alias.text(superHeroData.biography.aliases.join(", "));
  $birthPlace.text(superHeroData.biography["place-of-birth"]);
  $appearance.text(superHeroData.biography["first-appearance"]);
  $publisher.text(superHeroData.biography["publisher"]);
  $alignment.text(superHeroData.biography.alignment);
  $gender.text(superHeroData.appearance.gender);
  $race.text(superHeroData.appearance.height[0]);
  $weight.text(superHeroData.appearance.weight[0]);
  $eyeColor.text(superHeroData.appearance["eye-color"]);
  $hairColor.text(superHeroData.appearance["hair-color"]);
  $intelligence.text(superHeroData.powerstats.intelligence);
  $strength.text(superHeroData.powerstats.strength);
  $speed.text(superHeroData.powerstats.speed);
  $durability.text(superHeroData.powerstats.durability);
  $power.text(superHeroData.powerstats.power);
  $combat.text(superHeroData.powerstats.combat);
  $image.html(`<img src="${superHeroData.image.url}">`);

  // change element style in javascript
  const $intelligenceProgress = $("#intelligenceProgress");
  $intelligenceProgress.css(
    "width",
    superHeroData.powerstats.intelligence + "%"
  );
}
