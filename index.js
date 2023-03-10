import PromptSync from "prompt-sync";
import chalk from "chalk";

const prompt = PromptSync();

let soma = 0;

for (let i = 0; i < 5; i++) {
    soma += Number(prompt(chalk.bgBlueBright('Escreva um número')))
}

const media = soma / 5

console.log(`A média dos números ${media}`)