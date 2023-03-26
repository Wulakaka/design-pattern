abstract class AbstractFile {
    protected name: string = '';

    public printName() {
        console.log(this.name)
    }

    public abstract Add(file: AbstractFile): boolean;
    public abstract Remove(file: AbstractFile):boolean;

    public abstract GetChild(): AbstractFile[];
}

class AFolder extends AbstractFile{
    private childrenList: Set<AbstractFile>= new Set();
    constructor(name: string) {
        super();
        this.name = name
    }

    Add(file: AbstractFile) {
        this.childrenList.add(file)
        return true
    }
    Remove(file: AbstractFile) {
        this.childrenList.delete(file)
        return true
    }

    GetChild() {
        return Array.from(this.childrenList)
    }
}

class AFile extends AbstractFile{
    constructor(name: string) {
        super();
        this.name = name
    }
    public Add(file: AbstractFile) {
        return false
    }
    public Remove(file: AbstractFile) {
        return false
    }
    GetChild(): AbstractFile[] {
        return [];
    }
}

const root : AbstractFile = new AFolder('root')
const folderA: AbstractFile = new AFolder('folderA')
const fileB: AbstractFile = new AFile('fileB')
folderA.printName()
fileB.printName()

console.log(root.Add(fileB))
console.log(root.Add(folderA))
console.log(root.GetChild())