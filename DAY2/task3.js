// Define the array of animals
const animals = ["dogs", "cats", "rabbits", "mice"];


animals.forEach((animal) => {
  // Check if the animal name contains 'a' //
  const hasA = animal.includes("a");
  // Print the result in the specified format //
  console.log(`${animal}: ${hasA}`);
});


const animalsWithoutA = animals.filter((animal) => !animal.includes("a"));

// Output the new array
console.log('Animals without the letter "a":', animalsWithoutA);
