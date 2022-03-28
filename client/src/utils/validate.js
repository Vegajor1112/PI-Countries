const validate = (form) => {
  const { nombre, dificultad, duracion, temporada, idCountries } = form;
  const nombreRegex = new RegExp(/^[A-Za-z\s]*$/);
  const difRegex = new RegExp(/[1-5]/);
  const durationRegex = new RegExp(/[1-8]/);
  const validSeasons = ["Winter", "Summer", "Autumn", "Spring"];
  const errors = [];

  if (!nombreRegex.test(nombre) || nombre === "")
    errors.push("Activity name can not contain numbers or symbols");

  if (!difRegex.test(dificultad)) errors.push("Difficulty range: 1 to 5");

  if (!durationRegex.test(duracion))
    errors.push("Duration rango: 1 to 8 hours");

  if (!validSeasons.includes(temporada))
    errors.push("Must select a valid season");

  if (idCountries.length === 0) errors.push("Must select unless 1 country");

  if (errors.length === 0)
    return { valid: true, message: "All inputs are valid" };
  else return { valid: false, message: errors };
};

export default validate;
