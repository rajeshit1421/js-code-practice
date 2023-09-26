Promise.all([
    Promise.resolve(1),
    2,
    Promise.resolve(3),
  ]).then(data => {
    console.log(data) // [1, 2, 3]
  })