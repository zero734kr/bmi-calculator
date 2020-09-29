#!/usr/bin/env node

const { execSync } = require("child_process")
const { question } = require("readline-sync")

let obj = {
    python: "py",
    javascript: "js",
    golang: "go"
}

const test = (lang, interpreter) => {
    let now = Date.now()
    if(lang === "golang") {
        execSync(`${__dirname}/${lang}/test/test`)
        console.log(`The execution time of the file ${lang}/${lang === "golang" ? "test/" : ""}test (binary) was ${Date.now() - now}ms. \n\nNote: This time includes the execution time of nodejs execSync.`)
    }

    execSync(`${interpreter} ${__dirname}/${lang}/${lang === "golang" ? "test/" : ""}test.${obj[lang]}`)
    console.log(`The execution time of the file ${lang}/${lang === "golang" ? "test/" : ""}test.${obj[lang]} was ${Date.now() - now}ms. \n\nNote: This time includes the execution time of nodejs execSync.`)
}

const lang = question(`Input the language interpreter to be tested : (node, deno, python, pypy, go) `)

switch(lang) {
case "node": test("javascript", "node"); break
case "deno": test("javascript", "deno"); break
case "python": test("python", "python3"); break
case "pypy": test("python", "pypy3"); break
case "go": test("golang", "")
default: console.log("Aborting"); process.exit(1)
}