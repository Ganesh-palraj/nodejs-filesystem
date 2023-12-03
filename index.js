// const express = require("express");
// import express from "express";
// const app = express();

// const PORT = 4000;
// app.get("/", function (request, response) {
//   response.send("🙋‍♂️, 🌏 🎊✨🤩");
// })/*  */;

// app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

// WEB DEVELOPER TASK

// NodeJS File system

// Task details :

// 1. Write API endpoint which will create a text file in a particular folder

//   * Content of the file should be the current timestamp

const now = new Date();
console.log(now);
const currentYear = now.getFullYear();

const currentMonth = now.getMonth(); // January is 0, February is 1, and so on

const currentDay = now.getDate();

const currentHour = now.getHours();

const currentMinutes = now.getMinutes();

const currentSeconds = now.getSeconds();

const formattedDate = `${currentYear}-${currentMonth + 1}-${currentDay}`;
const formattedTime = `${currentHour}:${currentMinutes}:${currentSeconds}`;

import fs from "node:fs";
import path from "node:path";

const Current_Timestamp_data = formattedDate + formattedTime;

fs.writeFile("current date-time.txt", Current_Timestamp_data, (err) => {
  console.log("completed writing!!");
});

//  2. Write API endpoint to retrive the text file in that particular folder

const dirPath = "C:DRIVE C1\vscodeTasksNodeJs tasks\node-task-1";

fs.readdir(dirPath, "utf8", function (err, files) {
  const targetExtension = ".txt"; // Change to the desired file extension
  const targetFiles = files.filter((file) => {
    return path.extname(file).toLowerCase() === targetExtension;
  });

  console.log(targetFiles); // List of filenames with the specified extension
});
