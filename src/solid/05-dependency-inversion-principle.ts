interface DeveloperInterface{
    develop(): void;
}

class BackEndDeveloper implements DeveloperInterface{
    develop(): void {
        this.writeJava();
    }

    writeJava(): void {
        console.log('Java');
    }
}

class FrontEndDeveloper implements DeveloperInterface{
    develop(): void {
        this.writeJavascript();
    }

    writeJavascript(): void {
        console.log('Javascript');
    }
}

class DevOpsDeveloper implements DeveloperInterface{
    develop(): void {
        this.writeBash();
    }

    writeBash(): void {
        console.log('Bash');
    }
}

class MobileDeveloper implements DeveloperInterface{
    develop(): void {
        this.writeSwift();
    }

    writeSwift(): void {
        console.log('Swift');
    }
}

class Project{
    public developers: DeveloperInterface[];

    constructor(){
        this.developers = [];
    }

    implement(): void{
        this.developers.forEach((developer) => {
            developer.develop();
        })
    }
}

const project = new Project();
project.developers.push(new BackEndDeveloper());
project.developers.push(new FrontEndDeveloper());
project.developers.push(new DevOpsDeveloper());
project.developers.push(new MobileDeveloper());
project.implement();