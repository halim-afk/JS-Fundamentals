const arg1 = process.argv[2]; // أول argument بعد اسم السكريبت

if (arg1 === undefined) {
  console.log("no argument");
} else {
  console.log("argument found:", arg1);
}

