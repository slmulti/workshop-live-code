class File {
  constructor(name, extension, size, createdBy) {
    if (File.spaceUsed + size > File.maxSpace) {
      throw new Error('not enough memory');
    }
    File.spaceUsed += size;

    this.name = name;
    this.extension = extension;
    this.size = size;
    this.createdBy = createdBy;
    this.createdAt = new Date().toString();
  }
  fullName() {
    return this.name + '.' + this.extension;
  }
  static maxSpace = 1000;
  static spaceUsed = 0;
  static deleteFile(file) {
    this.spaceUsed -= file.size;
  }
}

class User {
  constructor(username) {
    this.username = username;
  }
  createFile(name, extension, size) {
    return new File(name, extension, size, this.username);
  }
  renameFile(file, newName) {
    console.log(this);
    if (file.createdBy != this.username && this instanceof Admin == false) return 'not your file, mate';
    if (newName.includes('.')) {
      console.log('I have a full stop');
      let x = newName.split('.');
      file.extension = x.pop();
      file.name = x.join('.');
      return;
    }
    file.name = newName;
  }
}

class Admin extends User {
  constructor(username) {
    super(username);
  }
}

let newAdmin = new Admin('jordanAdmin');

let testFile = new File('fileName', 'txt', 4, 'anonymous');
console.log(testFile);
newAdmin.renameFile(testFile, 'newName.spec.js');
console.log(testFile);
