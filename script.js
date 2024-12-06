// classとインスタンスとメソッドのお話
class test {
  //   constructorは初期状態で実行する内容
  constructor(name) {
    console.log("name");
    // クラスの中ではletやconstではなくthisを使う
    this.author = "山田さん";
  }

  // メソッド
  // メソッドの中でreturnを使うとその値を返す.指定しなければundefinedを返す
  hello() {
    console.log("こんにちは");
    return "aaa";
    // メソッドの中で変数を使うとインスタンス変数を返すことも可能
    // return this.author;
  }

  // staticメソッド
  static hello2() {
    console.log("static hello");
  }
}

// インスタンス化を=クラスを実行する
// 変数にインスタンス変数を代入する
// クラスの中で作った変数やメソッドはクラスをインスタンス化しないと使えない
let newTest1 = new test("10");
let newTest2 = new test("20");
console.log(newTest1); // test { author: '山田さん' }
console.log(newTest2.author); // 山田さん

// メソッドの実行
console.log(newTest1.hello()); // aaa

// staticメソッドの実行＝静的メソッド
test.hello2(); // static hello
