export const getRandomFullname = () => {
  const maleNames = [
      "Александр", "Сергей", "Дмитрий", "Андрей", "Максим",
      "Евгений", "Игорь", "Николай", "Роман", "Владимир"
  ];

  const femaleNames = [
      "Анна", "Екатерина", "Мария", "Ольга", "Дарья",
      "Татьяна", "Светлана", "Елена", "Наталья", "Юлия"
  ];

  const maleSurnames = [
      "Иванов", "Петров", "Сидоров", "Кузнецов", "Смирнов",
      "Попов", "Лебедев", "Козлов", "Новиков", "Морозов"
  ];

  const femaleSurnames = [
      "Иванова", "Петрова", "Сидорова", "Кузнецова", "Смирнова",
      "Попова", "Лебедева", "Козлова", "Новикова", "Морозова"
  ];

  // Случайный выбор пола
  const isMale = Math.random() < 0.5;

  let randomName, randomSurname;

  if (isMale) {
      randomName = maleNames[Math.floor(Math.random() * maleNames.length)];
      randomSurname = maleSurnames[Math.floor(Math.random() * maleSurnames.length)];
  } else {
      randomName = femaleNames[Math.floor(Math.random() * femaleNames.length)];
      randomSurname = femaleSurnames[Math.floor(Math.random() * femaleSurnames.length)];
  }

  return `${randomName} ${randomSurname}`;
}