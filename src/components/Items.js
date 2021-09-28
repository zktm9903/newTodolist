import Component from "../core/Component.js";

export default class Items extends Component {
  setup () {
    this.$state = { items: [] };
  }
  template () {
    const { items } = this.$state;
    return `
    <div id= "background" class="background">
    <div class="memoBox">
        <div class="topOfMemoBox">
            <div class="title">
                <p>To-Do List</p>
            </div>
            <p id="current"></p>
        </div>
        <div id="ListBox">
        ${items.map(item => `<li>${item}</li>`).join('')}
        </div>
        <div id="inputBox" onchange='save()'>
            <input type="text" name="toDotext" id="toDotext">
            <img class="removeButton" src="./remove.png" onclick="removeList()">
        </div>
    </div>
</div>
    `
  }

//   setEvent () {
//     this.$target.querySelector('button').addEventListener('click', () => {
//         makeDiv
//       const { items } = this.$state;
//       this.setState({ items: [ ...items, `item${items.length + 1}` ] });
//     });
//   }


  save(){
    var toDotext = document.getElementById("toDotext");
    var Info = toDotext.value;


    var new_ListInfoBox = document.createElement("div");
    var new_left_div = document.createElement("div");
    var new_right_div = document.createElement("div");
    var new_img = document.createElement("img");
    var new_p = document.createElement("p");

    new_ListInfoBox.setAttribute("class", "ListInfoBox");
    new_left_div.setAttribute("class", "ListInfoImgBox");
    new_right_div.setAttribute("class", "ListInfoTxtBox");
    new_img.setAttribute("src", "./check-mark.png");
    new_img.setAttribute("id", "checkImg");
    new_img.setAttribute("onclick", "checkDo(this)");
    new_img.setAttribute("class", "checkImgOpacity");
    new_p.setAttribute("id","ListInfoTxt");

    new_p.innerHTML = Info;

    new_left_div.appendChild(new_img);
    new_right_div.appendChild(new_p);

    new_ListInfoBox.appendChild(new_left_div);
    new_ListInfoBox.appendChild(new_right_div);

    listBox.appendChild(new_ListInfoBox);

    var newList = new toDoListInfo(Info, new_ListInfoBox);
    toDoListInfoArr.push(newList);
    //console.log(toDoListInfoArr)

    toDotext.value= null;
    this.setState({ items: [ ...items, newList ] });
  }
}