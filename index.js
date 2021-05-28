// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// // if (hasDriversLicense && hasGoodVision) {
// //   console.log('Sara is able to drive');
// // } else {
// //   console.log('Someone else should drive...');
// // }

// const isTired = true;
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log('Sara is able to drive');
// } else {
//   console.log('Someone else should drive...');
// }

// const ageWalter = 30;
// const ageJenny = 35;

// const minimumAge = 18;

// let areInLove = true;

// if ((ageWalter, ageJenny >= minimumAge && areInLove)) {
//   console.log('ambos son mayores de edad y se van a casar!');
// } else {
//   console.log('uno de los dos es menor de edad');
// }

// const firstEncounterScoreDolphins = 100;
// const secondEncounterScoreDolphins = 111;
// const thirdEncounterScoreDolphins = 100;

// const firstEncounterScoreKoalas = 101;
// const secondEncounterScoreKoalas = 100;
// const thirdEncounterScoreKoalas = 100;

// const averageScoreDolphins =
//   (firstEncounterScoreDolphins +
//     secondEncounterScoreDolphins +
//     thirdEncounterScoreDolphins) /
//   3;

// const averageScoreKoalas =
//   (firstEncounterScoreKoalas +
//     secondEncounterScoreKoalas +
//     thirdEncounterScoreKoalas) /
//   3;

// const drawGame = averageScoreDolphins === averageScoreKoalas;

// console.log(averageScoreDolphins);
// console.log(averageScoreKoalas);

// console.log(drawGame + ' empate');

// if (averageScoreDolphins >= 100 && averageScoreKoalas < averageScoreDolphins) {
//   console.log('DELFINES ganan!');
// } else if (averageScoreDolphins < averageScoreKoalas && averageScoreKoalas >= 100) {
//   console.log('KOALAS ganan!');
// } else if (averageScoreDolphins === averageScoreKoalas && averageScoreDolphins, averageScoreKoalas >= 100) {
//   console.log("INCREÍBLE, AMBOS GANAN!!!!!");
// } else {
//   console.log("Ninguno gana");
// }

// const day = 'sunday';

// switch (day) {
//   case 'monday':
//     console.log('Planear agenda');
//     console.log('Ir a trabajar');
//     break;
//   case 'tuesday':
//     console.log('preparar la agenda del martes');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('esta es una agenda para dos dias');
//     break;
//   case 'friday':
//     console.log('reparo BUGS');
//   case 'saturday':
//   case 'sunday':
//     console.log('Disfrutar del fin de semana');
//     break;
//   default:
//     console.log('No es un día válido');
// }

// if (day === 'monday') {
//   console.log('Planear agenda');
//   console.log('Ir a trabajar');
// } else if (day === 'tuesday') {
//   console.log('preparar la agenda del martes');
// } else if (day === 'wednesday' || day === 'thursday') {
//   console.log('esta es una agenda para dos dias');
// } else if (day === 'friday') {
//   console.log('reparo BUGS');
// } else if (day === 'saturday' || day === 'sunday') {
//   console.log('Disfrutar del fin de semana');
// } else {
//   console.log('Esto ni siquiera es un día de verdad');
// }

// const age = 23;
// age >= 18
//   ? console.log('I like to drink wine :)')
//   : console.log('I like to drink water :(');

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const total = bill + tip;
console.log(
  `El monto es: $${bill} y la propina $${tip}, dando un total de $${total}`
);
