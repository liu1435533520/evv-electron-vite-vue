#!/usr/bin/env node

const fs = require('fs-extra')
const path = require('path')
const { prompt } = require('enquirer');
const { yellow, red } = require('kolorist');
//定义当前目录
const cwd = process.cwd();
if (fs.existsSync(process.cwd() + '/node_modules')) {
    return
}
init().catch((e) => {
    console.error(e)
})
//初始化
async function init() {
    const answers = await prompt([
        {
            type: 'input',
            name: 'name',
            message: yellow('Project name'),
            initial: 'evv-project',
            validate: (name) => {
                const reg = /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/
                return reg.test(name)
            }
        },
        {
            type: 'input',
            name: 'v',
            message: yellow('Project version'),
            initial: '0.0.1'
        },
        {
            type: 'input',
            name: 'author',
            message: yellow('author'),
            initial: ''
        },
        {
            type: 'input',
            name: 'description',
            message: yellow('description'),
            initial: ''
        },
        {
            type: 'select',
            name: 'script',
            message: yellow('use Javascript Or Typescript'),
            choices: ['javascript', 'typescript'],
            initial: 'javascript'
        },
        {
            type: 'select',
            name: 'processor',
            message: yellow('select CSS Pre-processor'),
            choices: ['sass', 'less', 'stylus'],
            initial: 'sass'
        }
    ])
    const distPath = `${cwd}/${answers.name}`;
    if (fs.existsSync(distPath)) {
        console.log(red('Path already exists'));
        return
    }
    fs.copy(path.join(__dirname, `../templates/template-${answers.script}`), distPath)
        .then(async () => {
            const packageJson = fs.readJsonSync(`${distPath}/package.json`);
            packageJson.name = answers.name;
            packageJson.version = answers.v;
            packageJson.description = answers.description;
            packageJson.author.name = answers.author;
            packageJson.build.productName = answers.name;
            packageJson.devDependencies[answers.processor] = 'latest';
            fs.writeJsonSync(`${distPath}/package.json`, packageJson, {
                spaces: 4
            })
            const pkgManager = /yarn/.test(process.env.npm_execpath) ? 'yarn' : 'npm';
            console.log(`\nDone! Now run:\n`)
            console.log(yellow(`  cd  ${answers.name}`))
            console.log(yellow(`  ${pkgManager === 'yarn' ? 'yarn' : 'npm install'}`))
            console.log(yellow(`  ${pkgManager === 'yarn' ? 'yarn dev' : 'npm run dev'}`))
            console.log(`\n`)
        })
        .catch(err => console.error(err))
}
