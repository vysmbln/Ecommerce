 const fs = require('fs');
 
 class UsersRepository {
     constructor(filename) {
        if(!filename) {
            throw new Error('Sorry, no filename')
        }

        this.filename = filename;
        try {
            fs.accessSync(this.filename)
        } catch (err) {
            fs.writeFileSync(this.filename, '[]');
        }
    }
        async getAll() {
           return JSON.parse(
               await fs.promises.readFile(this.filename, {
                   encoding: 'utf8'
               })
           );
           }
 }

const test = async() => {
    const repo = new UsersRepository('users.json');

    const user = await repo.getAll();

    console.log(users);
}