class test {
  //   constructorは初期状態で実行する内容
  constructor(name) {
    console.log("name");
    // クラスの中ではletやconstではなくthisを使う
    this.name = name;
  }
}

// インスタンスを作成=クラスを実行する
let test1 = new test("10");
let test2 = new test("20");
