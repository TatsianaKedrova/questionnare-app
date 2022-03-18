import {
  questionsReducer,
  setDoesBelieveInHoroscope,
  InitialStateType,
  setYourBirthDate,
  setYourHoroscope,
} from "./questionsReducer";

let startState: InitialStateType;

beforeEach(() => {
  startState = {
    isBelieveInHoroscope: "no",
    birthDate: null,
    horoscopeSign: "Libra",
    mode: false,
  };
});

//didn't finish it yet

test("setting the radio button value correctly", () => {
  const endState = questionsReducer(
    startState,
    setDoesBelieveInHoroscope({ isBelieveInHoroscope: "yes" })
  );

  expect(endState.isBelieveInHoroscope).toBe("yes");
  expect(endState.isBelieveInHoroscope).not.toBe("no");
});

test("setting the birthdate correctly", () => {
  const endState = questionsReducer(
    startState,
    setYourBirthDate({ birthDate: "13/08/2022" })
  );

  expect(endState.birthDate).toBe("13/08/2022");
  expect(endState.isBelieveInHoroscope).not.toBe(null);
});

test("setting the zodiac correctly", () => {
  const endState = questionsReducer(
    startState,
    setYourHoroscope({ horoscopeSign: "Libra" })
  );

  expect(endState.birthDate).toBe("Libra");
  expect(endState.isBelieveInHoroscope).not.toBe("Virgo");
});
