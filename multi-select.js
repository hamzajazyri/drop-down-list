const multiselectItems = () => {
    
    const values = new Set();

    createItem = function(text, value) {
        const li = document.createElement("li");
        
        const input = document.createElement("input");
        input.type = "checkbox";
        if(value) input.value = value; // parent has no value

        const label = document.createElement("label");
        label.textContent = text;

        li.appendChild(input);
        li.appendChild(label);
        return li;
    }

    createRoot = (parent, obj)=> {
        const root = document.createElement("ul");
        parent.appendChild(root);
        
        for(let item of obj.items){
            let itemElem = this.createItem(item.text, item.value);
            root.appendChild(itemElem);
            
            
            
            if(item.items){
                var itemRoot = this.createRoot(itemElem, item);
                root.appendChild(itemRoot);
                
                itemElem.classList.add("bef-icon")
                itemElem.querySelector("ul").classList.add("item-root");
                itemElem.querySelector("ul").classList.add("display-none");

                itemElem.querySelector("input").addEventListener("change", (e) => {
                    itemElem.querySelector("ul").classList.toggle("display-none");
                });
            }else{
                
                itemElem.querySelector("input").addEventListener("change", (e) => {
                    if(e.target.checked)
                        values.add(e.target.value);
                    else values.delete(e.target.value);
                });
            }
        }
        return parent;
    }

    render = (elementSelector, obj) =>{
        const rootElem = document.querySelector(elementSelector);
        this.createRoot(rootElem, obj);
    } 

    return {render, values};
}

let obj = {
    items : [
        {
            value : "value 2-1",
            text  : "text 2-1",
        },{
            value : "value 2-2",
            text  : "text 2-2",
            items : [
                {
                    value : "value 3-1",
                    text  : "text 3-1",
                    items : [
                        {
                            value : "value 4-1",
                            text  : "text 4-1",
                            items : [
                                {
                                    value : "value 5-1",
                                    text  : "text 5-1",
                                    items : [
                                        {
                                            value : "value 6-1",
                                            text  : "text 6-1",
                                            items : [
                                                {
                                                    value : "value 7-1",
                                                    text  : "text 7-1",
                                                    items : [
                                                        {
                                                            value : "value 8-1",
                                                            text  : "text 8-1",
                                                        },{
                                                            value : "value 8-1",
                                                            text  : "text 8-1",
                                                        },{
                                                            value : "value 8-1",
                                                            text  : "text 8-1",
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },{
                                    value : "value 5-1",
                                    text  : "text 5-1",
                                },{
                                    value : "value 5-1",
                                    text  : "text 5-1",
                                }
                            ]
                        },{
                            value : "value 3-1",
                            text  : "text 3-1",
                        },{
                            value : "value 3-1",
                            text  : "text 3-1",
                        },{
                            value : "value 3-1",
                            text  : "text 3-1",
                        }
                    ]
                }
            ]
        },{
            value : "value 2-3",
            text  : "text 2-3",
        },{
            value : "value 2-4",
            text  : "text 2-4",
            items : [
                {
                    value : "value 3-1",
                    text  : "text 3-1",
                    items : [
                        {
                            value : "value 3-1",
                            text  : "text 3-1",
                        }
                    ]
                }
            ]
        }
    ]
}

const init = (elementSelector, btn) => {
    let o = multiselectItems();
    o.render(elementSelector, obj);

    document.querySelector(btn).addEventListener("click", ()=>{
        console.log(o.values);
    });
}


init("#multiselect", "#btn")
init("#multiselect2", "#btn2")
