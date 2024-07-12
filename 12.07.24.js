// Q.1. .Implement a Trie (Prefix Tree) data structure with the following functionalities
// - - insert(String word): Inserts the string word into the trie.
// - - search(String word): Returns true if the string word is in the trie, otherwise returns false.
// - - startsWith(String prefix): Returns true if there is any word in the trie that starts with the string prefix, otherwise returns false.

class Node {
  constructor() {
    this.children = {};
    this.isWordEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      let charToInsert = word[i];
      if (!(charToInsert in curr.children)) {
        curr.children[charToInsert] = new Node();
      }

      curr = curr.children[charToInsert];
    }
    curr.isWordEnd = true;
  }

  search(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      let charToFind = word[i];
      if (!(charToFind in curr.children)) {
        return false;
      }

      curr = curr.children[charToFind];
    }

    return curr.isWordEnd;
  }

  startsWithPrefix(prefix) {
    let curr = this.root;

    for (let i = 0; i < prefix.length; i++) {
      let charToFind = prefix[i];
      if (!(charToFind in curr.children)) {
        return false;
      }

      curr = curr.children[charToFind];
    }

    return true;
  }
}

const trie = new Trie();
trie.insert("apple");

console.log(trie.search("appl"));
