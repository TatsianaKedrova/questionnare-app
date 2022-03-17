import {
  questionsReducer,
  setDoesBelieveInHoroscope,
  InitialStateType,
  setYourBirthDate,
} from "./questionsReducer";

let startState: InitialStateType;

beforeEach(() => {
  startState = {
    isBelieveInHoroscope: "no",
    birthDate: null,
    horoscopeSign: "Libra",
  };
});

//didn't finish it yet

test("setting the radio button value correctly", () => {
  const endState = questionsReducer(
    startState,
    setDoesBelieveInHoroscope({ isBelieveInHoroscope: "yes" })
  );

  expect(endState.isBelieveInHoroscope).toBe("yes");
//   expect(endState.isBelieveInHoroscope).not.toBe("no");w
});

// test("setting the birthdate correctly", () => {
//     const endState = questionsReducer(
//         startState,
//         setYourBirthDate({ birthDate: "13/08/2022" })
//       );
    
//       expect(endState.birthDate).toBe("13/08/2022");
//       expect(endState.isBelieveInHoroscope).not.toBe(null);
// });
