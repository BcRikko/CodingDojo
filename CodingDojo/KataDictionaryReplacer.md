http://www.codingdojo.org/cgi-bin/index.pl?KataDictionaryReplacer

KataDictionaryReplacer
========================================

このカタは、簡単な文字列置換だ。
Corey Hainesのプレゼンを聞いて思いついた。


仕様
----------------------------------------

引数が文字列と連想配列のメソッドを作る。
そして、$で囲まれているキーと、対応する連想配列の値を置換する。


テストデータ
----------------------------------------

1. input: "", dict empty → output: ""
2. input: "$temp$", dict["temp", "temporary"] → output: "temporary"
3. input: "$temp$ here comes the name $name$", dict["temp", "temporary"] ["name", "John Doe"] → output: "temporary here comes the name John Doe"