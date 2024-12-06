クラス（class）と関数（function）の違いについて説明します。

### 関数（Function）

- **定義**: 関数は特定のタスクを実行するためのコードの集まりです。
- **使用方法**: 1 つのタスクや計算を実行し、その結果を返すために使用されます。
- **構文**:
  ```php
  function functionName($arg1, $arg2) {
      // 関数の内容
      return $result;
  }
  ```
  ```javascript
  function functionName(arg1, arg2) {
    // 関数の内容
    return result;
  }
  ```
- **例**:
  ```php
  function add($a, $b) {
      return $a + $b;
  }
  ```
  ```javascript
  function add(a, b) {
    return a + b;
  }
  ```

### クラス（Class）

- **定義**: クラスはオブジェクト指向プログラミングの基本的な構成要素で、関連するプロパティ（データ）とメソッド（関数）を持つテンプレートです。
- **使用方法**: 複数の関連するデータや機能を 1 つの単位としてまとめ、オブジェクトを作成するために使用されます。
- **構文**:

  ```php
  class ClassName {
      // プロパティ
      public $property1;
      public $property2;

      // メソッド
      public function methodName() {
          // メソッドの内容
      }
  }
  ```

  ```javascript
  class ClassName {
    // コンストラクタ
    constructor(property1, property2) {
      this.property1 = property1;
      this.property2 = property2;
    }

    // メソッド
    methodName() {
      // メソッドの内容
    }
  }
  ```

- **例**:

  ```php
  class Calculator {
      public function add($a, $b) {
          return $a + $b;
      }

      public function subtract($a, $b) {
          return $a - $b;
      }
  }
  ```

  ```javascript
  class Calculator {
    add(a, b) {
      return a + b;
    }

    subtract(a, b) {
      return a - b;
    }
  }
  ```

### 主な違い

- **目的**: 関数は特定のタスクを実行するために設計されていますが、クラスは関連するデータとメソッドを 1 つのユニットとしてまとめ、複数のオブジェクトを作成するために使用されます。
- **構造**: 関数はシンプルで単一のタスクを実行しますが、クラスは複数のプロパティとメソッドを持ち、オブジェクトの状態と振る舞いを定義します。
- **使用方法**: 関数は単独で呼び出されますが、クラスはインスタンス化してオブジェクトを生成し、そのオブジェクトのメソッドを呼び出す形で使用します。

クラスは、特に大規模なプログラムや複雑なデータ構造を扱う場合に便利です。一方、関数はシンプルなタスクや計算を行う場合に適しています。
