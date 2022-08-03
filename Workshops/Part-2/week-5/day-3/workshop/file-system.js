class File {
  constructor(name, extension, size, createdBy) {
    //what is file size?
    //what is max space?
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
    console.log('Delete works!');
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
    if (this.username != file.createdBy) return console.log('not your file, mate')
    if (newName.includes('.'))
  }
}


class Admin extends User {

}