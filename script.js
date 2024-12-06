// classとインスタンスとメソッドのお話
// 大事なことはクラスの中で作った変数やメソッドはクラスをインスタンス化しないと使えない

class test {
  //   constructorは初期状態で実行する内容
  constructor(name) {
    console.log("name");
    // クラスの中ではletやconstではなくthisを使う
    // 継承後はthisは使えない
    this.author = "山田さん";
    this.hoge = "hoge";
  }

  // メソッド
  // メソッドの中でreturnを使うとその値を返す.指定しなければundefinedを返す
  hello() {
    console.log("こんにちは");
    return "aaa";
    // メソッドの中で変数を使うとインスタンス変数を返すことも可能
    // return this.author;
  }

  // staticメソッド：インスタンス化しなくても使えるメソッド
  // static hello2() {
  //   console.log("static hello");
  //   console.log("this.hoge");
  // }
}

//継承化　親クラスを継承して子クラスを作成する
// //testクラスを継承してCopyTestクラスを作成する
// class CopyTest extends test {
//   constructor(name) {
//     super(name);
//   }
// CopyHello() {
//   console.log("CopyHello");
//   super.hello();
// }
// }

// インスタンス化=クラスを実行する
// 変数にインスタンス変数を代入する
// クラスの中で作った変数やメソッドはクラスをインスタンス化しないと使えない
let newTest1 = new test("10");
let newTest2 = new test("20");
console.log(newTest1); // test { author: '山田さん' }
console.log(newTest2.author); // 山田さん

// メソッドの実行
console.log(newTest1.hello()); // aaa

// staticメソッドの実行＝静的メソッド
//インスタンス化しないと他のクラスや変数、メソッドは使えない
// test.hello2(); // static hello

// 継承化の実行
// let copyTest = new CopyTest("20");
// console.log(copyTest);

// メソッドの継承化
// let CopyHello = new CopyTest.CopyHello();
// console.log(CopyHello);

// サンプル例：Dateオブジェクトを使って現在の日付を取得する
let newDate = new Date();
console.log(newDate.getFullYear()); // 2024
console.log(newDate.getMonth()); // 11
console.log(newDate.getDate()); // 6
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
