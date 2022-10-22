let superHeroData, idSelect;

const apiKey = "10221482092109391";
const baseURL = "https://superheroapi.com/api.php/";
const $heroName = $("#heroName");
const $heroID = $("#heroID");
const $bio = $("#bio");
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
      render();
    },
    (error) => {
      console.log("bad request", error);
    }
  );
}
// handleGetData();

function render() {
  $heroName.text(`Name: ` + superHeroData.name);
  $heroID.text(`Id: ` + superHeroData.id);
  $bio.text(`Bio: ` + superHeroData.biography.full - name); //ask how to get rid of name being crossed out.
}

// function displayVals() {
//   var singleValues = $("#herosDropDown").val();
//   console.log(singleValues);
// }

// displayVals();
