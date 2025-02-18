import './style.css'

const onClickAdd = () => {
    // テキストボックスの値の取得し、初期化する
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    // li生成
    const li = document.createElement("li");
    
    // div生成
    const div = document.createElement("div");
    div.className = "list-row";

    // p生成
    const p = document.createElement("p");
    p.className = "todo-item";
    p.innerText = inputText;

    // button(完了)タグ作成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";

    //button(削除)タグ作成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";

    // liタグの子要素に各要素を設定
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    li.appendChild(div);
    

    //未完了リストに追加
    document.getElementById("incomplete-list").appendChild(li);
}

document.getElementById("add-button").addEventListener("click", onClickAdd);